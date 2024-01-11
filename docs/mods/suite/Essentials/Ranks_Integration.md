---
title: Ranks Integration
---

## Overview

FTB Essentials integrates with the [FTB Ranks](/docs/mods/suite/Ranks) mod to provide the following additional configurability:

* Commands which normally require OP permissions to run can be made available to players by giving them the corresponding command node permission.
* Commands which have configurable [warm-ups and cool-downs](/docs/mods/suite/Essentials/Warmups_Cooldowns) can use FTB Ranks permission nodes to override the default warmup and cooldown times, as defined in the [mod configuration](/docs/mods/suite/Essentials/Configuration).

## Command Nodes

Every Essentials command has a corresponding command node in FTB Ranks: the format of the node name is `command.` followed by the actual command name. E.g. the node for the `/heal` command is `command.heal`.

Commands with sub-commands join the nodes with a `.`, e.g. `/kit delete` uses a format of `command.kit.delete`.

### Example

To allow players in the "vip" rank to use the `/heal` and `/kit list` commands, and give them a max of 4 homes (instead of the default 1):

```
/ftbranks node add vip command.heal true
/ftbranks node add vip command.kit.list true
/ftbranks node add vip ftbessentials.home.max 4
```

This can also be used to block access to commands that can normally be run. E.g. to only allow players in the "vip" and "admin" ranks to view their ender inventory:

```
/ftbranks node add member command.enderchest false
/ftbranks node add vip command.enderchest true
/ftbranks node add admin command.enderchest true
```

If you prefer to edit config files directly (take care!), you can edit `serverconfig/ftbranks/ranks.snbt`, e.g.

```
vip: {
  name: "VIP"
  power: 50
  ftbranks.name_format: "&bVIP {name}"
  command.heal: true
}
```

Run `/ftbranks reload` after making changes to this file, and check your server log for any parse errors.

## Warmups and Cooldowns

See [warm-ups and cool-downs](/docs/mods/suite/Essentials/Warmups_Cooldowns) for general information.

Several teleport-related commands allow their default warmup and cooldown to be overridden by FTB Ranks. To check which commands support this, see the `serverconfig/ftbessentials.snbt` configuration file; look for comments mentioning `You can override this with FTB Ranks`.

### Example

The `/home` command has a default cooldown of 10 seconds:

```
# Allows users to set 'homes', which they can then freely teleport to by using /home afterwards
home: {
        # Cooldown between /home commands (in seconds)
        # You can override this with FTB Ranks using ftbessentials.home.cooldown
        # Default: 10
        # Range: 0 ~ 604800
        cooldown: 10
...
```

As the comment in the config file suggests, this can be overridden with FTB Ranks. E.g. to give VIP players a shorter cooldown, and admin-level players no cooldown at all:

```
/ftbranks node add vip ftbessentials.home.cooldown 3
/ftbranks node add admin ftbessentials.home.cooldown 0
```
