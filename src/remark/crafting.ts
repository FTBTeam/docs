import {visit} from 'unist-util-visit';
import {SlotItem} from "@site/src/components/Crafting/util";

const plugin = (options: any) => {
    const transform = async (tree: any) => {
        visit(tree, 'code', (node, index, parent) => {
            if (node.lang === 'crafting') {
                const [ingredients, output] = parseCrafting(node.value)
                const type = node.meta || null;
                parent.children[index] = {
                    type: "mdxJsxFlowElement",
                    name: "Crafting",
                    attributes: [
                        {
                            type: "mdxJsxAttribute",
                            name: "recipeString",
                            value: JSON.stringify({
                                ingredients,
                                output,
                                type
                            }),
                        },
                    ],
                    children: [],
                };
            }
        });
    }
    return transform;
}

const getNamespace = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[0] : 'minecraft';
}
const getItemName = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[1] : item;
}


const parseCrafting = (code: string): [SlotItem[], SlotItem] => {
    const lines = code.split('\n');
    const grid: SlotItem[] = [];
    let output: SlotItem = null;

    for (const line of lines) {
        if (line.startsWith('result:')) {
            const result = line.replace('result:', '').trim().split(',');
            output = {namespace: getNamespace(result[0]), itemName: getItemName(result[0]), count: result[1] ? parseInt(result[1]) : 1};
        } else if (line.trim()) {
            const items: SlotItem[] = line.split(/\s+/).map(item => {
                const namespace = getNamespace(item)
                const itemName = getItemName(item)
                return item === '-' ? null : {namespace, itemName}
            });
            grid.push(...items);
        }
    }

    return [grid, output]
}

module.exports = plugin;
