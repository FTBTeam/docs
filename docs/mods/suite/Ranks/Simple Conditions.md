---
sidebar_position: 2
---
Conditions determine when a rank is implicitly applied to a player. Typically, ranks are awarded based on some player activity, e.g. a "Senior" role can be applied if a player has been on the server for a certain amount of time.

Simple conditions are so-called because they take no arguments; the condition is simply added to a rank by specifying its name.

### `always_active`

```json
{
	member: {
		name: "Member"
		power: 1
		condition: "always_active"
	}
}
```

When the `"always_active"` condition is applied to a rank, the rank given to _every_ `player` that joins the server / world. This is typically used as a default rank, and usually has the lowest power level.

---

### `creative_mode`

```json
{
    admin: {
	    name: "Admin"
	    power: 1000
	    condition: "creative_mode"
    }
}
```

When the `"creative_mode"` condition is applied to a rank, the rank is given to any player who is in creative mode. This can be used in various ways, for example. Using KubeJS you can detect if X player enters creative mode & automatically put them back into survival.

---

### `fake_player`

```json
{
    admin: {
	    name: "Admin"
	    power: 1000
	    condition: "fake_player"
    }
}
```

When the `"fake_player"` condition is applied to a rank, the rank is given to any _fake player_. A fake player is a "virtual" player object which many mods use when there is a need to interact with the world like a player, e.g. to break or place blocks, right click blocks, attack entities, etc. Having this condition on a role that prevents blocks from being placed will stop blocks that place things from working. (This will not work on `1.20.4` Forge)

---

### `op`

```json
{
    admin: {
	    name: "Admin"
	    power: 1000
	    condition: "op"
    }
}
```

When the `"op"` condition is applied to a rank, the rank is given to any player that is opped via `/op <playername>`.

---

### `spawn`

```json
{
    admin: {
	    name: "Admin"
	    power: 1000
	    condition: "spawn"
    }
}
```

When the `"spawn"` condition is applied to a rank, the rank is given to any player who is currently in the protected spawn chunk range.
:::tip
The spawn protected radius can be found in the `server.properties` file; see the field `"spawn-protection"`.
:::
For more advanced conditions see [Advanced Conditions](<Advanced Conditions.md>).
