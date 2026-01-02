---
date: 2024-01-17
title: Ranks
description: FTB Ranks is a server-side mod for permission management.
tags:
  - introduction
sidebar_position: 4
---

# FTB Ranks

FTB Ranks is a server-side mod which defines the concept of _ranks_ or _roles_; these are basically permission groups which one or more players may belong to, and which have one or more permission _nodes_.

This provides a powerful system to control what players may do on a server, based on the their rank membership; FTB Ranks can provide access to commands that are normally only available to server ops, and can also deny access to commands that regular players normally have.

In addition, other mods may use FTB Ranks to define their own nodes and the behaviour for those nodes (e.g. FTB Chunks defines nodes which control the number of chunks a player may claim or force-load, overriding the default values for players with specific ranks).

## Nodes

Ranks contain a collection of _nodes_, which are basically just a set of key/value pairs. Nodes can be of the following types:
* String
* Numeric (both integer and double)
* Boolean (all command nodes are boolean)

Mods can use the [FTB Ranks API](API) to query the value of nodes and operate accordingly.
:::tip
It is strongly advised to prefix mod-specific node names with the mod id, e.g. `ftbchunks.max_claimed`, to avoid clashes!
:::

## Conditions

Each rank may have a _condition_, which determines whether or not the rank should apply to a given player (in other words, whether the player should be implicitly a member of that rank). Conditions are documented in [Simple Conditions](Simple Conditions.md) and [Advanced Conditions](Advanced Conditions.md).

:::info
Ranks which do not have a condition must be explicitly granted to players, using the `/ftbranks add` command.
:::
