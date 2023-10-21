---
date: 2023-01-22
title: Tempered Glass Jar Recipes
description: Depicts how to use datapacks to modify tempered glass jar recipes
tags:
  - customize
---

# Usage of datapacks to add recipes

FTB Jar Mod is customizable, and allows tempered glass jar recipes to be added by a modpack creator through the use of datapacks.

At the end of this document, you will find [example datapacks](#example-datapacks) to download.

## Tempered Glass Jar recipes

Tempered Glass Jar recipes by default take as much time as a Furnace to finish crafting, which is 10 seconds, or 200 game ticks.

### Simple recipe with "none" temperature

This simplest use case of FTB Jar Mod adds in a recipe for an Oak Sapling in the Tempered Glass Jar.

![Oak Sapling made in a Tempered Glass Jar](../_assets/Recipe%20Examples/oak-sapling.png "Oak Sapling made in a Tempered Glass Jar")

This is one of the most simple recipes you can add, and will transform a dead bush into an oak sapling over 10 seconds, using 1 bucket of water.

<details>
  <summary>data/ftbjarmod/recipes/jar/oak_sapling_1.json</summary>

```json
{
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:oak_sapling",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:dead_bush"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

This will do the same thing, but multiply the time the recipe uses by 1.1 times. This means that this recipe now takes 11 seconds to complete.

<details>
  <summary>data/ftbjarmod/recipes/jar/oak_sapling_2.json</summary>

```json
{
  "timeScale": 1.1,
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:oak_sapling",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:dead_bush"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

This will do the same thing, but set the time the recipe uses to 240 game ticks, which is equal to 12 seconds.

<details>
  <summary>data/ftbjarmod/recipes/jar/oak_sapling_3.json</summary>

```json
{
  "time": 240,
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:oak_sapling",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:dead_bush"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

This will do the same thing, but will also explicitly set the temperature required for the recipe to "none". By default, all recipes use the "none" temperature, so nothing changes here.

<details>
  <summary>data/ftbjarmod/recipes/jar/oak_sapling_4.json</summary>

```json
{
  "temperature": "none",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:oak_sapling",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:dead_bush"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

If we wanted to explicitly set the temperature ourselves, we could use any of the following properties instead of `"temperature": "none"` :

- `"temperature": "none"`
- `"temperature": "low"`
- `"temperature": "high"`
- `"temperature": "subzero"`

Example using a "low" temperature instead :

<details>
  <summary>data/ftbjarmod/recipes/jar/oak_sapling_low.json</summary>

```json
{
  "temperature": "low",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:oak_sapling",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:dead_bush"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

### Drying a coral block with "low" temperature

![Coral block drying up](../_assets/Recipe%20Examples/coral.png "Coral block drying up")

This will transform a tube coral block into a dead tube coral block under low temperature, over 2 seconds (40 game ticks).

<details>
  <summary>data/ftbjarmod/recipes/jar/dry_tube_coral.json</summary>

```json
{
  "temperature": "low",
  "time": 40,
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:dead_tube_coral_block",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:tube_coral_block"
      },
      "count": 1
    }
  ]
}
```

</details>

### Smelting gold ore under "high" temperature

This recipe will transform any 2 gold ores and a glowstone dust into 8 gold ingots, using 500 millibuckets of lava (1/2 of a bucket of lava) and under high temperature. The recipe will take 10 seconds to complete.

![Smelting gold ore](../_assets/Recipe%20Examples/gold-ingots.gif "Smelting gold ore")

<details>
  <summary>data/ftbjarmod/recipes/jar/smelt_gold_ore.json</summary>

```json
{
  "temperature": "high",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:gold_ingot",
      "count": 8
    }
  ],
  "input": [
    {
      "ingredient": {
        "tag": "minecraft:gold_ores"
      },
      "count": 2
    },
    {
      "ingredient": {
        "item": "minecraft:glowstone_dust"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:lava\",Amount:500}}"
      },
      "count": 1
    }
  ]
}
```

</details>

### Enchanting a golden pickaxe under "high" temperature

This will enchant a newly crafted golden pickaxe with any 3 emeralds to gain the enchantment Fortune III.

![Enchanting a golden pickaxe](../_assets/Recipe%20Examples/golden-pickaxe.gif "Enchanting a golden pickaxe")

<details>
  <summary>data/ftbjarmod/recipes/jar/enchant_golden_pickaxe.json</summary>

```json
{
  "temperature": "high",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:golden_pickaxe",
      "count": 1,
      "nbt": "{Damage:0,Enchantments:[{lvl:3s,id:\"minecraft:fortune\"}]}"
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:golden_pickaxe",
        "type": "forge:nbt",
        "nbt": "{Damage:0}"
      },
      "count": 1
    },
    {
      "ingredient": {
        "tag": "forge:gems/emerald"
      },
      "count": 3
    }
  ]
}
```

</details>

### Cobblestone to lava under "high" temperature

This will allow one to convert cobblestone listed in the `#forge:cobblestone` to one bucket of lava and will require 3 seconds to make.

![Lava from cobblestone](../_assets/Recipe%20Examples/cobblestone-to-lava.png "Lava from cobblestone")

<details>
  <summary>data/ftbjarmod/recipes/jar/cobblestone_to_lava.json</summary>

```json
{
  "time": 60,
  "temperature": "high",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "ftblibrary:fluid_container",
      "count": 1,
      "nbt": "{Fluid:{FluidName:\"minecraft:lava\",Amount:1000}}"
    }
  ],
  "input": [
    {
      "ingredient": {
        "tag": "forge:cobblestone"
      },
      "count": 1
    }
  ]
}
```

</details>

### Complicated iron ore recipe under "high" temperature

This complicated recipe will take one bucket of lava and one iron ore and process them over one (1) second in order to create a block of stone and an iron ingot.

![Iron ore processing recipe](../_assets/Recipe%20Examples/iron-ore-and-lava.png "Iron ore processing recipe")

<details>
  <summary>data/ftbjarmod/recipes/jar/smelt_iron_ore.json</summary>

```json
{
  "time": 20,
  "temperature": "high",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:stone",
      "count": 1
    },
    {
      "item": "minecraft:iron_ingot",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "tag": "forge:ores/iron"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:lava\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

### Water bottle turning into snowball under "subzero" temperature

A water bottle contains named binary tag (NBT) just like the above example. This will convert the water bottle into a snowball and the glass bottle itself is lost in the process.

![Snowballs recipe](../_assets/Recipe%20Examples/bottle-to-snowball.png "Snowballs recipe")

<details>
  <summary>data/ftbjarmod/recipes/jar/freeze_water_bottle.json</summary>

```json
{
  "temperature": "subzero",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:snowball",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:potion",
        "type": "forge:nbt",
        "nbt": "{Potion:\"minecraft:water\"}"
      },
      "count": 1
    }
  ]
}
```

</details>

### Water to ice under "subzero" temperature

This will convert water as a fluid into ice. This means this recipe requires connected Glass Jars filled with water.

![Water to ice](../_assets/Recipe%20Examples/water-to-ice.png "Water to ice")

<details>
  <summary>data/ftbjarmod/recipes/jar/freeze_water.json</summary>

```json
{
  "temperature": "subzero",
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:ice",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

### Ice to packed ice under "subzero" temperature

This will further convert ice into packed ice, using water and 50 percent more time, requiring a total of 15 seconds to craft this recipe.

![Ice to packed ice](../_assets/Recipe%20Examples/ice-to-packed-ice.png "Ice to packed ice")

<details>
  <summary>data/ftbjarmod/recipes/jar/freeze_water_and_ice.json</summary>

```json
{
  "temperature": "subzero",
  "timeScale": 1.5,
  "type": "ftbjarmod:jar",
  "output": [
    {
      "item": "minecraft:packed_ice",
      "count": 1
    }
  ],
  "input": [
    {
      "ingredient": {
        "item": "minecraft:ice"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ftblibrary:fluid_container",
        "type": "forge:nbt",
        "nbt": "{Fluid:{FluidName:\"minecraft:water\",Amount:1000}}"
      },
      "count": 1
    }
  ]
}
```

</details>

## Example datapacks

Below you'll find all examples from this page compiled into a downloadable datapack.

[tempered-glass-jar-recipes.zip](./_assets/tempered-glass-jar-recipes.zip)
