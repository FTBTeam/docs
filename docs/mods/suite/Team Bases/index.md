---
title: Team Bases
description: FTB Team Bases is a highly configurable base management mod centered around teams.
---


## What is FTB Team Bases?

FTB Team Bases is a replacement in MC 1.20.1 for earlier base management mods, including FTB Team Dimensions, FTB Team Islands and FTB Dungeons, and includes functionality from all of those:

- Creating bases in a static shared dimension (like FTB Team Islands; dimension ID is `ftbteambases:bases` by default)
- Creating bases in a private per-team dimension (like FTB Team Dimensions)
- Creating bases from pregenerated region files, using off-thread copying and relocating of template MCA files into the target dimension (suitable for huge bases, spanning 1 or more entire 512x512-block regions).
  - Note: this is only suitable for void dimensions, or non-void dimensions with a fixed seed, so the pregenerated regions fit properly with existing worldgen.
- Creating bases by putting down a Jigsaw block and running jigsaw generation over several ticks (like FTB Dungeons - suitable for large dynamically generated bases)
- Creating bases by pasting a single NBT structure (suitable for small bases)

The mod is driven by base definition files, which are JSON files in a custom datapack (`<mod-id>/ftb_base_definitions/*.json`). Each definition file is a template from which live team bases are created. Every live team base has a 1:1 association with an FTB Teams team; when FTB Team Bases is loaded, teams can only be created by creating a base, and when a team is disbanded, players will be ejected from that base, and the base will be archived.

Four default base definition files are shipped with the mod, although none of these will be displayed as GUI options when creating a base, unless you're running the mod in a development instance (from an IDE), or you've set `show_dev_mode` to true in the client config.

For more complete documentation on setting up and configuring FTB Team Bases for your modpack, see the [GitHub README](https://github.com/FTBTeam/FTB-Team-Bases).

## Commands

### Players
| Command                                                     | Description                                                                                                                                                                                     |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/ftbteambases home` | Teleport to your team base spawn point. |
| `/ftbteambases lobby` | Teleport back to the lobby. |

### Admins
| Command                                                     | Description                                                                                                                                                                                     |
|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/ftbteambases create <base-definition>` | Create a base. See the [README](https://github.com/FTBTeam/FTB-Team-Bases/blob/main/README.md#creating-a-base) for more details. |
| `/ftbteambases list` | List all known team bases. The **[Show]** and **[Visit]** "buttons" in the resulting text can be clicked to show base details, or teleport to the base. |
| `/ftbteambases show <base-id>` | Show base details. `<base-id>` is an existing FTB Teams shortname. |
| `/ftbteambases visit <base-id>` | Teleport to a base spawn. `<base-id>` is an existing FTB Teams shortname. |
| `/ftbteambases visit` | Opens a GUI showing all live bases and optionally all archived bases with some performance info, and the option to visit. |
| `/ftbteambases nether-visit` | Go to the Nether at the point a Nether portal for this team would take you. |
| `/ftbteambases archive list` | Show all archived bases. |
| `/ftbteambases archive restore <name>` | Restore the named archive. This can also be done by clicking the **[Restore]** "button" beside the base in `archive list` output. |
| `/ftbteambases purge id <archive-id>` | Schedule an archived base for permanent deletion; `<archive_id>` can be found from the `archive list` output. This can also be done by clicking the **[Purge]** "button" beside the base in `archive list` output. |
| `/ftbteambases purge older <days>` | Schedule all archived bases which were archived at least `<days>` days ago for deletion. |
| `/ftbteambases purge cancel_all` | Unschedule all pending base purges. |
| `/ftbteambases purge cancel <archive-id>` | Unschedule a specific pending base purge. |
