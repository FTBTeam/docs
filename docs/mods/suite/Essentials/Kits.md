---
title: Kits
---

## Overview

**Kits** are configured collections of items, along with an optional cooldown, which can be given to players. By default, all kit commands require admin permissions to use, so they are typically intended for use with solutions like Command Blocks, which run commands with admin permissions.

Kit names (shown as `<kitname>` in many of the examples below) are alphanumeric strings, with the `_` and `-` characters also permitted.

## Creating Kits

There are three similar ways of creating a new kit:

### From the contents of a block

Place the items you want in the kit (ensuring item counts are correct) into a Chest or similar inventory, then while looking at the block, type:

`/kit create_from_block_inv <kitname>`

Note that the command does take sided inventories into account (not important for chests, but might be for some other blocks).

### From your player inventory

Have all of the kit items anywhere in your inventory, and type:

`/kit create_from_player_inv <kitname>`

This will create a kit from all of the items in your inventory.

### From your hotbar

Have all of the kit items anywhere in your hotbar, and type:

`/kit create_from_player_hotbar <kitname>`

This will create a kit from just the items on your hotbar. This could be convenient if you're creating two or more kits, and want to be able to shuffle the right items around in your inventory.

## Giving Kits

To give a kit to one or more players, run:

`/kit give <kitname> <players>`

Multiple players can be specified here, and the standard vanilla selectors work, e.g.

`/kit give somekitname @a`

would give `somekitname` to all players on the server.

You can also put the contents of the kit into a chest or other inventory. To do this, look at the chest and type:

`/kit put_in_block_inv <kitname>`

You should ensure there's enough space in the inventory for the kit contents; if there isn't then you may get a partial kit (Forge), or no items at all (Fabric).

## Managing Kits

### Viewing

You can see a list of the known kits with:

`/kit list`

You can view the contents of a kit (along with cooldowns and other information) with:

`/kit show <kitname>`

Note that the kits listed by `/kit list` can also be clicked to run the `/kit show ...` command, as a convenience.

### Deleting

You can delete a kit with:

`/kit delete <kitname>`

There is no confirmation for this action, so take care.

## Cooldowns

Kits can optionally be created with a _cooldown_, which is how frequently kits can be given to players. Cooldowns are per-player. Cooldown syntax is pretty simple; a number followed by one of `s`, `m`, `h`, `d` or `w` to indicate seconds, minutes, hours, days or weeks, respectively.  One special cooldown is `*`, which means "forever"; this can be used for kits which can only be given once per player.

Example of creating a kit with a cooldown:

`/kit create_from_block_inv kit1 3h`

creates a kit which can be given to players not more often than every 3 hours.

The cooldown of an existing kit can easily be modified later, if needed:

`/kit cooldown <kitname> <new-cooldown>`

### Resetting Cooldowns

It is possible to reset the current kit cooldown for a kit, to allow players to immediately receive a kit again:

`/kit reset_cooldown <kitname>`

resets the cooldown of a kit for _all_ players (including offline players);

`/kit reset_cooldown <kitname> <player-name>`

resets the cooldown of a kit for the given (online) player only;

`/kit reset_cooldown <kitname> <player-uuid>`

is an equivalent player-only command, but using the player UUID allows the cooldown to be reset for an offline player, if necessary.

### Autogranting

Kits can be configured to be _auto-granted_; such kits are given to players automatically on login, subject to normal cooldown requirements.

The `*` (forever) cooldown is quite useful with such kits, since it then becomes a "starter" kit; given to the player the first time they log in, and never again.

You can configure if a kit is auto-granted like this:

`/kit set_autogrant <kitname> <true|false>`

(kits are not autogranted by default)
