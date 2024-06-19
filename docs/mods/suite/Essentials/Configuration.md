---
title: Configuration
---

## Overview

The FTB Essentials configuration file can be found at `<world>/serverconfig/ftbessentials.snbt`. This contains a configuration section for every command added by the mod; every command can be disabled in the config file, and some commands have extra configuration.

The config file is heavily-commented, so each individual subsection will not be documented here.

The file is read at server startup, and cannot be reloaded when the server is running; a restart is required to load any changes made.

### Examples

An example of a command with a simple configuration:

```
# Allows users to access an Anvil GUI without needing an Anvil.
anvil: {
         # Default: true
         enabled: true
}
```

To remove the `/anvil` command, just change `enabled` to `false`, and (if running) restart your server.

A command with a more complex configuration:

```
# Allows users to set 'homes', which they can then freely teleport to by using /home afterwards
home: {
        # Cooldown between /home commands (in seconds)
        # You can override this with FTB Ranks using ftbessentials.home.cooldown
        # Default: 10
        # Range: 0 ~ 604800
        cooldown: 10

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
        warmup: 0
}
```

The `/home` command can be disabled (as all commmands can), but in addition, the default [warmup and cooldown](/docs/mods/suite/Essentials/Warmups_Cooldowns) can be changed, as well the default maximum number of homes that players can have. As per the comments, these defaults can be [overridden with FTB Ranks](/docs/mods/suite/Essentials/Ranks_Integration).
