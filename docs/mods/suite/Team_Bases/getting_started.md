---
title: Getting Started
description: A guide to getting started with Team Bases.
sidebar_position: 1
hide_title: true
---

## Getting Started

### Setting up a Base Definition

To set up a pregenerated base with region-relocation into the default shared dimension, use this as a start point:

```json
{
  "id": "ftbteambases:my_base_type",
  "display": {
    "description": "Some description text",
    "preview_image": "ftbteambases:textures/spawn/default.png"
  },
  "construction": {
    "pregen_template": "my_template",
    "structure_sets": [ ]
  },
  "dimension": {
    "private": false
  }
}
```

To set up a pregenerated base in a private dimension, with no region relocation, just change the `dimension` section above:

```json
{
  "dimension": {
    "private": true,
    "dimension_type": "ftbteambases:default"
  }
}
```

To set up a single-structure base in the shared dimension:

```json
{
  "id": "ftbteambases:my_base_type",
  "display": {
    "description": "Some description text",
    "preview_image": "ftbteambases:textures/spawn/default.png"
  },
  "construction": {
    "structure_location": "minecraft:village/plains/houses/plains_medium_house_1",
    "y_pos": 64,
    "include_entities": false
  },
  "spawn_offset": [ 0, -6, 0 ],
  "dimension": {
    "private": false
  }
}
```

This file goes in a datapack in `data/<namespace>/ftb_base_definitions/my_base_type.json` (the filename matches the `id` field in the JSON).

### Base Definition Fields

**Top-level fields:**

| Field          | Required | Description                                                                                                                                                                                        |
|----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`           | Yes      | A unique template ID (ResourceLocation format). Should match the filename.                                                                                                                         |
| `display`      | Yes      | Object containing display settings (see below).                                                                                                                                                    |
| `construction` | Yes      | Defines how the base is built (see construction types below).                                                                                                                                      |
| `dimension`    | Yes      | Defines where the base is created (see below).                                                                                                                                                     |
| `spawn_offset` | No       | Array `[x, y, z]` offset for the default player spawn position (default: `[0,0,0]`). The default position is typically at the center of the region(s), and at a Y position of the world's surface. |
| `extents`      | No       | Object `{x: int, z: int}` defining region extent (default: `{x: 1, z: 1}`)                                                                                                                         |

**Display section (`display`):**

| Field           | Required | Description                                                                                          |
|-----------------|----------|------------------------------------------------------------------------------------------------------|
| `description`   | Yes      | Free-form text displayed in the selection GUI. Keep it short.                                        |
| `author`        | No       | Author name (default: "FTB Team")                                                                    |
| `preview_image` | No       | Resource location for a texture to display in the selection GUI. Typically a screenshot of the base. |
| `display_order` | No       | Integer for ordering in the selection GUI (default: 0)                                               |
| `dev_mode`      | No       | If true, only shown when `show_dev_mode` is enabled in client config (default: false)                |

**Dimension section (`dimension`):**

| Field            | Required | Description                                                                                                                                                                                                                             |
|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `private`        | Yes      | Boolean. If false, base is created in the shared dimension (`ftbteambases:bases` by default). If true, a new dynamic dimension is created for the base.                                                                                 |
| `dimension_id`   | No       | Custom dimension ID for the base. When `private` is false, specifies the dimension to use (default: `ftbteambases:bases`).                                                                                                              |
| `dimension_type` | No       | When `private` is true, specifies the [dimension type](https://minecraft.fandom.com/wiki/Custom_dimension#Dimension_type) for the new dimension. `ftbteambases:default` works in many cases, but you're free to use a custom type here. |

### Construction Types

Fields in the `construction` section depend on the type of base you're constructing. There are four construction types:

#### 1. Pregenerated Bases (pregen)
Uses pre-made MCA region files that are copied/relocated into the target dimension.

| Field             | Required | Description                                                                                   |
|-------------------|----------|-----------------------------------------------------------------------------------------------|
| `pregen_template` | Yes      | Name of the template directory containing MCA files.                                          |
| `structure_sets`  | Yes      | List of structure set IDs defining which structures may be added to the pregenerated terrain. |

#### 2. Single Structure Bases
Pastes a single NBT structure into the world.

| Field                | Required | Description                                                                       |
|----------------------|----------|-----------------------------------------------------------------------------------|
| `structure_location` | Yes      | Resource location of the NBT structure to paste.                                  |
| `y_pos`              | No       | Y position for pasting (default: world surface). Recommended for void dimensions. |
| `include_entities`   | No       | Whether to include entities from the NBT structure (default: false).              |

#### 3. Jigsaw Bases
Uses Minecraft's jigsaw system for procedural generation.

| Field               | Required | Description                                                      |
|---------------------|----------|------------------------------------------------------------------|
| `template_pool`     | Yes      | Resource location of the jigsaw template pool.                   |
| `target`            | Yes      | Resource location of the target jigsaw name.                     |
| `max_gen_depth`     | Yes      | Maximum generation depth (range: 1-20).                          |
| `y_pos`             | No       | Y position for generation.                                       |
| `generation_offset` | No       | Array `[x, y, z]` offset for generation.                         |
| `orientation`       | No       | Orientation (default: "up_north"). Uses FrontAndTop enum values. |
| `joint_type`        | No       | Joint type (default: "rollable").                                |
| `final_state`       | No       | Block for final state (default: "minecraft:air").                |

#### 4. Prebuilt Bases
Uses structures from the worldgen registry.

| Field             | Required | Description                               |
|-------------------|----------|-------------------------------------------|
| `start_structure` | Yes      | Resource location of the start structure. |
| `structure_set`   | No       | Structure set ID.                         |
| `height`          | No       | Y position (default: 64).                 |

### Pregen Templates

Put your template MCA files in a directory within your top-level Minecraft server instance: `<instance>/ftbteambases/pregen/<template-name>/`, with `region/`, `entity/` and `poi/` subdirectories. Region MCA files *must* be present, but entity and POI files are optional.

In the above example (looking at the `pregen_template` field), your region MCA files go in `<instance>/ftbteambases/pregen/my_template/region/`. You can put multiple MCA files in here if you want to; it's recommended (but not required) that they are contiguous regions. Example of a 4-region template:

```
$ ls ftbteambases/pregen/my_template/region
r.0.0.mca  r.0.1.mca  r.1.0.mca  r.1.1.mca
```

:::info
Only region MCA files are fully supported right now. Entity and POI MCA files (`entity/` and `poi/` subdirectories) are copied for private dimensions, but not supported for relocation in the shared dimension.
:::

These files are copied directly into the dimension folder for private (non-relocated) dimensions, but processed and renamed when relocated into a shared dimension. For this reason, creating a pregen base in a private dimension is much faster than creating one in a shared dimension.

## Setting up the Lobby

Like FTB Team Dimensions, this mod creates a **lobby** where new players are sent to (or can return to with `/ftbteambases lobby`). This is created in the overworld the first time the world is loaded (i.e. when a new server is started).

By default, the lobby structure NBT is `ftbteambases:lobby`, a resource location for a datapack NBT structure. You can override the default `ftbteambases/structures/lobby.nbt` file via datapack, or change the location in server config with the `lobby_structure_location` config setting. The lobby structure must include a Structure Block in data mode, with the metadata string `spawn_point`. This block will be used as the player spawn point on initial connection (and will be replaced with air when the structure is placed into the overworld).

This is fine for small lobbies, but if you want a very large complex lobby, it may be advisable to do a pregenerated region instead. In this case, put your pregenerated MCA file into `ftbteambases/pregen_initial/region/`. If you do this, you must also change the `lobby_spawn_pos` config setting so that the player is spawned in the right place in the lobby on initial join.

### Pregenerated Regions for Custom Dimensions

If your lobby is in a custom dimension (non-vanilla), place the MCA files in:
```
ftbteambases/pregen_initial/dimensions/<namespace>/<path>/region/
```

For example, if your lobby dimension is `mymod:lobby_dim`:
```
ftbteambases/pregen_initial/dimensions/mymod/lobby_dim/region/r.0.0.mca
```

### Additional Pregen Dimensions

You may also want to copy pregenerated region files for dimensions other than the lobby dimension when a new world is created. This is useful for setting up custom dimensions that players will visit later (e.g., a team base dimension with pre-built terrain).

To do this, use the `additional_pregen_dimensions` config option:

```js
lobby: {
    lobby_dimension: "minecraft:overworld"
    additional_pregen_dimensions: "mymod:custom_dim, mymod:another_dim"
}
```

Then place your MCA files in:
```
ftbteambases/pregen_initial/dimensions/<namespace>/<path>/region/
```

For example, for `mymod:custom_dim`:
```
ftbteambases/pregen_initial/dimensions/mymod/custom_dim/region/r.0.0.mca
```

These files will be automatically copied to the corresponding dimension folders when a new world is created.

### Custom Dimension for the Lobby

By default, the lobby structure is spawned in the overworld, and new players are sent there when they first log in to a server (or create a new SSP world). It might be desirable to have a custom dimension for your lobby, e.g. if your modpack has visiting the Overworld as a later-on goal. This is supported, but a little care is needed:

1. You will need a custom dimension for your lobby, and it must be a static dimension, defined via datapack. FTB Team Bases provides such a dimension: `ftbteambases:lobby`. This is a void dimension made of nothing but air, into which the lobby structure is pasted. If you want to use an alternative dimension, you must provide one via datapack. It is also possible to use the Nether or the End here, although this will take extra work to preserve game progression...

2. The lobby dimension is defined in server config with the `lobby_dimension` setting in the `lobby` section. However, since this needs to be set _before_ the server is started (and levels are initially created), it must be defined in the mod's default config, and this default config must be provided with the modpack.

3. Once the world is created, you should _not_ modify this config setting, or it may lead to players being teleported into the wrong dimension, and likely death by suffocation!

When players first log in to the server (or create an SSP world), they will be immediately teleported to the lobby structure in the target dimension. FTB Team Bases doesn't provide a method to return to the overworld, so that will need to be arranged separately (e.g. a command block, or some modded solution).

## Creating a Base

There are two ways to do this:

1. Use the `/ftbteambases create <base-definition>` command. This needs admin privileges, so regular players would likely run this via a command block. The base definition is the JSON file you created above, e.g. `/ftbteambases create ftbteambases:my_base_type`

2. Set up a portal structure using the `ftbteambases:portal` block. This block can only be obtained with the `/give` command, but can be used to build a portal structure in your lobby. The portal block visually looks like a Nether portal block but doesn't require an obsidian frame - you can create any shape and surrounding you like. When a player walks into this portal block:
   - If they are in a team: teleports them to their team's base spawn
   - If they are not in a team: opens the base selection GUI to create a new base

:::info
Base creation can take a few seconds, especially if there are multiple region files to be copied/relocated from the templates to the live dimension. Players get a progress indicator while their base is being prepared (preparation should not cause any noticeable server lag).
:::

- When a base is created, an FTB Teams team is automatically created for the player.
- If a team is disbanded, the base is archived, and any players in the base are sent back to the lobby.
- If a player joins an existing team, they are automatically sent to the team's base. If they leave the team, they are sent back to the lobby.
