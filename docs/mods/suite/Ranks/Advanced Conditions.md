---
sidebar_position: 3
---

### `playtime`


```json
{
    admin: {
	    name: "Admin" 
	    power: 1000
		condition: {  
			type: "playtime"  
			time: 3  
			time_unit: "weeks"  
			}
    }
}
```

When the `"playtime"` condition is applied to a role it is given to any `player` that has played for `X`amount of `time`, `X` being an integer. You can define how long each integer is via `time_unit:`. The options for `time_unit` are as follows:
- `"ticks` - If you wish to use ticks you must remove the `time_unit:` field.
- `"seconds"`
- `"minutes"`
- `"hours"`
- `"days"`
- `"weeks"`

If a `time_unit:` is not given it will default to ticks.