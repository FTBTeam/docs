import {visit} from 'unist-util-visit';

type Recipe = {
    type: string | null
    ingredients: string[]
    output: RecipeOutput
}

type RecipeOutput = {
    item: string
    count: number
}

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

const parseCrafting = (code: string): [string[], RecipeOutput] => {
    const lines = code.split('\n');
    const grid = [];
    let output: RecipeOutput = null;

    for (const line of lines) {
        if (line.startsWith('result:')) {
            let result = line.replace('result:', '').trim().split(',');
            output = {item: result[0], count: result[1] ? parseInt(result[1]) : 1};
        } else if (line.trim()) {
            const items = line.split(/\s+/).map(item =>
                item === '-' ? null : item
            );
            grid.push(...items);
        }
    }

    return [grid, output]
}

module.exports = plugin;
