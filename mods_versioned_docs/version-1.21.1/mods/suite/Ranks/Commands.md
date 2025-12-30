---
sidebar_position: 4
---

All FTB Ranks commands start with `/ftbranks`. The following commands are defined:

| Command | Op Required | Description |
| ---- | ---- | ---- |
| `/ftbranks reload` | Y | Reloads the `ranks.snbt` and `players.snbt` files. Check your server log for errors! |
| `/ftbranks refresh_readme` | Y | Regenerates the `serverconfig/ftbranks/README.txt` file. This file lists all known command nodes, determined from the commands which have been registered on this server. You should run this command after adding/removing any mods to/from your instance. |
| `/ftbranks list_all_ranks` | Y |  Lists all the ranks currently defined in `ranks.snbt`. Those ranks listed in **cyan** have no condition attached, and must be explicitly added to a player via `/ftbranks add ..` |
| `/ftbranks create <name> <power>` | Y | Creates a rank named `<name>` with the given `<power>` level. The new rank will have no condition attached, or other custom nodes added to it. |
| `/ftbranks delete <rank>` | Y | Deletes the rank named `<name>`. Take care: this operation can't be undone! |
| `/ftbranks add <players> <rank>` | Y | Adds the given `<players>` to the given `<rank>`. Entity selectors can be used to add multiple players. |
| `/ftbranks remove <players> <rank>` | Y | Removes the given `<players>` from the given `<rank>`. Entity selectors can be used to remove multiple players. |
| `/ftbranks list_ranks_of <player>` | Y | List all the ranks that the given `<player>` currently has. |
| `/ftbranks list_players_with <rank>` | Y | Lists all the players who currently have the given `<rank>`. |
| `/ftbranks node <add\|remove\|list> <rank> <node> <value>` | Y | Adds or removes the given node to/from the given `<rank>`. |
| `/ftbranks condition <rank> <value>` | Y | Sets the condition for the given ranks. [Simple conditions](Simple%20Conditions.md) just need a condition name here, but [advanced conditions](Advanced%20Conditions.md) require a code block. A condition can be removed by specifying the empty string. See below for examples. |
| `/ftbranks show_rank <rank>` | Y | Dumps the configuration information for the given `<rank>` |

### Adding conditions

Example command to set a simple condition on the `Near Spawn` rank:

```
/ftbranks condition "Near Spawn" spawn
```

Example command to set an advanced condition on the `Veteran` rank (player has walked at least 500000 cm and been playing for at least 3 weeks):

```
/ftbranks condition Veteran { type: "and", conditions: [ { type: "stat", stat: "minecraft:walk_one_cm", value: 500000, value_check: ">=" }, { type: "playtime", time: 3, time_unit: "weeks" } ] }
```

Example command to clear the condition from the `VIP` rank (after this, players can only have the `VIP` rank by direct assignment via `/ftbranks add ...`):

```
/ftbranks condition VIP ""
```
