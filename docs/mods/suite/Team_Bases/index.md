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
