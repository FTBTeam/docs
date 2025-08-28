type Recipe = {
    type: string | null
    ingredients: string[]
    output: RecipeOutput
}

type RecipeOutput = {
    item: string
    count: number
}

const getNamespace = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[0] : 'minecraft';
}
const getItemName = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[1] : item;
}

export {Recipe, RecipeOutput, getNamespace, getItemName};
