---
title: Essentials
description: FTB Essentials adds a variety of useful commands for players and server admins.
---

## What is FTB Essentials?

FTB Essentials is a server-side mod which adds a large collection of useful and convenient commands, both for players and server admins.

All commands can be individually disabled in the [mod configuration](/docs/mods/suite/Essentials/Configuration), and the [FTB Ranks mod](/docs/mods/suite/Essentials/Ranks_Integration) can optionally be used for more fine-grained access to commands and features.

## Namespacing

As of Minecraft `1.20.4` all FTB Essentials commands can be optionally configured to use the `ftbessentials` namespace within the command. This means that, when enabled, all commands will be prefixed with `/ftbessentials` instead of `/`. Aka, `/home` would become `/ftbessentials home`.

This is useful when multiple mods add commands with the same name, or if you want to keep all FTB Essentials commands together in the tab-complete list.
