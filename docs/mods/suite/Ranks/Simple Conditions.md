---
sidebar_position: 2
---
Conditions determine when a role is applied to a player, this can be used to reward players for their activity, if a player is opped they can automatically be added to the admin role. Many other uses too! 
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

When the `"always_active"` condition is applied to a role it will be give to every `player` that has joined the server / world. This is often used for default ranks and usually has the lowest power/priority.

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

When the `"op"` condition is applied to a role it shall automatically be given to any `player` that is opped via `/op <playername>`. 

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

When the `"creative_mode"` condition is applied to a role it's given to any `player` that is in creative mode. This can be used in various ways, for example. Using KubeJS you can detect if X player enters creative mode & automatically put them back into survival. 

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

When the `"fake_player"` condition is applied to a role it is given to any `fakeplayer`. A fake player is an instance of a `player` in code that does not exist. Often used for blocks that break & place things. Having this condition on a role that prevents blocks from being placed will stop blocks that place things from working. (This will not work on `1.20.4` Forge)

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

When the `"spawn"` condition is applied to a role it is given to any `player` that is within the protected spawn chunk range. The spawn protected radius is found within a servers `server.properties` file under the field `"spawn-protection"`.


For more advanced conditions see [Advanced Conditions](<Advanced Conditions.md>).