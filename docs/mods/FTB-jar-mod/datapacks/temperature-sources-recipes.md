---
date: 2023-01-22
title: Temperature Sources Recipes
description: Despicts how to use datapacks to modify temperature sources recipes
tags:
    - customize
---

# Usage of datapacks to add recipes

FTB Jar Mod is customizable, and allows temperature sources recipes to be customized by a modpack creator through the use of datapacks.

At the end of this document, you will find [example datapacks](#example-datapacks) to download.

# Temperature Sources recipes

Datapacks are able to remove the built-in temperature sources recipes from the FTB Jar Mod. There are quite a few.

To remove a recipe, we need to overwrite its recipe ID with a new recipe. This is done by placing a new JSON file at the location the recipe would normally be.

Recipe IDs are listed quickly in the document explaining what [temperature](../contents/jars.md#temperature) does.

For example, to remove the lava temperature source, which has the recipe ID `ftbjarmod:temperature_sources/lava`, we have to make an empty JSON file at the location `data/ftbjarmod/recipes/temperature_sources/lava.json`.

For convenience and simplicity, here are all locations done in datapack format, ready to be used :
[remove_all_temperature_sources.zip](./references/temperature-sources-recipes/remove-all-temperature-sources.zip)

::: warning Note
It is not possible to remove the recipe that grants the "none" temperature to [all blocks that don't specify a temperature](../contents/jars.md#blocks-with-no-temperature).
:::

## Adding recipes

Here are some simple examples that add all four temperatures to some blocks.

Adds the "none" temperature to the glowstone block with 25% bonus efficiency (1.25 times faster than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/none/glowstone.json
```json
{
    "temperature": "none",
    "block": "minecraft:glowstone",
    "efficiency": 1.25,
    "type": "ftbjarmod:temperature_source"
}
```
:::

Adds the "low" temperature to the magma block with 50% reduced efficiency (0.5 times slower than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/low/magma_block.json
```json
{
    "temperature": "low",
    "block": "minecraft:magma_block",
    "efficiency": 0.5,
    "type": "ftbjarmod:temperature_source"
}
```
:::

Adds the "high" temperature to the blue magma block with normal efficiency :

::: details data/ftbjarmod/recipes/temperature_sources/high/blue_magma_block.json
```json
{
    "temperature": "high",
    "block": "ftbjarmod:blue_magma_block",
    "efficiency": 1,
    "type": "ftbjarmod:temperature_source"
}
```
:::

Adds the "subzero" temperature to the blue ice block with 300% bonus efficiency (4 times faster than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/subzero/blue_ice.json
```json
{
    "temperature": "subzero",
    "block": "minecraft:blue_ice",
    "efficiency": 4,
    "type": "ftbjarmod:temperature_source"
}
```
:::


## Custom display

If you wish to set the display manually on the temperature source recipe, you may as well. This is particularly useful when using fluids as temperature sources for example, which don't display in item form (they use a filled bucket instead).

### Lava case

Adds lava as a temperature source, but uses the filled lava bucket as the display. Displays the text "Lava" when hovering the Lava Bucket.

![Displaying lava correctly](../images/recipe-examples/lava-display.png "Displaying lava correctly")

Adds the "low" temperature to the lava fluid (in-world) with 300% bonus efficiency (4 times faster than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/low/lava.json
```json
{
    "temperature": "low",
    "block": "minecraft:lava",
    "item": {
        "item": "minecraft:lava_bucket",
        "nbt": {
            "display": {
                "Name": "{\"translate\": \"block.minecraft.lava\"}"
            }
        }
    },
    "efficiency": 4,
    "type": "ftbjarmod:temperature_source"
}
```
:::

### Torch case

Some blocks have variants of themselves, like the torch, and those variants don't have an item form. For example, the torch itself standing up is called a "torch". The torch on a wall however, is called a "wall torch". There is an item called the "torch", but there is no item called "wall torch".

![The two Minecraft torches](../images/recipe-examples/two-torches-in-world.png "The two Minecraft torches")

By placing your block in the world and looking at it while the debug screen (F3) is active will allow you to see the block name in the top right of the screen and see if this applies to a block.

| ![Wall Torch](../images/recipe-examples/wall-torch.png "Wall Torch") |
|:--:|
| <figcaption>The torch placed on a wall shows a different name than when simply standing up</figcaption> |

To handle those special cases, you may need to add two separate entries.

![Displaying torches correctly](../images/recipe-examples/two-torches-display.png "Displaying torches correctly")

Adds the torch standing up as a "low" temperature source with 75% reduced efficiency (0.25 times slower than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/low/torch.json
```json
{
    "temperature": "low",
    "block": "minecraft:torch",
    "item": {
        "item": "minecraft:torch",
        "nbt": {
            "display": {
                "Name": "{\"translate\": \"block.minecraft.torch\"}"
            }
        }
    },
    "efficiency": 0.25,
    "type": "ftbjarmod:temperature_source"
}
```
:::

Adds the torch that is on a wall as a "low" temperature source with 75% reduced efficiency (0.25 times slower than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/low/wall_torch.json
```json
{
    "temperature": "low",
    "block": "minecraft:wall_torch",
    "item": {
        "item": "minecraft:torch",
        "nbt": {
            "display": {
                "Name": "{\"translate\": \"block.minecraft.wall_torch\"}"
            }
        }
    },
    "efficiency": 0.25,
    "type": "ftbjarmod:temperature_source"
}
```
:::

### Creative Temperature Sources

[Creative Temperature Sources](../contents/jars.md#creative-temperature-sources) don't need adjustments by default, but they also don't display in the recipe browser. You can however make them display if you want. In order to do so, you need to override the JSON recipe by adding a new file named after the recipe ID (`ftbjarmod:temperature_sources/creative_high`).

![Creative High Temperature Source](../contents/images/jars/built-in/high-creative.png "Creative High Temperature Source")

Adds the creative high temperature source as a "high" temperature source with 900% bonus efficiency (10 times faster than normal) :

::: details data/ftbjarmod/recipes/temperature_sources/creative_high.json
```json
{
    "temperature": "high",
    "block": "ftbjarmod:creative_high_temperature_source",
    "efficiency": 10,
    "type": "ftbjarmod:temperature_source"
}
```
:::

# Example datapacks

Below you'll find all examples from this page compiled into a downloadable datapack.

[temperature-sources-recipes.zip](./references/temperature-sources-recipes/temperature-sources-recipes.zip)