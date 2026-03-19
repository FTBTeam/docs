---
title: Creator Quest API
sidebar_position: 2
---
# Quest API Guide

This API lets you register quest chapters and quests at runtime via Minecraft script events. Implementations live in `scripts/api/questApi.ts`, `scripts/api/registries.ts`, and the task/reward classes under `scripts/tasks` and `scripts/rewards`.

## Event Flow (TL;DR)

1. Send `ftbquests:create_chapter` with chapter metadata.
2. Send `ftbquests:add_quests` for that chapter with one or more quest definitions.
3. Send `ftbquests:commit_chapter` to make the chapter active.

Each step expects a JSON string payload. Invalid JSON, duplicate IDs, or missing chapters will be logged and skipped.

### Minimal example

```ts
// In your own script pack
import { system } from "@minecraft/server";

system.sendScriptEvent(
  "ftbquests:create_chapter",
  JSON.stringify({
    id: "api_demo",
    title: "api.demo.title",
    description: "api.demo.desc",
    icon: "minecraft:book",
  }),
);

system.sendScriptEvent(
  "ftbquests:add_quests",
  JSON.stringify({
    chapter_id: "api_demo",
    quests: [
      {
        id: "cook_beef",
        name: "api.demo.cook_beef.name",
        description: "api.demo.cook_beef.desc",
        icon: "minecraft:cooked_beef",
        tasks: {
          anyOf: {
            "00": {
              type: "ftb_quest:item_use_complete",
              item_id: "minecraft:cooked_beef",
              consumes_item: true,
            },
          },
        },
        rewards: [{ type: "ftb_quest:item", item: "minecraft:diamond", count: 3 }],
      },
    ],
  }),
);

system.sendScriptEvent("ftbquests:commit_chapter", JSON.stringify({ chapter_id: "api_demo" }));
```

## Script Events and Payloads

- **ftbquests:create_chapter**
  - Payload: `{ id, title, description, icon }`
  - `id` must match regex `^[a-z0-9_.-]+$` and be unique.
  - Creates a provisioned chapter (not yet live).

- **ftbquests:add_quests**
  - Payload: `{ chapter_id, quests: Quest[] }`
  - Chapter must have been provisioned via `create_chapter` and not yet committed.
  - Duplicate quest IDs inside a chapter are skipped with a warning.

- **ftbquests:commit_chapter**
  - Payload: `{ chapter_id }`
  - Moves the provisioned chapter into the live quest manager and drops the staging copy.

## Quest Object Schema

- `id`, `name`, `description`, `icon`: required strings (IDs use `^[a-z0-9_.-]+$`).
- `tasks`: exactly one of `{ anyOf: TaskMap }` or `{ allOf: TaskMap }`.
  - `TaskMap` is a map keyed by two-digit hex strings (e.g., "00", "0A", "FF"), each pointing to a task definition.
- `rewards`: optional array of reward objects.

### Range helper format

Several tasks accept numeric ranges. A range can be:

- A single number: `5` (interpreted as `min = 5` and no max), or
- An object: `{ "min": 5 }` or `{ "min": 5, "max": 10 }`.

## Reward Types

| Type                   | Required fields         | Optional fields                      | Effect                                           |
| ---------------------- | ----------------------- | ------------------------------------ | ------------------------------------------------ |
| `ftb_quest:item`       | `item` (string)         | `count` (number, default 1)          | Gives an item stack.                             |
| `ftb_quest:loot_table` | `loot_table` (string[]) | —                                    | Runs `loot give @s loot <table>` for each entry. |
| `ftb_quest:command`    | `command` (string[])    | —                                    | Executes each command as the player.             |
| `ftb_quest:xp`         | `amount` (number)       | `is_levels` (boolean, default false) | Grants XP or levels.                             |

## Task Types

Each task object must include `type` plus the fields below.

| Type                                    | Required fields                                                 | Optional fields                                                                                                                                             | Notes                                                         |
| --------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `ftb_quest:biome_visited`               | `biome_id`                                                      | —                                                                                                                                                           | Completes when entering the biome.                            |
| `ftb_quest:block_break`                 | `block_id`                                                      | `count` (default 1)                                                                                                                                         | Counts broken blocks of the given type.                       |
| `ftb_quest:deal_damage`                 | —                                                               | `entity_id`, `damage_amount` (number or range), `required_held_item` (string or string[])                                                                   | Checks entity match, damage range, and held item if provided. |
| `ftb_quest:effect_active`               | `effect`                                                        | —                                                                                                                                                           | Triggers while the named effect is active.                    |
| `ftb_quest:fall_distance`               | —                                                               | `required_distance` (number or range)                                                                                                                       | Passes when fall distance is in range.                        |
| `ftb_quest:item_collected`              | `item_id`                                                       | `count` (default 1)                                                                                                                                         | Uses current inventory total as progress.                     |
| `ftb_quest:item_use_complete`           | `item_id` (string or string[])                                  | `consumes_item` (boolean)                                                                                                                                   | Fires when item use finishes.                                 |
| `ftb_quest:item_use_on`                 | `item_id` (string or string[]), `block_id` (string or string[]) | —                                                                                                                                                           | Requires using the item on the target block.                  |
| `ftb_quest:item_use`                    | `item_id`                                                       | —                                                                                                                                                           | Counts item uses.                                             |
| `ftb_quest:kill`                        | `entity_id`                                                     | `amount` (default 1), `required_distance_from_source` (number), `required_projectile_id` (string), `required_damage_cause` (string), `allow_baby` (boolean) | Matches additional filters before counting.                   |
| `ftb_quest:location`                    | —                                                               | `absolute_position {x,y,z}` **or** ranges `target_x/target_y/target_z`; `restricted_dimensions` (string or string[])                                        | At least one absolute pos or range is required.               |
| `ftb_quest:place_block`                 | `block_id` (string or string[])                                 | `requires_waterlogged` (boolean)                                                                                                                            | Optionally enforce waterlogged state.                         |
| `ftb_quests:player_interact_with_block` | `block_id` (string or string[])                                 | `required_held_item` (string or string[])                                                                                                                   | Note the plural namespace `ftb_quests`.                       |
| `ftb_quest:player_interact_with_entity` | `entity_id`                                                     | `required_item` (string or string[]), `required_y_level` (number or range)                                                                                  | Checks entity, optional item and Y-level.                     |
| `ftb_quest:player_look_at_block`        | `block_id`                                                      | `require_sneaking` (boolean)                                                                                                                                | Player must be looking at the block; sneaking optional.       |
| `ftb_quest:player_look_at_entity`       | `entity_id`                                                     | `required_held_item` (string or string[])                                                                                                                   | Requires line-of-sight and optional held item.                |
| `ftb_quest:player_riding_entity`        | `entity_id`                                                     | `required_other_riders` (string[])                                                                                                                          | Also verifies optional passengers by ID.                      |
| `ftb_quest:projectile_hit_block`        | `projectile_id`, `block_id`                                     | `required_hit_location` with ranges for `x`, `y`, `z`                                                                                                       | Checks projectile, block, and optional impact window.         |
| `ftb_quest:step_on_block`               | `block_id` (string or string[])                                 | `required_equipped_item` (string or string[]), `equipment_slot` (string, default `Feet`)                                                                    | Requires stepping onto block, optionally with specific gear.  |
| `ftb_quest:visit_dimension`             | `dimension_id`                                                  | —                                                                                                                                                           | Fires on entering the dimension.                              |
| `ftb_quest:xp`                          | `required_xp` (number or range)                                 | `uses_levels` (boolean)                                                                                                                                     | Checks total XP or levels.                                    |

## IDs and Validation Hints

- Chapter and quest IDs must match `^[a-z0-9_.-]+$`.
- Task map keys should be two hex characters (`"00"`–`"FF"`).
- Unknown task or reward types are rejected with an error log and skipped.
- Chapters with no quests are ignored on commit.

## Tips

- Group tasks under `anyOf` for alternatives, or `allOf` when every task must be complete.
- Use `loot_table` rewards for randomized drops without writing custom code.
- Keep localization keys (`title`, `description`, `name`) consistent with your language files to avoid raw key output.
