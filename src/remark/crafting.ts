import {visit} from 'unist-util-visit';

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
                            name: "recipes",
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

const parseCrafting = (code: string): [string[], string | null] => {
    const lines = code.split('\n');
    const grid = [];
    let result = null;

    for (const line of lines) {
        if (line.startsWith('result:')) {
            result = line.replace('result:', '').trim();
        } else if (line.trim()) {
            const items = line.split(/\s+/).map(item =>
                item === '-' ? null : item
            );
            grid.push(...items);
        }
    }

    return [grid, result]
}

module.exports = plugin;
