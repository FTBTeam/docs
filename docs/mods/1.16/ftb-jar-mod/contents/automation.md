---
date: 2023-01-19
title: Automation
description: How you can automate jars in-game for crafting
tags:
    - automatic
    - automate
    - tempered glass jars
    - overflow
---

# Jar Auto-Processing Block for automated crafting

FTB Jar Mod allows players to automate [Tempered Glass Jars](./jars.md#tempered-glass-jar) by placing a Jar Auto-Processing Block on top of each jar they wish to automate.

![The Jar Auto-Processing Block placed on top of a Tempered Glass Jar](./images/automation/japb-front.png "The Jar Auto-Processing Block placed on top of a Tempered Glass Jar")

The Jar Auto-Processing Block will change the behavior of the [Tempered Glass Jar](./jars.md#tempered-glass-jar), which will now attempt to craft the last selected recipe indefinitely.

::: tip Continuous crafting
If materials for the craft run out, the Jar Auto-Processing Block will automatically resume crafting once more materials become available.
:::

| !["Automated lava production"](./images/automation/cobble-to-lava-automation.gif "Automated lava production") |
|:--:|
| <figcaption>An example of a simple [cobblestone to lava](../for-kubejs.md#cobblestone-to-lava-under-high-temperature) automation using the Jar Auto-Processing Block</figcaption> |

## Chaining

The Jar Auto-Processing Block also can be linked to other Jar Auto-Processing Blocks simply by placing them adjacently to each other. Additional Jar Auto-Processing Blocks will be connected to item or fluid containers in the system automatically!

!["Chained automation blocks"](./images/automation/chained-japb.png "Chained automation blocks")

## Output behavior

Jar Auto-Processing Blocks use the same [output behavior](./jars.md#output-behavior) of [Tempered Glass Jars](./jars.md#tempered-glass-jar).

If all containers are full, only one item is outputted in the world and the automatic crafting process comes to a stop until it is restarted by the player.

| !["Lava production full"](./images/automation/output-in-world.png "Lava production full") |
|:--:|
| <figcaption>Lava production that came to a halt because of filled containers.</figcaption> |

