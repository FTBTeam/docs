import {visit} from 'unist-util-visit';
import {SlotItem, TagsYaml} from "@site/src/components/Crafting/util";
import fs from "fs";
import path from "path";
import yaml from "yaml";

const plugin = (options: any) => {
    const transform = async (tree: any) => {
        visit(tree, 'code', (node, index, parent) => {
            if (node.lang === 'crafting') {
                const meta = node.meta ? node.meta.split(",") : []
                const [ingredients, output] = parseCrafting(node.value)
                const tags = loadTags();
                const type = meta[0] || null;
                const customTableName = meta[1] || null;
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
                                type,
                                tags: tags.tags,
                                customTableName
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
    let output: SlotItem = {namespace: '', itemName: '', count: 0};

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

const loadTags = (): TagsYaml => {
    const filePath = path.join(__dirname, 'tags.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.parse(fileContents) as TagsYaml;
}

module.exports = plugin;
