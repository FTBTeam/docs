---
title: Commands
description: A list of commands available in Team Bases.
sidebar_position: 3
---

### Player Commands

| Command               | Description                             |
|-----------------------|-----------------------------------------|
| `/ftbteambases home`  | Teleport to your team base spawn point. |
| `/ftbteambases lobby` | Teleport back to the lobby.             |

### Admin Commands

| Command                                                           | Description                                                                                                                     |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `/ftbteambases create <base-definition>`                          | Create a base.                                                                                                                  |
| `/ftbteambases list`                                              | List all known team bases. The **[Show]** and **[Visit]** buttons can be clicked to show base details, or teleport to the base. |
| `/ftbteambases show <base-id>`                                    | Show base details. `<base-id>` is an existing FTB Teams shortname.                                                              |
| `/ftbteambases visit <base-id>`                                   | Teleport to a base spawn. `<base-id>` is an existing FTB Teams shortname.                                                       |
| `/ftbteambases visit`                                             | Opens a GUI showing all live bases and optionally all archived bases with some performance info, and the option to visit.       |
| `/ftbteambases nether-visit <base-id>`                            | Go to the Nether at the point a Nether portal for this team would take you.                                                     |
| `/ftbteambases relocate <template> <region_x> <region_z> [force]` | Relocate region files (async operation for pregen templates).                                                                   |
| `/ftbteambases setlobbypos <pos>`                                 | Set the lobby spawn position (requires permission level 3).                                                                     |
| `/ftbteambases archive list`                                      | Show all archived bases.                                                                                                        |
| `/ftbteambases archive list_for <player>`                         | Show archived bases for a specific player.                                                                                      |
| `/ftbteambases archive restore <archive-id>`                      | Restore the named archive. Can also be done by clicking the **[Restore]** button in `archive list` output.                      |
| `/ftbteambases purge id <archive-id>`                             | Schedule an archived base for permanent deletion. Can also be done by clicking the **[Purge]** button in `archive list` output. |
| `/ftbteambases purge older <days>`                                | Schedule all archived bases which were archived at least `<days>` days ago for deletion.                                        |
| `/ftbteambases purge cancel_all`                                  | Unschedule all pending base purges.                                                                                             |
| `/ftbteambases purge cancel <archive-id>`                         | Unschedule a specific pending base purge.                                                                                       |

:::warning
Bases scheduled for purge will be **permanently** deleted on the next server restart. A separate server backup system is recommended if you use this!
:::
