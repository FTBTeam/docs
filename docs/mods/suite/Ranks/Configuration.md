---
sidebar_position: 1
---
FTB Ranks is configured via two SNBT files, which can be found in `<world>/serverconfig/ftbranks/`

* `ranks.snbt` defines the ranks for the mod, along with the membership conditions for each rank, and the permissions granted by each rank. This file can be edited manually, and reloaded with `/ftbranks reload`; i. Many operations can also be carried out by commands, and where possible it is suggested to use commands rather than direct config file editing. See [Commands](Commands.md) for more information.
* `players.snbt` lists the players which have been explicitly added to ranks. While this file can also be edited manually, it is suggested to use the `/ftbranks add <player> <rank>` and `/ftbranks remove <player> <rank>` commands.

:::warning
If you manually edit either file, check your server config for reported syntax errors! If errors are detected, the previous ranks configuration will remain in force.
:::

<details open>
<summary>An example ranks.snbt file</summary>

```json
{
	member: {
		name: "Member"
		power: 1
		condition: "always_active"
		ftbranks.name_format: "<{name}>"
		ftbchunks.max_claimed: 40
		ftbchunks.max_force_loaded: 10
	}
	vip: {
		name: "VIP"
		power: 50
		ftbranks.name_format: "<&bVIP {name}&r>"
		ftbchunks.max_force_loaded: 15
	}
	admin: {
		name: "Admin"
		power: 1000
		condition: "op"
		command.ftbranks: true
		ftbchunks.max_claimed: 100
		ftbchunks.max_force_loaded: 50
	}
	alien: {
		name: "Alien"
		power: 100
		condition: {
			type: "not"
			condition: {
				type: "dimension"
				dimension: "minecraft:overworld"
			}
		}
		command: false
		command.say: true
		command.msg: true
	}
	senior: {
		name: "Senior"
		power: 100
		ftbranks.name_format: "<&2Senior {name}&r>"
		condition: {
			type: "playtime"
			time: 3
			time_unit: "weeks"
		}
		ftbchunks.max_claimed: 500
	}
}
```
</details>

In the above .snbt file there are 5 total _ranks_ (the first three are added by default). Ranks may also be referred to as _roles_; the terms are interchangeable.

<details open>
<summary>An example players.snbt file</summary>

```json
{
	380df991-f603-344c-a090-369bad2a924a: {
		name: "Dev"
		ranks: {
			vip: "2024-01-24T09:31:18.960345288Z"
		}
	}
}

```
</details>

In the above .snbt file one player ("Dev") has been added to the "VIP" rank (the timestamp shows when the player was added to the rank). Note that players are always keyed by UUID, not player name. The player name appears here only for clarity.

## Rank Nodes

Every rank contains a collection of _nodes_; this is basically just a key-value store. Nodes are fairly free-form, but it's suggested to stick to alphanumeric characters, along with `.`

Some nodes have special meaning to FTB Ranks itself: `name`, `power` and `condition` and any node starting with `command.`

All other nodes have a mod-specific meaning; it is up to that mod to determine how the node is used. E.g. FTB Chunks defines some nodes which control how many chunks and player can claim and/or force-load.

| Name | Description |
| ---- | ---- |
| `name`  | A human-readable name assigned to the role, for documentation and display purposes. This is freeform text, but should be kept brief, since it can be configured ti appear with a player's name in chat. |
| `power` | Determines which rank has the highest priority; if more than one rank applies to the player, and those ranks have conflicting values for permission nodes, then the rank with the higher power level takes precedence.<br  /> <br  /> This also applies to the rank's `name`; e.g. if a player only has the `member` rank, their name would be "Member". If they have only `vip`, their name would be "VIP". If they have both ranks, their name would be "VIP" as `vip`'s power level (50) is higher than `member`'s' (1). |
| `condition` | The rank condition determines whether a rank should be applied to a `player`. If no condition is specified for a rank, then players must be explicitly added to the rank via [command](Commands.md). Simple conditions can be applied by just a simple string; see [Simple Conditions](Simple%20Conditions.md) and [Advanced Conditions](Advanced%20Conditions.md) for more information. <br/>In the example above, `member` and `admin` have simple conditions, `VIP` has no condition (so must be manually assigned to players), and `alien` and `senior` have advanced conditions.|
| Mod-specific nodes | Any other node which contains a `.` is one used by a particular mod. `ftbranks.name_format` is an example discussed below, and nodes added by FTB Chunks are also present in the above example. |
| `ftbranks.name_format` | This is a _mod-specific_ node, added by FTB Ranks itself. The name format determines how the player's name will look like in-game, in chat messages. You can use the [Minecraft wiki](https://minecraft.wiki/w/Talk:Formatting_codes) to see more about text formatting. Alternatively, you can use [this online tool](https://codepen.io/0biwan/pen/ggVemP) to customize your desired text.  |
| Command nodes | Any node which starts with `command.` is a _command node_. These nodes configure a rank's access to that command (which could be a vanilla command, or one added by any mod), and can be used to allow access to admin-level commands that the player doesn't normally have access to. E.g. adding `commands.give: true` to a rank would allow players who have that rank to use the `/give` command even if they are not server ops.<br/>This can also be used to take away commands; in the example above, players in the "Alien" rank can't use any commands other than `/say` and `/msg`.<br/>A list of all known command nodes can be found in `serverconfig/ftbranks/README.txt` (see also the `/ftbranks refresh_readme` [command](Commands.md)) |
