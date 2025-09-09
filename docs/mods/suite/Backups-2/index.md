---
title: Backups 2
description: FTB Backups 2 is a mod that creates backups of your world
tags:
  - FTB Suite
  - FTB Mods
  - Backups 2
sidebar_position: 
---

:::warning
⚠ LTS Notice!

FTB Backups (2) is only available for Minecraft versions 1.18 -> 1.21.5 and is now on LTS. We will continue to bug fix the mod but no new features will be accepted in.

For Minecraft 1.21.1+ please use [FTB Backups 3](../Backups-3).
:::

[![Backups 2](https://cf.way2muchnoise.eu/title/622737.svg)](https://www.curseforge.com/minecraft/mc-mods/ftb-backups-2) ![Backups 2 Versions](https://cf.way2muchnoise.eu/versions/622737.svg)


# Features

- Silent backups, messages only printed to operators or print to everyone 
- Configurable amount of backups you can keep 
- Backup only if a player has been online and data has been saved
- Configurable timer, uses cron notation to give you in-depth control of backup times
- Backup metadata stored in json file, allowing development of feature rich backup management GUI's
- Add additional directories to the backup
- Automatically select best compression level for backup
- Ensures enough disk space exists for a new backup, protecting you from running out of disk while making a backup and corrupting your world

## Commands

- `/backup start` - Create a backup now
- `/backup snapshot` - Create a protected backup now, not affected by the max backups setting

## Restoring a Backup

1. Stop and close your client/server
2. Rename the current world folder to something else (e.g. `world_old`)
3. Navigate to the `backups` folder in your server directory
   - This folder may be different if you have configured a custom backup folder in the `ftbbackups2.json` config file
4. Extract the backup you want to restore, the backup files are named by the date and time they were created, so you can easily find the one you want `YYYY-MM-DD-HH-MM-SS`
5. Copy the extracted world folder into the saves folder or server directory if you are on a server and rename it to `world` (or whatever your singleplayer world was named/server is configured to use)
6. Start your client/server and enjoy your restored world!
