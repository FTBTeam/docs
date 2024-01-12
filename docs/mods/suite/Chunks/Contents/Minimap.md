---
date: 2024-01-10
title: Minimap
description: How to use the minimap
tags:
    - minimap
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Minimap

The minimap in FTB Chunks is situated in the upper-right corner of the screen, displaying information about the environment around the player.

It can also show coordinates or other positional information.

![Minimap](./_assets/Minimap/minimap.png "The minimap displays information about the environment")

## Configuration

To configure the minimap, press the key to open the world map (default: 'm' key).

Then, locate the settings cog in the lower-left corner of the screen and click it. Alternatively, press the 's' key.

![Settings](./_assets/Minimap/settings.png "The settings cog is located in the lower-left corner")

On the "Minimap" tab you'll be able to configure the settings.

![Minimap tab](./_assets/Minimap/minimap-tab.png "The minimap tab")

### Enabled

Default: true

True enables the minimap, false disables it so it is no longer shown on screen.

todo slider

![Enabled true](./_assets/Minimap/enabled-true.png "Enabled = true")
![Enabled false](./_assets/Minimap/enabled-false.png "Enabled = false")

### Position

Default: Top Right

Six arrangements are possible for the position of the minimap.

<Tabs>
<TabItem value="position-top-right" label="Top Right" default>

  ![Top Right](./_assets/Minimap/position-top-right.png)

</TabItem>
<TabItem value="position-right" label="Right">

  ![Right](./_assets/Minimap/position-right.png)

</TabItem>
<TabItem value="position-bottom-right" label="Bottom Right">

  ![Bottom Right](./_assets/Minimap/position-bottom-right.png)

</TabItem>
<TabItem value="position-bottom-left" label="Bottom Left">

  ![Bottom Left](./_assets/Minimap/position-bottom-left.png)

</TabItem>
<TabItem value="position-left" label="Left">

  ![Left](./_assets/Minimap/position-left.png)

</TabItem>
<TabItem value="position-top-left" label="Top Left">

  ![Top Left](./_assets/Minimap/position-top-left.png)

</TabItem>
</Tabs>

### Scale

Adjusts the size of the minimap.

Between 0.25 and 4.00 inclusive (default: 1).

todo image carousel that states scale level per image

<Tabs>
<TabItem value="scale-0.25" label="0.25">

  ![Scale 0.25](./_assets/Minimap/scale-0.25.png "The minimum size minimap")

</TabItem>
<TabItem value="scale-1" label="1.00" default>

  ![Scale 1](./_assets/Minimap/scale-1.png "The default size minimap")

</TabItem>
<TabItem value="scale-2.5" label="2.50">

  ![Scale 2.5](./_assets/Minimap/scale-2.5.png)

</TabItem>
<TabItem value="scale-4" label="4.00">

  ![Scale 4](./_assets/Minimap/scale-4.png "The maximum size minimap")

</TabItem>
</Tabs>

### Font Scaling

Adjusts the size of the font under the minimap. Best used in conjunction with [scale](#scale).

Between 0.10 and 5.00 inclusive (default: 0.5).

:::tip

Setting [scale](#scale) and font scaling to the same value will scale them proportionally.

:::

todo image carousel that states scale and font scaling per image (they are the same as the image names)

<Tabs>
<TabItem value="font-scaling-0.5" label="0.5">

  ![Scale & Font Scaling 0.5](./_assets/Minimap/font-scaling-0.5.png "The minimum size minimap")

</TabItem>
<TabItem value="font-scaling-1" label="1.00" default>

  ![Scale & Font Scaling 1](./_assets/Minimap/font-scaling-1.png "The default size minimap")

</TabItem>
<TabItem value="font-scaling-2" label="2.00">

  ![Scale & Font Scaling 2](./_assets/Minimap/font-scaling-2.png)

</TabItem>
<TabItem value="font-scaling-3" label="3.00">

  ![Scale & Font Scaling 3](./_assets/Minimap/font-scaling-3.png "The maximum size minimap")

</TabItem>
</Tabs>

:::note

Font Scaling is affected by the GUI scale value in Video Settings.

:::

### Zoom

Adjusts the level of zoom the minimap has.

Between 1 and 4 inclusive (default: 1).

:::tip

The keybinds "Zoom In Minimap" (default: '=') and "Zoom Out Minimap" (default: '-') can be used to zoom in and out!

:::

### Locked North

Default: true

If true, locks the minimap onto place.

If false, it will be allowed to rotate with the player like in the following figure.

!["Rotating minimap"](./_assets/Minimap/lock-north.gif 'The minimap can rotate if "locked north" is false')

### Show player when not locked north

Default: true

:::tip

Use when [locked north](#locked-north) is set to false!

:::

If true, a player marker will be shown in the center of the minimap.

If false, no marker will be shown, such as in the following figure.

!["No player marker"](./_assets/Minimap/no-player.gif "The player marker is not being displayed")

### Waypoints

Default: true

True shows the [waypoints](./Waypoints.md) in the minimap, false hides them.

todo slider

![Waypoints true](./_assets/Minimap/waypoints-on.png "Waypoints = true")
![Waypoints false](./_assets/Minimap/waypoints-off.png "Waypoints = false")

:::info

The "waypoints" setting will also affect waypoints seen in-game. Setting it to false will hide any waypoints from sight.

:::

### Player heads

Default: true

True displays an icon for the heads of other players on the minimap, false will hide them.

![Player heads true](./_assets/Minimap/player-heads-true.png "Player heads = true")
![Player heads false](./_assets/Minimap/player-heads-false.png "Player heads = false")

### Entities

Default: true

True will display entities (mobs, items, players, etc.) and false will hide them from the minimap.

todo slider

![Entities true](./_assets/Minimap/entities-heads.png "Entities = true")
![Entities false](./_assets/Minimap/entities-none.png "Entities = false")

### Entity heads

Default: true

True will display entities on the minimap using an icon for their heads (when possible); false will instead display them as white dots.

![Entity heads true](./_assets/Minimap/entities-heads.png "Entity heads = true")
![Entity heads false](./_assets/Minimap/entities-dots.png "Entity heads = false")

### Large entities

Default: false

Large entities will increase the size of entity heads if set to true.

If the entity heads are being displayed as white dots instead, it will also increase their size.

todo carousel

<Tabs>
<TabItem value="entity-heads" label="Standard" default>

  ![Entity heads](./_assets/Minimap/entities-heads.png "Entity heads = true, Large entities = false")

</TabItem>
<TabItem value="entity-large-heads" label="Large Heads">

  ![Entity large heads](./_assets/Minimap/entities-large-heads.png "Entity heads = true, Large entities = true")

</TabItem>
<TabItem value="entity-large-dots" label="Large Dots">

  ![Entity large dots](./_assets/Minimap/entities-large-dots.png "Entity heads = false, Large entities = true")

</TabItem>
</Tabs>

### XYZ

Default: true

Set to true to display the coordinates of the block within the legs and feet of the player; set to false to hide them.

todo slider

![XYZ true](./_assets/Minimap/xyz-biome-true.png "Coordinates X=2786 Y=80 and Z=-210 are shown under the minimap")
![XYZ false](./_assets/Minimap/xyz-false.png "Coordinates are hidden")

### Biome

Default: true

Set to true to display the current biome the player is in; set to false to hide it.

todo slider

![Biome true](./_assets/Minimap/xyz-biome-true.png 'The biome "Dark Forest" is shown under the minimap')
![Biome false](./_assets/Minimap/biome-false.png "The biome is hidden")

### Blur mode

Default: auto

Blur mode adjusts pixels on the minimap to make the image more cohesive. When set to true, it will blur pixels at any zoom level.

The following figure is an example of visible blur on the minimap.

todo slider

![Blur mode true](./_assets/Minimap/blur-on.png "The image is a bit blurry")
![Blur mode false](./_assets/Minimap/blur-off.png "The image is clear")

When blur is set to auto, it will only blur the minimap when it is fully zoomed out.

![Blur mode auto](./_assets/Minimap/blur-auto.gif "The image is only blurred when zoomed out")

### Compass

Default: true

True will display the cardinal points (north, east, south, west) within the minimap. Setting compass to false will instead hide them.

todo slider

![Compass true](./_assets/Minimap/compass-true.png "Cardinal points are present")
![Compass false](./_assets/Minimap/compass-false.png "Cardinal points are hidden")

### Visibility

Sets the opacity of the minimap, from 0 to 255. The default value is 255, so the minimap is fully visible.

<Tabs>
<TabItem value="visibility-255" label="255" default>

  ![Visibility 255](./_assets/Minimap/compass-true.png "Max opacity, the minimap is visible")

</TabItem>
<TabItem value="visibility-100" label="100">

  ![Visibility 100](./_assets/Minimap/visibility-100.png "Visibility = 100")

</TabItem>
<TabItem value="visibility-50" label="50">

  ![Visibility 50](./_assets/Minimap/visibility-50.png "Visibility = 50")

</TabItem>
<TabItem value="visibility-0" label="0">

  ![Visibility 0](./_assets/Minimap/visibility-0.png "Minimum opacity, the minimap is no longer visible!")

</TabItem>
</Tabs>

### Zone

Default: true

If set to true and you are standing in claimed lands, it will show the name of the team. Setting it to false instead hides the name.

todo slider

![Zone true](./_assets/Minimap/zone-true.png 'FTB Team owns the chunks in yellow')
![Zone false](./_assets/Minimap/zone-false.png "The team that owns the chunks is hidden")

### Position Offset X and Position Offset Y

Default for both: 0

Offsets the minimap with the upper-right corner as the anchor point.

Positive X extends leftwards (←) and positive Y extends downwards (↓).

The following figure offsets the minimap by 60 pixels in both X and Y.

todo slider

![Offset 0](./_assets/Minimap/offset-0.png "The default minimap offset")
![Offset 60](./_assets/Minimap/offset-60.png "An offset of 60")

### Position Offset condition

Default: None

|Position Offset condition|Description|
|:--:|:--:|
|Bottom Left|Offsets only if the minimap [position](#position) is set to "Bottom Left"|
|Left|Offsets only if the minimap [position](#position) is set to "Left"|
|Top Left|Offsets only if the minimap [position](#position) is set to "Top Left"|
|Top Right|Offsets only if the minimap [position](#position) is set to "Top Right"|
|Right|Offsets only if the minimap [position](#position) is set to "Right"|
|Bottom Right|Offsets only if the minimap [position](#position) is set to "Bottom Right"|
|None|Offsets from the upper-right corner|

:::tip

Works well when [Position Offset X & Position Offset Y](#position-offset-x-and-position-offset-y) is set to something else than 0!

:::

### Square Minimap

Default: false

If Square Minimap is set to true, the minimap will be a square! Otherwise, it is a circle.

todo slider

![Minimap circle](./_assets/Minimap/minimap-circle.png "The default minimap")
![Minimap square](./_assets/Minimap/minimap-square.png "The square minimap")

### Proportional sizing

Default: true

When true, minimap size is proportional to 10% of the screen width (modifiable by the [Scale](#scale) setting).

When false, it is a fixed size regardless of screen resolution.

todo carousel

![Proportional sizing true](./_assets/Minimap/proportional-true.png "Around 10% of the right of the screen is taken by the minimap")
![Proportional sizing false](./_assets/Minimap/proportional-false.png "The minimap has a fixed size regardless of resolution")

:::note

Proportional sizing is always affected by [Scale](#scale).

:::
