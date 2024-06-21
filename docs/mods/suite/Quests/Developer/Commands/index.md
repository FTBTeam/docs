---
title: Commands
sidebar_position: 1
---

:::info Key

- `< >` - Required argument.
    - This means you must provide an argument for the command to work.
- `[ ]` - Optional argument.
    - This means you can provide an argument for the command to work, but it is not required.
:::

| Command                                                     | Description                                                              | Permission/something else? |
|-------------------------------------------------------------|--------------------------------------------------------------------------|----------------------------|
| `/ftbquests open_book [quest ID]`                           | Opens the quest book (Optionally to a specific quest)                    |                            |
| `/ftbquests block_rewards [true\|false] [player]`           | Blocks the player from claiming rewards from quests                      |                            |
| `/ftbquests change_progress <reset\|complete> <quest ID>`   | Mark a quest as completed or reset the progress on a quest               |                            |
| `/ftbquests clear_item_display_cache`                       | ???                                                                      |                            |
| `/ftbquests delete_empty_rewards_table`                     | ???                                                                      |                            |
| `/ftbquests editing_mode [true\|false] [player]`            | Enable quest editing mode for a player                                   |                            |
| `/ftbquests export_reward_table_to_chest <reward ID> <pos>` | Creates a chest containing all the item rewards for the given quest      |                            |
| `/ftbquests generate_chapter_with_all_items_in_game`        | Create a quest chapter with every in game item                           |                            |
| `/ftbquests import_reward_table_from_chest <name> <pos>`    | Import the contents of a chest as a reward table                         |                            |
| `/ftbquests locked [true\|false] [player]`                  | Stop a player from being able to open the quest book and complete quests |                            |
| `/ftbquests reload`                                         | Reloads FTB Quests config and quests                                     |                            |
