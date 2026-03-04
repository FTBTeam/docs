---
title: Commands
sidebar_position: 3
---

## Key

- `< >` - Required argument.
    - This means you must provide an argument for the command to work.
- `[ ]` - Optional argument.
    - This means you can provide an argument for the command to work, but it is not required.

## Commands
| Command                                                             | Op Required | Description                                                                                              |
|---------------------------------------------------------------------|-------------|----------------------------------------------------------------------------------------------------------|
| `/ftbchunks block_color`                                            | N           | Gets the colour of the block you are looking at                                                          |
| `/ftbchunks claim [radius in blocks]`                               | N           | Claim the chunk you are standing in, you can also pass in a radius                                       |
| `/ftbchunks info [<x> <z>] [dimension]`                             | N           | View the claim status of the chunk you are standing in or the one specified                              |
| `/ftbchunks load [radius in blocks]`                                | N           | Load the claimed chunk(s) you are standing in                                                            |
| `/ftbchunks unclaim [radius in blocks]`                             | N           | Unclaim the chunk you are standing in, you can pass in a radius in blocks to unclaim neighbouring chunks |
| `/ftbchunks unclaim_all`                                            | N           | Unclaim all chunks you have claimed                                                                      |
| `/ftbchunks waypoint <add> <name> <x> <y> <z> <dimension> <colour>` | N           | Add a waypoint                                                                                           |

## Admin Commands

| Command                                                                      | Op Required | Description                                                                                                    |
|------------------------------------------------------------------------------|-------------|----------------------------------------------------------------------------------------------------------------|
| `/ftbchunks admin bypass_protection`                                         | Y           | Allows an admin to bypass a claimed chunk and interact with everything in the chunk.                           |
| `/ftbchunks admin claim_as <team name> [radius in blocks] [anchor(x y z)]`   | Y           | Claim a chunk as a specified team and optionally specify a radius and anchor point for the radius              |
| `/ftbchunks admin extra_claim_chunks <player> <add/get/set> <number>`        | Y           | This command allows an admin to set, add or view any extra number of claims a team/player can claim            |
| `/ftbchunks admin extra_force_load_chunks <player> <add/get/set> <number>`   | Y           | This command allows an admin to set, add or view any extra number of force loaded chunks a team/player can set |
| `/ftbchunks admin unclaim_as <team name> [radius in blocks] [anchor(x y z)]` | Y           | Unclaim a claimed area as a given user                                                                         |
| `/ftbchunks admin unclaim_everything`                                        | Y           | Unclaim every claimed chunk in the world                                                                       |
| `/ftbchunks admin unload_everything`                                         | Y           | Unload every force loaded chunk in the world                                                                   |
| `/ftbchunks admin view_loaded_chunks [dimension]`                            | Y           | This command show all loaded chunks in the map                                                                 |
