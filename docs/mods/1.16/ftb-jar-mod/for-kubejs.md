---
date: 2023-01-13
title: KubeJS Integration
description: Despicts how KubeJS is integrated into FTB Jar Mod
---

# Usage of KubeJS to add recipes

FTB Jar Mod is customizable, and allows certain types of recipes to be added by a modpack creator through the use of [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge). KubeJS makes it much easier to add recipes in bulk!


The type of recipes that can be customized are:
- Tempered Glass Jar recipes
- Temperature Sources recipes

# Tempered Glass Jar recipes

Tempered Glass Jar recipes by default take as much time as a Furnace to finish crafting, which is 10 seconds, or 200 game ticks.

## Tips before we start

In KubeJS, which uses JavaScript syntax, you can define constants which can simplify work for you. All following examples will use the full definition of function calls, without any simplification.  
At the end of this document, however, you'll find all the examples in the simplified syntax if you wish to skip ahead.

## Simple recipe with "none" temperature

This simplest use case of FTB Jar Mod adds in a recipe for an Oak Sapling in the Tempered Glass Jar.

![Oak Sapling made in a Tempered Glass Jar](./images/recipe-examples/oak_sapling.png "Oak Sapling made in a Tempered Glass Jar")

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

```js
onEvent('recipes', (event) => {
    
});
```

```js
onEvent('recipes', (event) => {
    
});
```

```js
onEvent('recipes', (event) => {
    
});
```

```js
onEvent('recipes', (event) => {
    
});
```

```js
onEvent('recipes', (event) => {
    
});
```

```js
onEvent('recipes', (event) => {
    
});
```