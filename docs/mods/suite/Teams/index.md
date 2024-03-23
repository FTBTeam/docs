---
title: Teams
tags:
  - FTB Suite
  - FTB Mods
---

## What is FTB Teams?

FTB Teams is our all in one solution for team management. It allows you to create teams, invite players to your team, manage team permissions and more.

## Features

- Team creation, management, and deletion
- Team invites
- Team permissions / settings
  - Feely join
  - Description
  - When FTB Chunks is installed you can also control
    - Mob griefing
    - Block breaking
    - Block placing
    - Block interaction
- Team chat (Via commands or the in-game GUI)
- Rich management GUI
- Team colors and team names
- Team allies (For trusted members that you don't want to invite to your team, or that might already be in another team)

![Example of the FTB Teams GUI](../../_assets/ftb-teams-example-gui.png)

## Commands

| Command | Description | Requires OP |
| --- | --- | --- |
| `/ftbteams list [team-type]` | Lists all teams | `N` |
| `/ftbteams party <party_options>` | Command based team management | `N` |
| `/ftbteams msg <message>` | Sends a message to your team | `N` |
| `/ftbteams info [team]` | Shows information about a team | `N` |
| `/ftbteams server <create\|delete\|settings>` | Server team management | `Y` |
| `/ftbteams force-disband <team>` | Forces a team to disband | `Y` |

## What is a server team?

A server team is a team that is created by and managed by the server. This team is typically used in combination with FTB Chunks to control permissions on a server level to protect chunks, claim areas, etc. Server teams are not managed by players and **cannot** be joined, invited to or left by players. They are purely for server management.