---
title: Commands
---

## Contents

- [Homes](#homes)
- [Teleporting](#teleporting)
- [Warps](#warps)
- [Cheats / Admin](#cheats--admin)
- [Kits](#kits) `1.20+`
- [Miscellaneous](#miscellaneous)

## Key

- `< >` - Required argument.
  - This means you must provide an argument for the command to work.
- `[ ]` - Optional argument.
  - This means you can provide an argument for the command to work, but it is not required.

## Homes

`/home [home]` - Takes you to either your default home or the home specified.

`/sethome <name>` - Adds a new home to your homes list.

`/delhome [home]` - Deletes your default home or the home specified.

`/listhomes` - Lists all of your homes.

## Teleporting

### TPA

`/tpa <player>` - Sends a teleport request to the player specified.

`/tpahere <player>` - Sends a teleport request to the player specified to teleport to you.

`/tpaccept <id>` - Accepts a teleport request. (rarely needed as you can just click the request)

`/tpdeny <id>` - Denies a teleport request. (rarely needed as you can just click the request)

### Misc

`/back` - Teleports you to your last location.

`/spawn` - Teleports you to the server spawn.

`/setspawn` - Sets the server spawn to your current location.

`/rtp` - Takes you to a random location in the world with a configured bounds.

`/tpl <player>` - `Requires OP` Teleports you to the last location of the player specified.

`/tpx <dimension>` - `Requires OP` Teleports you to another dimension at your current location.

`/jump` - `Requires OP` Teleports you to the block you're looking at

## Warps

`/warp <warp>` - Teleports you to the warp specified. (Names will be suggested)

`/setwarp <name>` - `Requires OP` Creates a new warp at your current location.

`/delwarp <warp>` - `Requires OP` Deletes the warp specified.

`/listwarps` - Lists all of the warps on the server.

## Cheats / Admin

All of these commands require `OP` to function

`/heal [player]` - Heals you or the player specified.

`/feed [player]` - Feeds you or the player specified.

`/extinguish [player]` - Puts your or the player specified out if they're on fire.

`/fly [player]` - Toggles flight for you or the player specified.

`/speed [boost_precent] [player]` - When no `boost_precent` is provided, this command will show you your, or the player specified, movement speed. With the `boost_precent` provided, your, or the player specified, movement speed `Attributes.MOVEMENT_SPEED` will be increased by the `boost_precent`. `Min: -100`, `Max: 2000`

`/god [player]` - Enables God mode (Invulnerability) for you or the player specified.

`/invsee <player>` - Opens the players inventory allowing you to modify the inventory's contents.

`/nicknamefor <player> <nickname>` - Forces a nickname on a specific player

`/mute <player> [until]` - Mutes a player for a specified amount of time (`until`) or forever.

The `until` is a duration time. See [Duration](/mods/FTB Suite/FTB Essentials/Durations) for more information.

A valid example of this command might be `/mute Slowpoke101 2h` to mute the player `Slowpoke101` for `2 hours`

`/unmute <player>` - Unmutes the player specified.

`/tp-offline <name|id> <pos>` - `(New in Essentials 1.20.1+)` Teleports a player to a given location that's whilst they're offline

This command takes either a players UUID or a players username.

## Kits

Kits are a pretty a relatively new feature to Essentials and have more in-depth documentation on the [Kits](/mods/FTB Suite/FTB Essentials/Kits) page.

`/kit list` - Lists all of the kits available on the server.

`/kit show <name>` - Shows you the contents of the kit specified.

`/kit give <player> <name>` - Gives the specified player the kit specified.

### Management

`/kit delete <name>` - Deletes the kit specified.

`/kit create_from_player_inv <name> [cooldown]` - Creates a kit from the current players inventory contents

The `cooldown` is a duration time. See [Duration](/mods/FTB Suite/FTB Essentials/Durations) for more information.

`/kit create_from_player_hotbar <name> [cooldown]` - Creates a kit from the current players hotbar contents with an optional cooldown.

The `cooldown` is a duration time. See [Duration](/mods/FTB Suite/FTB Essentials/Durations) for more information.

`/kit create_from_block_inv <name> [cooldown]` - Creates a kit from the block you're looking at's inventory contents with an optional cooldown.

The `cooldown` is a duration time. See [Duration](/mods/FTB Suite/FTB Essentials/Durations) for more information.

### Helper commands

`/kit cooldown <name> <cooldown>` - Modifies the cooldown of the kit specified.

`/kit reset_cooldown <name> <player|id>` - Resets the cooldown of the kit specified.

The player can be identified by either their UUID or their in-game name.

`/kit set_autogrant <name> <true|false>` - Sets the autogrant status of the kit specified.

`/kit put_in_block_inv <name>` - Puts the kit specified into the block you're looking at's inventory. 

## Miscellaneous

`/kickme` - Kicks you from the server

`/leaderboard [leaderboard]` - Shows the current data for a specific leaderboard in the game (The command auto completes the leaderboard name)

`/nickname [nickname]` - Allows you to modify your in-game name

`/hat` - Forces the current item in your `main hand` onto your head. This command will put the currrent head item in your `main hand` upon the switch.

`/near [radius]` - `Requires OP` - Shows the distance of other players around you

`/near <player> [radius]` - `Requires OP` - Shows the distance of a specific player from you

### Inventory's

`/trashcan` - Opens an inventory that will void any items put into it

`/enderchest [player]` - Opens your enderchest inventory. `Requires OP` if the player is specified, it will open the players inventory. This command does not require OP by default for a player seeing their own enderchest inventory.

`/anvil` - `Requires OP` Opens the Anvil blocks GUI

`/smithing` - `Requires OP` Opens the Smithing Tables GUI

`/crafting` - `Requires OP` Opens the Crafting Tables GUI

`/stonecutter` `Requires OP` Opens the Stone Cutting GUI

### Notifity

`/recording` - Marks your player in the `Tab` screen as recording and changes your name in the chat

`/streaming` - Marks your player in the `Tab` screen as streaming and changes your name in the chat