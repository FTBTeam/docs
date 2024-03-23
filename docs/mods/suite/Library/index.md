---
title: Library
sidebar_position: 1
description: Introduction to FTB Ranks
tags:
  - introduction
---

## What is FTB Library?

FTB Library is one of our core mods / library mod that is a collection of common code, utilities, and features that are utilized across all of our mods. 

## Features

- `SNBT`, our custom string based NBT format that is used by our config system and by most of our storage solutions for mod data. See [SNBT](/docs/mods/technical/SNBT/) for more information.
- `Custom UI` system that is used to create GUI's in all of our mods
- `Sidebar System` that is used to dynamically create sidebar icons for quick access for the user. This can do an array of different things, primarily run commands, open GUI's, or open a URL.
- `Config system` that is used to create and manage config files for mods. This system is used by all of our mods to create and manage their config files.
- `Utility commands` such as `/ftblibrary rain`, `ftblibrary night`, etc.

## Commands

| Command | Description |
| --- | --- |
| `/ftblibrary gamemode` | Quick toggle between creative and survival |
| `/ftblibrary rain` | Toggle rain |
| `/ftblibrary day` | Set time to day |
| `/ftblibrary night` | Set time to night |
| `/ftblibrary clientconfig` | Opens the client config |
| `/ftblibrary nbtedit` | Opens a rich NBT Editing GUI |

## NBT Editor

The NBT Editor is a powerful tool that allows you to edit NBT data in a user-friendly way. You can edit the NBT data of blocks, entities, items, and players. The NBT Editor is accessible in-game by running the `/ftblibrary nbtedit` command.

![Screenshot of the NBT Editor in-game](../../_assets/ftb-library-nbt-editor.png)

