export type Recipe = {
    type: string | null
    ingredients: string[]
    output: RecipeOutput
}

export type RecipeOutput = {
    item: string
    count: number
}

export const getNamespace = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[0] : 'minecraft';
}
export const getItemName = (item: string | null): string | null => {
    if (!item) return null;
    return item.includes(':') ? item.split(':')[1] : item;
}
