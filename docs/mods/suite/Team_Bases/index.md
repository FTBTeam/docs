---
title: Team Bases
description: FTB Team Bases is a highly configurable base management mod centered around teams.
---

## What is FTB Team Bases?

FTB Team Bases is a replacement in MC 1.20.1+ for earlier base management mods, including FTB Team Dimensions, FTB Team Islands and FTB Dungeons, and includes functionality from all of those:

- Creating bases in a static shared dimension (like FTB Team Islands; dimension ID is `ftbteambases:bases` by default)
- Creating bases in a private per-team dimension (like FTB Team Dimensions)
- Creating bases from pregenerated region files, using off-thread copying and relocating of template MCA files into the target dimension (suitable for huge bases, spanning 1 or more entire 512x512-block regions)
  - Note: this is only suitable for void dimensions, or non-void dimensions with a fixed seed, so the pregenerated regions fit properly with existing worldgen.
- Creating bases by putting down a Jigsaw block and running jigsaw generation over several ticks (like FTB Dungeons - suitable for large dynamically generated bases)
- Creating bases by pasting a single NBT structure (suitable for small bases)
- Creating bases using prebuilt structures from the worldgen registry

The mod is driven by base definition files, which are JSON files in a custom datapack (`<mod-id>/ftb_base_definitions/*.json`). Each definition file is a template from which live team bases are created. Every live team base has a 1:1 association with an FTB Teams team; when FTB Team Bases is loaded, teams can only be created by creating a base, and when a team is disbanded, players will be ejected from that base, and the base will be archived.

Four default base definition files are shipped with the mod, although none of these will be displayed as GUI options when creating a base, unless you're running the mod in a development instance (from an IDE), or you've set `show_dev_mode` to true in the client config.

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

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | A unique template ID (ResourceLocation format). Should match the filename. |
| `display` | Yes | Object containing display settings (see below). |
| `construction` | Yes | Defines how the base is built (see construction types below). |
| `dimension` | Yes | Defines where the base is created (see below). |
| `spawn_offset` | No | Array `[x, y, z]` offset for the default player spawn position (default: `[0,0,0]`). The default position is typically at the center of the region(s), and at a Y position of the world's surface. |
| `extents` | No | Object `{x: int, z: int}` defining region extent (default: `{x: 1, z: 1}`) |

**Display section (`display`):**

| Field | Required | Description |
|-------|----------|-------------|
| `description` | Yes | Free-form text displayed in the selection GUI. Keep it short. |
| `author` | No | Author name (default: "FTB Team") |
| `preview_image` | No | Resource location for a texture to display in the selection GUI. Typically a screenshot of the base. |
| `display_order` | No | Integer for ordering in the selection GUI (default: 0) |
| `dev_mode` | No | If true, only shown when `show_dev_mode` is enabled in client config (default: false) |

**Dimension section (`dimension`):**

| Field | Required | Description |
|-------|----------|-------------|
| `private` | Yes | Boolean. If false, base is created in the shared dimension (`ftbteambases:bases` by default). If true, a new dynamic dimension is created for the base. |
| `dimension_id` | No | Custom dimension ID for the base. When `private` is false, specifies the dimension to use (default: `ftbteambases:bases`). |
| `dimension_type` | No | When `private` is true, specifies the [dimension type](https://minecraft.fandom.com/wiki/Custom_dimension#Dimension_type) for the new dimension. `ftbteambases:default` works in many cases, but you're free to use a custom type here. |

### Construction Types

Fields in the `construction` section depend on the type of base you're constructing. There are four construction types:

#### 1. Pregenerated Bases (pregen)
Uses pre-made MCA region files that are copied/relocated into the target dimension.

| Field | Required | Description |
|-------|----------|-------------|
| `pregen_template` | Yes | Name of the template directory containing MCA files. |
| `structure_sets` | Yes | List of structure set IDs defining which structures may be added to the pregenerated terrain. |

#### 2. Single Structure Bases
Pastes a single NBT structure into the world.

| Field | Required | Description |
|-------|----------|-------------|
| `structure_location` | Yes | Resource location of the NBT structure to paste. |
| `y_pos` | No | Y position for pasting (default: world surface). Recommended for void dimensions. |
| `include_entities` | No | Whether to include entities from the NBT structure (default: false). |

#### 3. Jigsaw Bases
Uses Minecraft's jigsaw system for procedural generation.

| Field | Required | Description |
|-------|----------|-------------|
| `template_pool` | Yes | Resource location of the jigsaw template pool. |
| `target` | Yes | Resource location of the target jigsaw name. |
| `max_gen_depth` | Yes | Maximum generation depth (range: 1-20). |
| `y_pos` | No | Y position for generation. |
| `generation_offset` | No | Array `[x, y, z]` offset for generation. |
| `orientation` | No | Orientation (default: "up_north"). Uses FrontAndTop enum values. |
| `joint_type` | No | Joint type (default: "rollable"). |
| `final_state` | No | Block for final state (default: "minecraft:air"). |

#### 4. Prebuilt Bases
Uses structures from the worldgen registry.

| Field | Required | Description |
|-------|----------|-------------|
| `start_structure` | Yes | Resource location of the start structure. |
| `structure_set` | No | Structure set ID. |
| `height` | No | Y position (default: 64). |

### Pregen Templates

Put your template MCA files in a directory within your top-level Minecraft server instance: `<instance>/ftbteambases/pregen/<template-name>/`, with `region/`, `entity/` and `poi/` subdirectories. Region MCA files *must* be present, but entity and POI files are optional.

In the above example (looking at the `pregen_template` field), your region MCA files go in `<instance>/ftbteambases/pregen/my_template/region/`. You can put multiple MCA files in here if you want to; it's recommended (but not required) that they are contiguous regions. Example of a 4-region template:

```
$ ls ftbteambases/pregen/my_template/region
r.0.0.mca  r.0.1.mca  r.1.0.mca  r.1.1.mca
```

!!! note
    Only region MCA files are fully supported right now. Entity and POI MCA files (`entity/` and `/poi` subdirectories) are copied for private dimensions, but not supported for relocation in the shared dimension.

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

!!! note
    Base creation can take a few seconds, especially if there are multiple region files to be copied/relocated from the templates to the live dimension. Players get a progress indicator while their base is being prepared (preparation should not cause any noticeable server lag).

- When a base is created, an FTB Teams team is automatically created for the player.
- If a team is disbanded, the base is archived, and any players in the base are sent back to the lobby.
- If a player joins an existing team, they are automatically sent to the team's base. If they leave the team, they are sent back to the lobby.

## Commands

### Player Commands

| Command | Description |
|---------|-------------|
| `/ftbteambases home` | Teleport to your team base spawn point. |
| `/ftbteambases lobby` | Teleport back to the lobby. |

### Admin Commands

| Command | Description |
|---------|-------------|
| `/ftbteambases create <base-definition>` | Create a base. |
| `/ftbteambases list` | List all known team bases. The **[Show]** and **[Visit]** buttons can be clicked to show base details, or teleport to the base. |
| `/ftbteambases show <base-id>` | Show base details. `<base-id>` is an existing FTB Teams shortname. |
| `/ftbteambases visit <base-id>` | Teleport to a base spawn. `<base-id>` is an existing FTB Teams shortname. |
| `/ftbteambases visit` | Opens a GUI showing all live bases and optionally all archived bases with some performance info, and the option to visit. |
| `/ftbteambases nether-visit <base-id>` | Go to the Nether at the point a Nether portal for this team would take you. |
| `/ftbteambases relocate <template> <region_x> <region_z> [force]` | Relocate region files (async operation for pregen templates). |
| `/ftbteambases setlobbypos <pos>` | Set the lobby spawn position (requires permission level 3). |
| `/ftbteambases archive list` | Show all archived bases. |
| `/ftbteambases archive list_for <player>` | Show archived bases for a specific player. |
| `/ftbteambases archive restore <archive-id>` | Restore the named archive. Can also be done by clicking the **[Restore]** button in `archive list` output. |
| `/ftbteambases purge id <archive-id>` | Schedule an archived base for permanent deletion. Can also be done by clicking the **[Purge]** button in `archive list` output. |
| `/ftbteambases purge older <days>` | Schedule all archived bases which were archived at least `<days>` days ago for deletion. |
| `/ftbteambases purge cancel_all` | Unschedule all pending base purges. |
| `/ftbteambases purge cancel <archive-id>` | Unschedule a specific pending base purge. |

!!! warning
    Bases scheduled for purge will be **permanently** deleted on the next server restart. A separate server backup system is recommended if you use this!

## Config Files

- `config/ftbteambases-server.snbt` - server side config file
- `config/ftbteambases-client.snbt` - client side config file
- `defaultconfigs/ftbteambases/ftbteambases-server.snbt` - default server config (for modpacks, 1.20.1 only)

### Server Config Options

#### General Section

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `clear_player_inv_on_join` | boolean | false | Clear player inventory when joining a team |
| `heal_player_on_join` | boolean | true | Heal and feed player when joining a team |
| `clear_player_inv_on_leave` | boolean | true | Clear player inventory when leaving a team |
| `team_nether_entry_point` | boolean | true | Enable team-specific nether portal destinations |
| `base_separation` | int | 4 | Base separation in 512-block regions for shared dimensions |
| `home_cmd_permission_level` | int | 0 | Permission level for `/ftbteambases home` command |

#### Lobby Section

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `lobby_structure_location` | string | "ftbteambases:lobby" | Resource location of the lobby NBT structure |
| `additional_pregen_dimensions` | string | "" | Comma-separated dimension IDs for additional pregen copying (e.g., "mymod:dim1,mymod:dim2") |
| `lobby_y_pos` | int | 0 | Y position for pasting the lobby structure (-64 to 256) |
| `lobby_game_mode` | enum | "adventure" | Game mode for players in the lobby (survival/creative/adventure/spectator) |
| `lobby_spawn_pos` | int array | [0, 0, 0] | Spawn position for pregen-based lobbies |
| `lobby_dimension` | string | "minecraft:overworld" | Dimension ID for the lobby (must be static, set before world creation) |
| `lobby_player_yaw` | double | 0.0 | Player rotation when spawning in lobby (0-360, 0=south) |

#### Worldgen Section

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `chunk_generator` | enum | see below | Chunk generator type |
| `single_biome_id` | string | "" | Force single biome (e.g., "minecraft:the_void") |
| `biome_source_from_dimension` | string | "" | Copy biome source from existing dimension |
| `feature_gen` | enum | "default" | Feature generation (default/never/always) |
| `noise_settings` | string | "minecraft:overworld" | Noise settings resource location |
| `entities_in_start_structure` | boolean | true | Include entities from start structure NBT |

#### Nether Section

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `allow_nether_portals` | boolean | true | Allow nether portal construction in team dimensions |
| `team_specific_nether_entry_point` | boolean | true | Use team-specific nether coordinates |
| `min_dist_from_origin` | int | 1000 | Minimum distance from origin for nether entry points |
| `max_dist_from_origin` | int | 25000 | Maximum distance from origin for nether entry points |
| `use_custom_portal_y` | boolean | false | Use custom Y position for nether entry |
| `portal_y_pos` | int | 0 | Custom Y position for nether entry (if enabled) |

#### Autoclaiming Section (FTB Chunks required)

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `lobby_radius` | int | 0 | Radius in chunks for lobby autoclaim (0 = disabled) |
| `lobby_shape` | enum | "square" | Shape to autoclaim (square/circle) |
| `server_team_name` | string | "Lobby" | Display name for server team on FTB Chunks map |
| `lobby_claim_color` | string | "#FF40FF" | Server team color (hex or color name) |
| `lobby_claim_center` | int array | [0, 0] | X/Z chunk position for claim center |

### Client Config Options

#### General Section

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `hide_void_fog` | boolean | true | Suppress void fog in void dimensions |
| `void_horizon` | double | 0.0 | Y level where sky turns black in void dimensions |

#### Advanced Section

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `show_dev_mode` | boolean | false | Show dev_mode bases in selection GUI |

## Version Differences (1.20.1 vs 1.21.1)

There are some key differences between the 1.20.1 (Forge/NeoForge/Fabric) and 1.21.1 (NeoForge only) versions of FTB Team Bases:

### Base Definition JSON Structure

**1.20.1** uses a flat structure for display fields:
```json
{
  "id": "ftbteambases:my_base",
  "description": "Some description",
  "author": "FTB Team",
  "preview_image": "ftbteambases:textures/spawn/default.png",
}
```

**1.21.1** uses a nested `display` section:
```json
{
  "id": "ftbteambases:my_base",
  "display": {
    "description": "Some description",
    "author": "FTB Team",
    "preview_image": "ftbteambases:textures/spawn/default.png"
  },
}
```

### Chunk Generator Options

| Version | Available Generators | Default |
|---------|---------------------|---------|
| 1.20.1 | `simple_void`, `multi_biome_void`, `custom` | `simple_void` |
| 1.21.1 | `multi_biome_void`, `custom` | `multi_biome_void` |

The `simple_void` generator was removed in 1.21.1.

### Config System

| Feature | 1.20.1 | 1.21.1 |
|---------|--------|--------|
| Default config location | `defaultconfigs/ftbteambases/ftbteambases-server.snbt` | Not used (NeoForge config system) |
| Global config fallback for `additional_pregen_dimensions` | No | Yes - reads from `config/ftbteambases-server.snbt` if per-world config is empty |

### Mod Loader Support

| Version | Supported Loaders |
|---------|-------------------|
| 1.20.1 | Forge, NeoForge, Fabric |
| 1.21.1 | NeoForge only |

### Migration Notes

When migrating base definitions from 1.20.1 to 1.21.1:

1. Move `description`, `author`, `preview_image`, `display_order`, and `dev_mode` fields into a nested `display` object
2. If using `chunk_generator: "simple_void"`, change to `"multi_biome_void"`
3. Update any scripts or tools that generate base definition files to use the new structure
