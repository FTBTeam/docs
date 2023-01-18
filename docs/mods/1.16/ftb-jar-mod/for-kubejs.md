---
date: 2023-01-13
title: KubeJS Integration
description: Despicts how KubeJS is integrated into FTB Jar Mod
---

# Usage of KubeJS to add recipes

FTB Jar Mod is customizable, and allows certain types of recipes to be added by a modpack creator through the use of [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge). KubeJS makes it much easier to add recipes in bulk!


The type of recipes that can be customized are:
- [Tempered Glass Jar recipes](#tempered-glass-jar-recipes)
- [Temperature Sources recipes](#temperature-sources-recipes)

# Tempered Glass Jar recipes

Tempered Glass Jar recipes by default take as much time as a Furnace to finish crafting, which is 10 seconds, or 200 game ticks.

## Tips before we start

In KubeJS, which uses JavaScript syntax, you can define constants which can simplify work for you. All following examples will use the full definition of function calls, without any simplification.  
At the end of this document, however, you'll find all the examples in the simplified syntax if you wish to skip ahead.

## Simple recipe with "none" temperature

This simplest use case of FTB Jar Mod adds in a recipe for an Oak Sapling in the Tempered Glass Jar.

![Oak Sapling made in a Tempered Glass Jar](./images/recipe-examples/oak-sapling.png "Oak Sapling made in a Tempered Glass Jar")

This is one of the most simple recipes you can add, and will transform a Dead Bush into an Oak Sapling over 10 seconds, using 1 bucket of water.
```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]);
});
```

This will do the same thing, but multiply the time the recipe uses by 1.1 times. This means that this recipe now takes 11 seconds to complete.
```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).timeScale(1.1);
});
```

This will do the same thing, but set the time the recipe uses to 240 game ticks, which is equal to 12 seconds.
```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).time(240);
});
```

This will do the same thing, but will also explicitly set the temperature required for the recipe to "none". By default, all recipes use the "none" temperature, so nothing changes here.
```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).temperature('none');
});
```

If we wanted to explicitly set the temperature ourselves, we could use any of the following functions instead of `.temperature('none')`:
- `.temperature('none')`
- `.temperature('low')`
- `.temperature('high')`
- `.temperature('subzero')`

Example using a "low" temperature instead:
```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).temperature('low');
});
```

## Drying a coral block with "low" temperature

![Coral block drying up](./images/recipe-examples/coral.png "Coral block drying up")

This will transform a Tube Coral Block into a Dead Tube Coral block under low temperature, over 2 seconds (40 game ticks).

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:dead_tube_coral_block', 'minecraft:tube_coral_block').lowTemp().time(40);
});
```

## Smelting gold ore under "high" temperature

This recipe will transform any 2 gold ores and a Glowstone Dust into 8 gold ingots, using 500 millibuckets of lava (1/2 of a bucket of lava) and under high temperature. The recipe will take 10 seconds to complete.

![Smelting gold ore](./images/recipe-examples/gold-ingots.gif "Smelting gold ore")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('8x minecraft:gold_ingot', ['2x #minecraft:gold_ores', 'minecraft:glowstone_dust', Fluid.of('minecraft:lava', 500)]).highTemp();
});
```

## Enchanting a golden pickaxe under "high" temperature

This will enchant a newly crafted golden pickaxe with any 3 emeralds to gain the enchantment Fortune III.

![Enchanting a golden pickaxe](./images/recipe-examples/golden-pickaxe.gif "Enchanting a golden pickaxe")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar(Item.of('minecraft:golden_pickaxe').enchant('minecraft:fortune', 3), ['minecraft:golden_pickaxe', '3x #forge:gems/emerald']).highTemp();
});
```

## Water bottle turning into snowball under "subzero" temperature

A water bottle contains named binary tag (NBT) just like the above example. This will convert the water bottle into a snowball and the glass bottle itself is lost in the process.

![Snowballs recipe](./images/recipe-examples/bottle-to-snowball.png "Snowballs recipe")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:snowball', Item.of('minecraft:potion', '{Potion:"minecraft:water"}')).subzeroTemp();
});
```

## Water to ice under "subzero" temperature

This will convert water as a fluid into ice. This means this recipe requires connected Glass Jars filled with water.

![Water to ice](./images/recipe-examples/water-to-ice.png "Water to ice")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:ice', Fluid.of('minecraft:water', 1000)).subzeroTemp();
});
```

## Ice to packed ice under "subzero" temperature

This will further convert ice into packed ice, using water and 50 percent more time, requiring a total of 15 seconds to craft this recipe.

![Ice to packed ice](./images/recipe-examples/ice-to-packed-ice.png "Ice to packed ice")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:packed_ice', ['minecraft:ice', Fluid.of('minecraft:water', 1000)]).subzeroTemp().timeScale(1.5);
});
```

# Temperature Sources recipes

KubeJS has the option to be able to remove the present temperature sources recipes from the FTB Jar Mod. There are quite a few.

Here is one long way you could remove all those recipes by recipe "id".

```js
onEvent('recipes', (event) => {
    event.remove({ id: "ftbjarmod:temperature_sources/beacon" });
    event.remove({ id: "ftbjarmod:temperature_sources/blue_ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/blue_magma_block" });
    event.remove({ id: "ftbjarmod:temperature_sources/campfire" });
    event.remove({ id: "ftbjarmod:temperature_sources/creative_high" });
    event.remove({ id: "ftbjarmod:temperature_sources/creative_low" });
    event.remove({ id: "ftbjarmod:temperature_sources/creative_subzero" });
    event.remove({ id: "ftbjarmod:temperature_sources/crying_obsidian" });
    event.remove({ id: "ftbjarmod:temperature_sources/fire" });
    event.remove({ id: "ftbjarmod:temperature_sources/glowstone_block" });
    event.remove({ id: "ftbjarmod:temperature_sources/ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/lava" });
    event.remove({ id: "ftbjarmod:temperature_sources/magma_block" });
    event.remove({ id: "ftbjarmod:temperature_sources/packed_ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/respawn_anchor" });
    event.remove({ id: "ftbjarmod:temperature_sources/soul_campfire" });
    event.remove({ id: "ftbjarmod:temperature_sources/soul_fire" });
    event.remove({ id: "ftbjarmod:temperature_sources/torch" });
    event.remove({ id: "ftbjarmod:temperature_sources/wall_torch" });
});
```

::: warning Note
It is not possible to remove the recipe that grants the "none" temperature to [all blocks that don't specify a temperature](./contents/jars.md#blocks-with-no-temperature).
:::

Here is a much shorter way if you plan on removing all of them in any case.

```js
onEvent('recipes', (event) => {
    event.remove({type: "ftbjarmod:temperature_source"});
});
```

