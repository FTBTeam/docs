---
date: 2023-01-13
title: KubeJS Integration
description: Despicts how KubeJS is integrated into FTB Jar Mod
tags:
    - customize
---

# Usage of KubeJS to add or remove recipes

FTB Jar Mod is customizable, and allows certain types of recipes to be added by a modpack creator through the use of [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge). KubeJS makes it much easier to add recipes in bulk!


The type of recipes that can be customized are:
- [Tempered Glass Jar recipes](#tempered-glass-jar-recipes)
- [Temperature Sources recipes](#temperature-sources-recipes)

:::tip Tip
In KubeJS, which uses JavaScript syntax, you can define constants which can simplify work for you. All following examples will use the full definition of function calls, without any simplification.  
At the end of this document, however, you'll find all the examples in the [simplified syntax](#simplified-examples) if you wish to skip ahead.
:::

# Tempered Glass Jar recipes

Tempered Glass Jar recipes by default take as much time as a Furnace to finish crafting, which is 10 seconds, or 200 game ticks.

## Simple recipe with "none" temperature

This simplest use case of FTB Jar Mod adds in a recipe for an Oak Sapling in the Tempered Glass Jar.

![Oak Sapling made in a Tempered Glass Jar](./images/recipe-examples/oak-sapling.png "Oak Sapling made in a Tempered Glass Jar")

This is one of the most simple recipes you can add, and will transform a dead bush into an oak sapling over 10 seconds, using 1 bucket of water.
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

If we wanted to explicitly set the temperature ourselves, we could use any of the following functions instead of `temperature('none')`:
- `temperature('none')`
- `temperature('low')`
- `temperature('high')`
- `temperature('subzero')`

Example using a "low" temperature instead:
```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).temperature('low');
});
```

## Drying a coral block with "low" temperature

![Coral block drying up](./images/recipe-examples/coral.png "Coral block drying up")

This will transform a tube coral block into a dead tube coral block under low temperature, over 2 seconds (40 game ticks).

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar('minecraft:dead_tube_coral_block', 'minecraft:tube_coral_block').lowTemp().time(40);
});
```

## Smelting gold ore under "high" temperature

This recipe will transform any 2 gold ores and a glowstone dust into 8 gold ingots, using 500 millibuckets of lava (1/2 of a bucket of lava) and under high temperature. The recipe will take 10 seconds to complete.

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

## Cobblestone to lava under "high" temperature

This will allow one to convert cobblestone listed in the `#forge:cobblestone` to one bucket of lava and will require 3 seconds to make.

![Lava from cobblestone](./images/recipe-examples/cobblestone-to-lava.png "Lava from cobblestone")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar(Fluid.of('minecraft:lava', 1000), '#forge:cobblestone').time(60).highTemp();
});
```

## Complicated iron ore recipe under "high" temperature

This complicated recipe will take one bucket of lava and one iron ore and process them over one (1) second in order to create a block of stone and an iron ingot.

![Iron ore processing recipe](./images/recipe-examples/iron-ore-and-lava.png "Iron ore processing recipe")

```js
onEvent('recipes', (event) => {
    event.recipes.ftbjarmod.jar(
        [
            'minecraft:stone', 'minecraft:iron_ingot'
        ],
        [
            '#forge:ores/iron', Fluid.of('minecraft:lava', 1000)
        ]
    ).time(20).highTemp();
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

## Adding recipes

Here are some simple examples that add all four temperatures to some blocks.

```js
onEvent('recipes', (event) => {
    /*Adds the "none" temperature to the Glowstone
    block with 25% bonus efficiency (1.25 times faster than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'none',
        block: 'minecraft:glowstone',
        efficiency: 1.25
    });

    /*Adds the "low" temperature to the Magma Block
    with 50% reduced efficiency (0.5 times slower than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'low',
        block: 'minecraft:magma_block',
        efficiency: 0.5
    });

    /*Adds the "high" temperature to the Blue Magma
    Block with normal efficiency*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'high',
        block: 'ftbjarmod:blue_magma_block',
        efficiency: 1.0
    });

    /*Adds the "subzero" temperature to the Blue Ice
    block with 300% bonus efficiency (4 times faster than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'subzero',
        block: 'minecraft:blue_ice',
        efficiency: 4.0
    });
});
```

## Custom display

If you wish to set the display manually on the temperature source recipe, you may as well. This is particularly useful when using fluids as temperature sources for example, which don't display in item form (they use a filled bucket instead).

### Lava case

Adds lava as a temperature source, but uses the filled lava bucket as the display. Displays the text "Lava" when hovering the Lava Bucket.

![Displaying lava correctly](./images/recipe-examples/lava-display.png "Displaying lava correctly")

```js
onEvent('recipes', (event) => {
    /*Adds the "low" temperature to the lava fluid (in-world) with
    300% bonus efficiency (4 times faster than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'low',
        block: 'minecraft:lava',
        item: {
            item: 'minecraft:lava_bucket',
            nbt: {
                display: {
                    Name: '{"translate": "block.minecraft.lava"}',
                },
            },
        },
        efficiency: 4.0
    });
});
```

### Torch case

Some blocks have variants of themselves, like the torch, and those variants don't have an item form. For example, the torch itself standing up is called a "torch". The torch on a wall however, is called a "wall torch". There is an item called the "torch", but there is no item called "wall torch".

![The two Minecraft torches](./images/recipe-examples/two-torches-in-world.png "The two Minecraft torches")

By placing your block in the world and looking at it while the debug screen (F3) is active will allow you to see the block name in the top right of the screen and see if this applies to a block.

| ![Wall Torch](./images/recipe-examples/wall-torch.png "Wall Torch") |
|:--:|
| <figcaption>The torch placed on a wall shows a different name than when simply standing up</figcaption> |

To handle those special cases, you may need to add two separate entries.

![Displaying torches correctly](./images/recipe-examples/two-torches-display.png "Displaying torches correctly")

```js
onEvent('recipes', (event) => {
    /*Adds the torch standing up as a "low" temperature source
    with 75% reduced efficiency (0.25 times slower than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'low',
        block: 'minecraft:torch',
        item: {
            item: 'minecraft:torch',
            nbt: {
                display: {
                    Name: '{"translate": "block.minecraft.torch"}',
                },
            },
        },
        efficiency: 0.25
    });

    /*Adds the torch that is on a wall as a "low" temperature source
    with 75% reduced efficiency (0.25 times slower than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'low',
        block: 'minecraft:wall_torch',
        item: {
            item: 'minecraft:torch',
            nbt: {
                display: {
                    Name: '{"translate": "block.minecraft.wall_torch"}',
                },
            },
        },
        efficiency: 0.25
    });
});
```

### Creative Temperature Sources

[Creative Temperature Sources](./contents/jars.md#creative-temperature-sources) don't need adjustments by default, but they also don't display in the recipe browser. You can however make them display if you want. Just like with a datapack, overriding the recipe ID will result in that recipe being modified and shown in-game.

Here is an example of the Creative High Temperature Source being added again so that it can display in-game, using its recipe ID inside the `id()` function.

![Creative High Temperature Source](./contents/images/jars/built-in/high-creative.png "Creative High Temperature Source")

```js
onEvent('recipes', (event) => {
    /*Adds the creative high temperature source as a "high" temperature source
    with 900% bonus efficiency (10 times faster than normal)*/
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'high',
        block: 'ftbjarmod:creative_high_temperature_source',
        efficiency: 10.0,
    }).id('ftbjarmod:temperature_sources/creative_high');
});
```

# Simplified Examples

Below you'll find all examples from this page compiled into two example scripts. None that you might need to use only specific portions of these scripts for what you want to achieve.

## Tempered Glass Jar recipes

```js
onEvent('recipes', (event) => {
    //Defining what a Tempered Glass Jar is
    const jar = event.recipes.ftbjarmod.jar;

    //Simple recipe with "none" temperature
    jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]);
    jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).timeScale(1.1);
    jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).time(240);
    jar('minecraft:oak_sapling', ['minecraft:dead_bush', Fluid.of('minecraft:water', 1000)]).temperature('none');

    //Drying a coral block with "low" temperature
    jar('minecraft:dead_tube_coral_block', 'minecraft:tube_coral_block').lowTemp().time(40);

    //Smelting gold ore under "high" temperature
    jar('8x minecraft:gold_ingot', ['2x #minecraft:gold_ores', 'minecraft:glowstone_dust', Fluid.of('minecraft:lava', 500)]).highTemp();


    //Enchanting a golden pickaxe under "high" temperature
    jar(Item.of('minecraft:golden_pickaxe').enchant('minecraft:fortune', 3), ['minecraft:golden_pickaxe', '3x #forge:gems/emerald']).highTemp();

    //Cobblestone to lava under "high" temperature
    jar(Fluid.of('minecraft:lava', 1000), '#forge:cobblestone').time(400).highTemp();

    //Complicated iron ore recipe under "high" temperature
    jar(
        [
            'minecraft:stone', 'minecraft:iron_ingot'
        ],
        [
            '#forge:ores/iron', Fluid.of('minecraft:lava', 1000)
        ]
    ).time(20).highTemp();

    //Water bottle turning into snowball under "subzero" temperature
    jar('minecraft:snowball', Item.of('minecraft:potion', '{Potion:"minecraft:water"}')).subzeroTemp();

    //Water to ice under "subzero" temperature
    jar('minecraft:ice', Fluid.of('minecraft:water', 1000)).subzeroTemp();

    //Ice to packed ice under "subzero" temperature
    jar('minecraft:packed_ice', ['minecraft:ice', Fluid.of('minecraft:water', 1000)]).subzeroTemp().timeScale(1.5);
});
```

## Temperature Sources recipes

```js
onEvent('recipes', (event) => {
    //Remove all temperature sources recipes by id, one by one
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

    //Remove all temperatures sources in one line, equivalent to above
    event.remove({ type: "ftbjarmod:temperature_source" });

    //Define a function that can add a normal temperature source
    const source = (temperature, block, efficiency) => {
        event.recipes.ftbjarmod.temperature_source({
            temperature: temperature,
            block: block,
            efficiency: efficiency,
        });
    };

    //Define a function that can add a temperature source with custom item display
    const sourceWithItem = (temperature, block, efficiency, item) => {
        event.recipes.ftbjarmod.temperature_source({
            temperature: temperature,
            block: block,
            item: item,
            efficiency: efficiency,
        });
    };

    /*Adds the "none" temperature to the Glowstone
    block with 25% bonus efficiency (1.25 times faster than normal)*/
    source('none', 'minecraft:glowstone', 1.25);

    /*Adds the "low" temperature to the Magma Block
    with 50% reduced efficiency (0.5 times slower than normal)*/
    source('low', 'minecraft:magma_block', 0.5);

    /*Adds the "high" temperature to the Blue Magma
    Block with normal efficiency*/
    source('high', 'ftbjarmod:blue_magma_block', 1.0);

    /*Adds the "subzero" temperature to the Blue Ice
    block with 300% bonus efficiency (4 times faster than normal)*/
    source('subzero', 'minecraft:blue_ice', 4.0);

    /*Adds the "low" temperature to the lava fluid (in-world) with
    300% bonus efficiency (4 times faster than normal)*/
    sourceWithItem('low', 'minecraft:lava', 4.0,
        { item: 'minecraft:lava_bucket', nbt: { display: { Name: '{"translate": "block.minecraft.lava"}' } } }
    );

    /*Adds the torch standing up as a "low" temperature source
    with 75% reduced efficiency (0.25 times slower than normal)*/
    sourceWithItem('low', 'minecraft:torch', 0.25,
        { item: 'minecraft:torch', nbt: { display: { Name: '{"translate": "block.minecraft.torch"}' } } }
    );

    /*Adds the torch that is on a wall as a "low" temperature source
    with 75% reduced efficiency (0.25 times slower than normal)*/
    sourceWithItem('low', 'minecraft:wall_torch', 0.25,
        { item: 'minecraft:torch', nbt: { display: { Name: '{"translate": "block.minecraft.wall_torch"}' } } }
    );

    /*Adds the creative high temperature source as a "high" temperature source
    with 900% bonus efficiency (10 times faster than normal)*/
    /*If you want to use .id() you need to use this format, or add an
    extra parameter to the .source() function as follows: */
    // const sourceWithID = (temperature, block, efficiency, recipeID) => {
    //     event.recipes.ftbjarmod.temperature_source({
    //         temperature: temperature,
    //         block: block,
    //         efficiency: efficiency,
    //     }).id(recipeID);
    // };
    //
    //sourceWithID('high', 'ftbjarmod:creative_high_temperature_source', 10.0, 'ftbjarmod:temperature_sources/creative_high');
    event.recipes.ftbjarmod.temperature_source({
        temperature: 'high',
        block: 'ftbjarmod:creative_high_temperature_source',
        efficiency: 10.0,
    }).id('ftbjarmod:temperature_sources/creative_high');
});
```

