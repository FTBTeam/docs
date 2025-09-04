export type Recipe = {
    type: string | null
    ingredients: (SlotItem | null)[]
    output: SlotItem
    tags: Tags
}

export type SlotItem = {
    namespace: string
    itemName: string,
    count?: number
}

export interface TagsYaml {
    tags: Tags
}

export interface Tags {
    [namespace: string]: {
        [tag: string]: string[]
    }
}
