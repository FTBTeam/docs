---
title: Warmups and Cooldowns
---

## Overview

Several teleport-related commands in FTB Essentials support the concept of _warmups_ and _cooldowns_.

Command _warmups_ enforce a delay between the player entering a command, and the command actually executing. If the player moves or takes damage during the warmup delay, command execution is cancelled. By default, no commands have a non-zero delay.

Command _cooldowns_ enforce a delay between subsequent runs of a command, on a per-player basis. Most teleport-related commands have a default cooldown of 10 seconds, with the exception of `/back` (30 seconds), and `/rtp` (600 seconds).

These values can be changed in the [configuration file](/mod-docs/mods/suite/Essentials/Configuration). E.g. to give the `/home` command a 5-second cooldown and a 5-second warmup time:

```
# Allows users to set 'homes', which they can then freely teleport to by using /home afterwards
home: {
        # Cooldown between /home commands (in seconds)
        # You can override this with FTB Ranks using ftbessentials.home.cooldown
        # Default: 10
        # Range: 0 ~ 604800
        cooldown: 5

        # Default: true
        enabled: true

        # Max amount of homes a user can have.
        # You can override this with FTB Ranks using ftbessentials.home.max
        # Default: 1
        # Range: 0 ~ 2147483647
        max: 1

        # Warm-up time before /home command executes (in seconds)
        # You can override this with FTB Ranks using ftbessentials.home.warmup
        # Default: 0
        # Range: 0 ~ 604800
        warmup: 5
}
```

Note that default cooldowns can be overridden by [FTB Ranks](/mod-docs/mods/suite/Essentials/Ranks_Integration#warmups-and-cooldowns), as the comments suggest.
