export type Recipe = {
    type: string | null
    ingredients: (SlotItem | null)[]
    output: SlotItem
}

export type SlotItem = {
    namespace: string
    itemName: string,
    count?: number
}
