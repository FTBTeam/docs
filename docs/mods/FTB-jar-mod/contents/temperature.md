---
date: 2023-01-24
title: Temperature
description: How temperature affects crafting
tags:
    - none
    - low
    - high
    - subzero
---

# Temperature

[Tempered Glass Jars](./tempered-glass-jars.md) use temperature in order to craft items. Temperature can come from a block directly under the [Tempered Glass Jars](./tempered-glass-jars.md). There are four different levels of temperature:

| Temperature | Icon | Effect |
|:--:|:--:|:--:|
| None | ![None](./images/temperature/temperature-none.png "None") | ![None](./images/temperature/tempered-glass-jar-none.png "None") |
| Low | ![Low](./images/temperature/temperature-low.png "Low") | ![Low](./images/temperature/tempered-glass-jar-low.png "Low") |
| High | ![High](./images/temperature/temperature-high.png "High") | ![High](./images/temperature/tempered-glass-jar-high.png "High") |
| Sub-Zero | ![Sub-Zero](./images/temperature/temperature-subzero.png "Sub-Zero") | ![Sub-Zero](./images/temperature/tempered-glass-jar-subzero.png "Sub-Zero") |

FTB Jar Mod also adds temperature to some blocks by default. These can be disabled by removing the temperature recipes, for example, using [KubeJS](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge), [CraftTweaker](https://www.curseforge.com/minecraft/mc-mods/crafttweaker) or datapacks.

This section will also be covered more in details in the documents for KubeJS integration or datapack.

| Block | Efficiency | <div style="width:15em">Visual Recipe</div> | Recipe ID |
|:--:|:--:|:--:|:--:|
| `minecraft:respawn_anchor` | 8.0x | ![Respawn Anchor](./images/temperature/built-in/none-1.png "Respawn Anchor") | `ftbjarmod:temperature_sources/respawn_anchor` |
| `minecraft:glowstone` | 1.25x | ![Glowstone](./images/temperature/built-in/none-2.png "Glowstone") | `ftbjarmod:temperature_sources/glowstone_block` |
| `minecraft:crying_obsidian` | 3.0x | ![Crying Obsidian](./images/temperature/built-in/none-3.png "Crying Obsidian") | `ftbjarmod:temperature_sources/crying_obsidian` |
| `minecraft:torch` & `minecraft:wall_torch` | 0.25x | ![Torch](./images/temperature/built-in/low-1.png "Torch") | `ftbjarmod:temperature_sources/torch` & `ftbjarmod:temperature_sources/wall_torch` |
| `minecraft:fire` | 0.75x | ![Fire](./images/temperature/built-in/low-2.gif "Fire") | `ftbjarmod:temperature_sources/fire` |
| `minecraft:lava` | 4.0x | ![Lava](./images/temperature/built-in/low-3.png "Lava") | `ftbjarmod:temperature_sources/lava` |
| `minecraft:campfire` | 0.5x | ![Campfire](./images/temperature/built-in/low-4.png "Campfire") | `ftbjarmod:temperature_sources/campfire` |
| `minecraft:magma_block` | 0.5x | ![Magma Block](./images/temperature/built-in/low-5.png "Magma Block") | `ftbjarmod:temperature_sources/magma_block` |
| `minecraft:soul_fire` | 0.75x | ![Soul Fire](./images/temperature/built-in/high-1.gif "Soul Fire") | `ftbjarmod:temperature_sources/soul_fire` |
| `minecraft:beacon` | 4.0x | ![Beacon](./images/temperature/built-in/high-2.png "Beacon") | `ftbjarmod:temperature_sources/beacon` |
| `ftbjarmod:blue_magma_block` | 1.0x | ![Blue Magma Block](./images/temperature/built-in/high-3.png "Blue Magma Block") | `ftbjarmod:temperature_sources/blue_magma_block` |
| `minecraft:soul_campfire` | 0.5x | ![Soul Campfire](./images/temperature/built-in/high-4.png "Soul Campfire") | `ftbjarmod:temperature_sources/soul_campfire` |
| `minecraft:blue_ice` | 4.0x | ![Blue Ice](./images/temperature/built-in/subzero-1.png "Blue Ice") | `ftbjarmod:temperature_sources/blue_ice` |
| `minecraft:packed_ice` | 1.0x | ![Packed Ice](./images/temperature/built-in/subzero-2.png "Packed Ice") | `ftbjarmod:temperature_sources/packed_ice` |
| `minecraft:ice` | 0.25x | ![Ice](./images/temperature/built-in/subzero-3.png "Ice") | `ftbjarmod:temperature_sources/ice` |

## Creative temperature sources

There are also some creative sources for temperatures other than "none". They can also be disabled by removing their temperature recipes (see KubeJS integration and datapack documents). Creative temperature sources do not display in temperature recipes by default, but you can force them to if you want.
| Block | Efficiency | <div style="width:15em">Visual Recipe</div> | Recipe ID |
|:--:|:--:|:--:|:--:|
| `ftbjarmod:creative_low_temperature_source` | 100.0x | ![Creative Low Temperature Source](./images/temperature/built-in/low-creative.png "Creative Low Temperature Source") | `ftbjarmod:temperature_sources/creative_low` |
| `ftbjarmod:creative_high_temperature_source` | 100.0x | ![Creative High Temperature Source](./images/temperature/built-in/high-creative.png "Creative High Temperature Source") | `ftbjarmod:temperature_sources/creative_high` |
| `ftbjarmod:creative_subzero_temperature_source` | 100.0x | ![Creative Sub-Zero Temperature Source](./images/temperature/built-in/subzero-creative.png "Creative Sub-Zero Temperature Source") | `ftbjarmod:temperature_sources/creative_subzero` |

## Blocks with no temperature

Blocks that don't have any temperature will automatically be given the "none" temperature.
| Block | Efficiency | <div style="width:15em">Visual Recipe</div> | Recipe ID |
|:--:|:--:|:--:|:--:|
| Any other block | 1.0x | ![Any Block](./images/temperature/built-in/none-4.png "Any Block") | No ID, cannot be changed |