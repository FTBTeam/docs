---
title: Compacting Recipe
---

This allows you to register a compacting recipe for the Compacting Drawer.

To register a recipe send a scriptevent with id `ftb_sd:register_compacting_recipe` as json with data

- `topSlot` - the top slot of the drawer item
- `bottomSlot` - the bottom slot of the drawer item - This is the item that will be compacted into the top slot
- `bottomSlotCount` - The amount of the bottom slot item that will be compacted into the top slot

### Code Example (TypeScript)
```typescript
interface CompactingRecipe {
    topSlot: string;
    bottomSlot: string;
    bottomSlotCount: number;
}

function registerRecipe(recipe: CompactingRecipe): void {
    system.sendScriptEvent("ftb_sd:register_compacting_recipe", JSON.stringify(recipe));
}

world.afterEvents.worldInitialize.subscribe((event) => {
    registerRecipe({
        topSlot: "minecraft:diamond_block",
        bottomSlot: "minecraft:diamond",
        bottomSlotCount: 9
    });
})
```

### Command Example
```
/scriptevent ftb_sd:register_compacting_recipe '{"topSlot":"minecraft:diamond_block","bottomSlot":"minecraft:diamond","bottomSlotCount":9}'
```

:::warning
Please note if using commands to register a recipe you must run the command at least once every time you load the world
:::
