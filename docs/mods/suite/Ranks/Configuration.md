---
sidebar_position: 1
---
FTB Ranks is purely configured via an SNBT file named `ranks.snbt`. An example follows below; 


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

Within this .snbt file there are 5 total roles (the first three are added by default), you can change the name of each via the `name:` field.

| Name | Description |
| ---- | ---- |
| `power:` | Determines which rank has the highest priority, if you was to have two roles (applied to the player) with the same permission node (ie, command.say: ), one being false and one being true, the one with the higher power level will supersede the other.<br  /> <br  /> This also applies to names, if `Player` only has `member` their name would be "Member". If they have only `vip` their name would be "VIP". If they have both ranks, their name would be "VIP" as `vip`'s power level is higher than `member`. |
| `ftbranks.name_format:` | The name format determines how the name would look like in-game. You can use the [Minecraft wiki](https://minecraft.wiki/w/Talk:Formatting_codes) to see more about text formatting. Alternatively you can use [this online tool](https://codepen.io/0biwan/pen/ggVemP) to customize your desired text.  |
| `condition:` | This is how a rank is applied to a `player`, if none is specified it can only be applied via the [add rank command](Commands.md). Simple conditions can be applied by just a simple string. Checkout [Simple Conditions](Simple%20Conditions.md) for more. |
|  |  |

