---
title: Commands
---

## Key

- `< >` - Required argument.
  - This means you must provide an argument for the command to work.
- `[ ]` - Optional argument.
  - This means you can provide an argument for the command to work, but it is not required.

## Homes

__Homes__ are player-specific saved teleport destinations. Players may have one or more saved locations, depending on server and (if installed) [FTB Ranks](/docs/mods/suite/Essentials/Ranks_Integration) configuration.

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/home [home]` | N | Takes you to either your default home or the specified home. |
|`/sethome <name>` | N | Adds a new home to your homes list, subject to your player homes limit. |
|`/delhome [home]` | N | Deletes your default home or the specified home. |
|`/listhomes` | N | Lists all of your homes. |

## Teleporting

### TPA

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/tpa <player>` | N | Sends a teleport request to the specified player. If they accept the request, you will be teleported to the player. |
|`/tpahere <player>` | N | Sends a teleport request to the specified player to teleport to you. If they accept the request, they will be teleported to you. |
|`/tpaccept <id>` | N | Accepts a teleport request (rarely needed as you can just click the **Accept** link in the message you receive). |
|`/tpdeny <id>` | N | Denies a teleport request (rarely needed as you can just click the **Deny** link in the message you receive). |

### Misc

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/back` | N | Teleports you to the last location where you used any command that teleports you (including vanilla `/tp` command). Note that Essentials maintains a teleport history "stack", so this can be used multiple times to go to progressively older teleport points. |
|`/spawn` | N | Teleports you to the server spawn. |
|`/rtp` | N | Takes you to a random location in the world with a configured bounds. |
|`/tpl <player>` | Y | Teleports you to the last known location of the specified player (even if they're currently offline). |
|`/tpx <dimension>` | Y | Teleports you to another dimension at your current location. |
|`/jump` | Y | Teleports you to the block you're looking at (more precisely, to the top of the block column you're looking at). |

## Warps

__Warps__ are server-wide saved teleport destinations, common to all players.

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/warp`     | N | Teleports you to the warp specified. (Names will be suggested) |
|`/setwarp <name>` | Y | Creates a new warp at your current location.|
|`/delwarp <warp>` | Y | Deletes the warp specified.|
|`/listwarps` | N | Lists all of the warps on the server.|

## Cheats / Admin

All of these commands require `OP` to function

| Command     |Description |
| ----------- | --------- |
|`/heal [player]` | Fully heals you or the specified player, as well as replenishing food, and extinguishing any flames.|
|`/feed [player]` | Fully feeds you or the specified player.|
|`/extinguish [player]` | Puts your or the specified player out if they're on fire.|
|`/fly [player]` | Toggles creative flight for you or the specified player.|
|`/speed [boost_percent] [player]` | When no `boost_percent` is provided, this command will display your (or the specified player's) movement speed modifier. With the `boost_percent` provided, your (or the specified player's) movement speed will be increased by the `boost_percent` (this uses a standard vanilla [attribute modifier](https://minecraft.fandom.com/wiki/Attribute)). `Min: -100`, `Max: 2000`|
|`/god [player]` | Enables God mode (Invulnerability) for you or the specified player.|
|`/invsee <player>` | Opens the specified players inventory, allowing you to view and modify the inventory's contents.|
|`/nicknamefor <player> <nickname>` | Forces a nickname on a specific player.|
|`/mute <player> [until]` | Mutes a player for a specified amount of time (`until`) or forever.  The `until` is a duration time; omitting it mutes the player indefinitely. See [Duration](/docs/mods/suite/Essentials/Durations) for more information. Example: `/mute Slowpoke101 2h` mutes the player `Slowpoke101` for two hours.|
|`/unmute <player>` | Unmutes the specified player.|

### Offline Teleport

_[New in Essentials 1.20.1+]_ Teleports a player to a given location when they're offline. If you wish to teleport a player to a different dimension too, use the standard vanilla `execute in` method. E.g. `/execute in minecraft:the_nether run tp_offline name someplayer 0 70 0` teleports the player to (0, 70, 0) in the Nether. All `/tp_offline` commands require `OP` permissions to use.

| Command     |Description |
| ----------- | --------- |
|`/tp_offline name <player> <pos>` | Teleport player using player name.|
|`/tp_offline id <player_id> <pos>` | Teleport player using player UUID.|

## Kits

Kits are a relatively new feature to Essentials and have more in-depth documentation on the [Kits](/docs/mods/suite/Essentials/Kits) page. All `/kit` commands require `OP` permissions to use.

| Command     |Description |
| ----------- | --------- |
|`/kit list` | Lists all of the kits available on the server.|
|`/kit show <name>` | Shows you the contents of the specified kit.|
|`/kit give <player> <name>` | Gives the specified player the specified kit.|

### Management

| Command     |Description |
| ----------- | --------- |
|`/kit delete <name>` | Deletes the specified kit.|
|`/kit create_from_player_inv <name> [cooldown]` | Creates a kit from the current player's inventory contents, with an optional cooldown [duration](/docs/mods/suite/Essentials/Durations).|
|`/kit create_from_player_hotbar <name> [cooldown]` | Creates a kit from the current players hotbar contents, with an optional cooldown [duration](/docs/mods/suite/Essentials/Durations).|
|`/kit create_from_block_inv <name> [cooldown]` | Creates a kit from the inventory contents of the block you're looking at, with an optional cooldown [duration](/docs/mods/suite/Essentials/Durations).|

### Helper commands

| Command     |Description |
| ----------- | --------- |
|`/kit cooldown <name> <cooldown>` | Modifies the cooldown of the kit specified.|
|`/kit reset_cooldown <name> <player/id>` | Resets the cooldown of the kit specified.  The player can be identified by either their UUID or their in-game name.|
|`/kit set_autogrant <name> <true/false>` | Sets the autogrant status of the kit specified.|
|`/kit put_in_block_inv <name>` | Puts the kit specified into the block you're looking at's inventory. |

## Miscellaneous

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/kickme` | N | Kicks you from the server|
|`/leaderboard [leaderboard]` | N | Shows the current data for a specific leaderboard in the game (The command auto completes the leaderboard name)|
|`/nickname [nickname]` | N | Allows you to modify your in-game name|
|`/hat` | N | Forces the item held in your main hand onto your head, and your current head item into your main hand.|
|`/near [radius]` |  Y | Shows the distance of other players around you|
|`/near <player> [radius]` |  Y |Shows the distance of a specific player from you|

### Inventories

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/trashcan` | N | Opens a virtual inventory that will void any items put into it.|
|`/enderchest` | N | Opens your enderchest inventory.|
|`/enderchest <player>` | Y | Opens another player's enderchest inventory. OP is required if the specified player is not you.|
|`/anvil` | Y | Opens the Anvil's GUI.|
|`/smithing` | Y | Opens the Smithing Table's GUI.|
|`/crafting` | Y | Opens the Crafting Table's GUI.|
|`/stonecutter` | Y | Opens the Stonecutter's GUI.|

### Notifying

| Command     |Op Required| Description |
| ----------- | --------- | ------------ |
|`/recording` | N | Marks your player in the `Tab` screen as recording and adds a red icon to your name in chat.|
|`/streaming` | N | Marks your player in the `Tab` screen as streaming and adds a purple icon to your name in chat.|
