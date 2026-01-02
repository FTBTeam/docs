---
sidebar_position: 3
---

Conditions determine when a rank is implicitly applied to a player. Typically, ranks are awarded based on some player activity, e.g. a "Senior" role can be applied if a player has been on the server for a certain amount of time.

Advanced conditions are so-called because they require a collection of fields to be supplied to configure how they work, as a config subsection in the `ranks.snbt` file. For this reason, it's not uncommon to edit the config file manually to add an advanced condition, although it is also possible to use commands.

All advanced conditions have a `type` field, which identifies the condition being added. All other fields are specific to the condition, and are described along with each condition below.

:::tip
Example of using a command to set an advanced condition for the "senior" rank:
```
/ftbranks condition senior { type: "playtime", time: 3, time_unit: weeks }
```
:::

---

### `and`

```json
{
  admin: {
    name: "Op and At Spawn"
    power: 1000
    condition: {
      type: "and"
      conditions: [
        { type: "op" }
        { type: "spawn" }
      ]
    }
  }
}
```

The `"and"` conditions allows combining of two or more subconditions. The rank applies to the player if _all_ of the subconditions match.

#### Fields
* `conditions` - a list of the subconditions, all of which must be matched for this condition to apply

---
### `dimension`

```json
{
  admin: {
    name: "In the Overworld"
    power: 1000
    condition: {
      type: "dimension"
      dimension: "minecraft:overworld"
    }
  }
}
```
The `"dimension"` condition checks the dimension that a player is currently in; the rank applies to the player if they are in the specified dimension.

#### Fields
* `dimension` is the dimension ID of the dimension to be checked, e.g. `minecraft:overworld` or `minecraft:the_nether`

---

### `not`

```json
{
  admin: {
    name: "Not in the Nether"
    power: 1000
    condition: {
      type: "not"
      condition: { type: "dimension", "dimension": "minecraft:the_nether" }
    }
  }
}
```

The `"not"` condition takes a single subcondition; the rank applies to the player if the subcondition does _not_ match.

#### Fields
* `condition` - one subcondition, which must not be matched for this condition to apply

---

### `or`

```json
{
  admin: {
    name: "Op or One Week Played or Creative Mode"
    power: 1000
    condition: {
      type: "or"
      conditions: [
        { type: "op" }
        { type: "playtime", "time": 1, "time_unit": "weeks" }
        { type: "creative_mode"}
      ]
    }
  }
}
```

The `"or"` condition allows combining of two or more subconditions. The rank applies to the player if _any_ of the subconditions match.

#### Fields
* `conditions` - a list of the subconditions, at least one of which must be matched for this condition to apply

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

When the `"playtime"` condition is applied to a role it is given to any player that has played for a certain number of time units.

#### Fields

* `time` is the number of time units the player must have been on the server for
* `time_unit` is one of the following:
  - `"ticks"`
  - `"seconds"`
  - `"minutes"`
  - `"hours"`
  - `"days"`
  - `"weeks"`

If a `time_unit` is not supplied it will default to ticks (and a warning will be logged when the config is loaded by the server).

---

### `rank_added`

```json
{
  admin: {
    name: "Has the 'xyz' rank added"
    power: 1000
    condition: {
      type: "rank_added"
      rank: "xyz"
    }
  }
}
```

The `"rank_added"` condition can be used to check if a player has had some other rank explicitly added, either by the `/ftbranks add ...` command, or by direct editing of the player rank file. It does _not_ match ranks which apply implicitly; see the `rank_applies` condition if you need that.

This is a fairly esoteric condition, but can be used to simplify the usage of complex compound conditions, where you might otherwise end up with multiple levels of nested and/or/not conditions.

#### Fields
* `rank` - the rank to check, which must be explicitly added to the player

---

### `rank_applies`

```json
{
  admin: {
    name: "The 'xyz' rank applies to the player"
    power: 1000
    condition: {
      type: "rank_applies"
      rank: "xyz"
    }
  }
}
```

The `rank_applies` condition is very similar to the `rank_added` condition, but with one important difference: it matches _any_ rank that currently applies to the player, either explicitly added, or by an implicit match (e.g. a `playtime` or `stat` condition).

#### Fields
* `rank` - the rank to check, may be explicitly added or applies implictly

---

### `stat`

```json
{
  admin: {
    name: "Walked at least 5000m (500000cm)"
    power: 1000
    condition: {
      type: "stat"
      stat: "minecraft:walk_one_cm"
      value: 500000
      value_check: >=
    }
  }
}
```

The `"stat"` condition can be used to compare a player's [Minecraft Statistics](https://minecraft.fandom.com/wiki/Statistics) with a given value. This rank applies to the player if the given stat value for the player satisfies the check.

#### Fields
* `stat` is the resource location for the stat to check. All default stats added by vanilla can be seen at https://minecraft.fandom.com/wiki/Statistics. It is possible that some mods may add extra custom stats.
* `value` is an integer value to be compared against the stat's returned values
* `value_check` determines how to compare the stat's value against the supplied `value`. It is one of:
  - `equals` or `==`
  - `not_equals` or `not` or `!=`
  - `greater` or `>`
  - `greater_or_equal` or `>=`
  - `lesser` or `<`
  - `lesser_or_equal` or `<=`

If omitted, `value_check` defaults to `equals`.

---

### `xor`

```json
{
  admin: {
    name: "Only one of Op or One Week Played"
    power: 1000
    condition: {
      type: "xor"
      conditions: [
        { type: "op" }
        { type: "playtime", "time": 1, "time_unit": "weeks" }
      ]
    }
  }
}
```

The `"xor"` condition allows combining of two or more subconditions. The rank applies to the player if _only one_ of the subconditions matches.

#### Fields
* `conditions` - a list of the subconditions, exactly one of which must be matched for this condition to apply
