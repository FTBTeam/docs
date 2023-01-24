---
date: 2023-01-24
title: Tempered Glass Jars
description: How tempered glass jars work
tags:
    - iron cast tubes
    - overflow
---

# Tempered Glass Jar

Tempered Glass Jars are used to craft in the FTB Jar Mod.

Tempered Glass Jars are transparent jars, but they differ in appearance and function to [Glass Jars](./glass-jars.md). The glass is more foggy, and the cork is made out of metal instead. Tempered Glass Jars cannot hold any fluids.

![Tempered Glass Jar](./images/tempered-glass-jars/tempered-glass-jar.png "Tempered Glass Jar")

Tempered Glass Jars, like [Glass Jars](./glass-jars.md), also connect to Iron Cast Tubes only at the top where the cork is.

![Tempered Glass Jar with Tubes](./images/tempered-glass-jars/tempered-glass-jar-and-tube.png "Tempered Glass Jar with Tubes")

To start crafting recipes, you need to connect a Tempered Glass Jar to chests or other filled [Glass Jars](./glass-jars.md). For example, you could have this setup:

![Example Setup](./images/tempered-glass-jars/simple-setup.png "Example Setup")

If you use the Tempered Glass Jar, you will be shown a menu in order to be able to craft.

By default no recipes are added by the mod, but for the sake of this example, we added a recipe to make obsidian that uses 1 bucket of lava, 1 bucket of water and 4 cobblestone.

![Graphical User Interface](./images/tempered-glass-jars/sample-gui.png "Graphical User Interface")

In the left part of the menu, you will have a short list of some of your available inventory items and fluids for the recipes. This will also show materials in connected chests and fluids in connected [Glass Jars](./glass-jars.md).

![Left GUI](./images/tempered-glass-jars/gui-left.png "Left GUI")

In the bottom-right part of the interface is where recipes will be shown to you and where you can select them.

![Bottom GUI](./images/tempered-glass-jars/gui-bottom.png "Bottom GUI")

In the top-right part of the interface, which is currently empty, will allow you to craft a selected recipe.

![Top GUI](./images/tempered-glass-jars/gui-top.png "Top GUI")

The Tempered Glass Jar will detect items in the player inventory, in connected chests and fluids in connected [Glass Jars](./glass-jars.md). Here is an example that shows how you can craft a recipe by using the Tempered Glass Jar.

Here, the player is holding the necessary items directly inside the inventory.

![Example Craft](./images/tempered-glass-jars/sample-recipe.gif "Example Craft")

## Output behavior

The Tempered Glass Jar will output to the nearest item or fluid container it can find. If you wish to separate your input from the output, you can put the input item or fluid containers further away from the output ones.

| !["Output prioritizes nearby containers"](./images/tempered-glass-jars/output-priority.png "Output prioritizes nearby containers") |
|:--:|
| The tube coral block is inputted from the left barrel, and the dead tube coral block is outputted to the barrel on the right in the [drying coral block](../KubeJS-integration/tempered-glass-jar-recipes.md#drying-a-coral-block-with-low-temperature) recipe. |

If all possible inputs and outputs are full and a recipe is being processed, the resulting items will be ejected into the world.

!["Items outputting in the world"](./images/tempered-glass-jars/output-in-world.gif "Items outputting in the world")

In the case of fluids, they will be ejected as a special item, the fluid container item.

| !["Fluid container item outputting in the world"](./images/tempered-glass-jars/output-in-world-fluid.gif "Fluid container item outputting in the world") |
|:--:|
| The [cobblestone to lava](../KubeJS-integration/tempered-glass-jar-recipes.md#cobblestone-to-lava-under-high-temperature) recipe cannot output to the [Glass Jar](./glass-jars.md) nor the barrel because they are both full, so a fluid container item is created in the world instead. |
