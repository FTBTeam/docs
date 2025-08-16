---
title: Reward Tables and Loot Crates
sidebar_position: 4
---

# Reward Tables

Reward Tables are a way to manage quest rewards dynamically, equivalent to [loot tables](https://minecraft.wiki/w/Loot_table).

## Accessing reward tables

Instead of assigning a fixed reward, you create a pool of items that the reward will be selected from.

Click the settings cog in your questbook (lower right).

![Settings cog](../../../../_assets/images/quests/rewards/settings-cog.png "The settings cog is located in the lower right of the screen")

Select "Edit Reward Tables" in the menu, where you'll be taken to create your first reward table.

![Edit button for reward tables](../../../../_assets/images/quests/rewards/edit_reward_tables.webp "The edit button for reward tables")

## Types of loot tables

Within the questbook interface, reward tables are created and categorized into various types, which are detailed on the [quest rewards](./Rewards/index.md) page.

- Choice Reward
- All Table Reward
- Random Reward
- Loot Reward

## Loot crates

Loot crates reward the player with a **[Loot Reward](./Rewards/Loot_Reward.md)** upon their use. They keep all the benefits offered by reward tables.

### Converting a reward table

After a reward table is created, it can be converted to a loot crate by hovering over it and clicking the loot crate button.

In the following image, we convert a reward table of igneous rocks to a loot crate.

![Enabling loot crates](../../../../_assets/images/quests/rewards/loot-crate-reach-config.webp "Reaching the configuration for a loot crate")

### Obtaining the crate as an item

To obtain the crate as an item in-game, you must know its identifier (id). In the previous example, the id was `igneous_rocks`.

![The previous example's id was igneous rocks](../../../../_assets/images/quests/rewards/loot-crate-id.png "The previous example's id was igneous_rocks")

:::info
Minecraft 1.20.5 and above use the new [component](https://minecraft.wiki/w/Data_component_format) item system when giving items.
:::

```mcfunction
/give @s ftbquests:lootcrate[ftbquests:loot_crate="igneous_rocks"]
```

### In a loot table

Loot crates in item form can be included in a standard Minecraft [loot table](https://minecraft.wiki/w/Loot_table). We'll go through an example.

With the following structure, we create a [datapack](https://minecraft.wiki/w/Data_pack) named `SilverfishLootCrateDatapack` in our world folder.

```plaintext
world/
└── datapacks/
    └── SilverfishLootCrateDatapack/
        ├── pack.mcmeta <----------------------- Mandatory file for datapacks
        └── data/
            └── minecraft/
                └── loot_tables/
                    └── entities/
                        └── silverfish.json <--- The silverfish loot table
```

- [pack.mcmeta](https://minecraft.wiki/w/Data_pack#pack.mcmeta) is mandatory and includes your datapack version.
- The file `silverfish.json` includes your loot table which contains a loot crate.

In the following code block is the code for the loot table. Notice the use of the component `ftbquests:loot_crate` with the id of our loot crate, `igneous_rocks`, to clearly identify this loot crate's contents.

```json
{
  "type": "minecraft:entity",
  "pools": [
    {
      "rolls": 1,
      "entries": [
        {
          "type": "minecraft:item",
          "name": "ftbquests:lootcrate",
          "functions": [
            {
              "function": "minecraft:set_components",
              "components": {
                "ftbquests:loot_crate": "igneous_rocks"
              }
            }
          ]
        }
      ]
    }
  ],
  "random_sequence": "minecraft:entities/silverfish"
}
```

After saving our `silverfish.json` file, we exit the world and enter it again. Now, silverfish will drop our "Igneous Rocks" loot crate on death.

![Silverfish dropping a loot crate](../../../../_assets/images/quests/rewards/loot-crate-silverfish.png "A silverfish drops the loot crate on death")

When we will open the loot crate from the silverfish, we will obtain either one Granite, Diorite or Andesite.

![An igneous rock is randomly obtained when opening the loot crate](../../../../_assets/images/quests/rewards/loot-crate-igneous-rocks.png "An igneous rock is randomly obtained when opening the loot crate")

### Presets to accelerate development

A few presets can help you create loot crates of various rarities quickly.

By creating a reward table with any name in the "Name" column below (e.g. "`common`"), and converting it to a loot crate, it will automatically assign some properties.

|Icon|Name|Color (hexcode)|Passive Mob Drop Rate|Monster Drop Rate|Boss Drop Rate|Glow|
|-|-|-|-|-|-|-|
|![Common crate preset](../../../../_assets/images/quests/rewards/loot-crate-common.png "The common crate")|common|0x92999A|350|10|0|false|
|![Uncommon crate preset](../../../../_assets/images/quests/rewards/loot-crate-uncommon.png "The uncommon crate")|uncommon|0x37AA69|200|90|0|false|
|![Rare crate preset](../../../../_assets/images/quests/rewards/loot-crate-rare.png "The rare crate")|rare|0x0094FF|50|200|0|false|
|![Epic crate preset](../../../../_assets/images/quests/rewards/loot-crate-epic.png "The epic crate")|epic|0x8000FF|9|10|10|false|
|![Legendary crate preset](../../../../_assets/images/quests/rewards/loot-crate-legendary.webp "The legendary crate")|legendary|0xFFC147|1|1|190|true|

### Nesting with loot crates

Reward tables and loot crates can be nested in each other.

The "parent" table needs to be a reward table or a loot crate, and the "children" needs to be loot crates.

#### Nesting example

Step 1: Start by creating your children reward tables and convert them all to loot crates. In this example below we have the five rarities.

![Example loot crates](../../../../_assets/images/quests/rewards/nesting-five-types.png "Fives types of loot crates")

Step 2: Give yourself all the loot crates using their identifiers (ID).

```mcfunction
/give @s ftbquests:lootcrate[ftbquests:loot_crate="common"]
/give @s ftbquests:lootcrate[ftbquests:loot_crate="uncommon"]
/give @s ftbquests:lootcrate[ftbquests:loot_crate="rare"]
/give @s ftbquests:lootcrate[ftbquests:loot_crate="epic"]
/give @s ftbquests:lootcrate[ftbquests:loot_crate="legendary"]
```

![Loot crates in hotbar](../../../../_assets/images/quests/rewards/nesting-five-crates-inv.webp "The five types of loot crates are in our hotbar")

Step 3: With the loot crates in your hotbar, create a new parent reward table. We will call it "All Loot Crates" for this example.

![New reward table](../../../../_assets/images/quests/rewards/nesting-parent.png "The new parent reward table")

Step 4: Add each of the children loot crates to the parent reward table by clicking the "Add" button.

![Add the loot crate to the parent](../../../../_assets/images/quests/rewards/nesting-add-common.webp "The common loot crate is added to the parent reward table")

For this example we do this until we get the following.

![All five types](../../../../_assets/images/quests/rewards/nesting-all-five.webp "All our five loot crates are added to the parent reward table")

Step 5 (optional): Before hitting "accept", you can click each of the loot crates and rename the titles. Much cleaner!

![Renaming the common crate](../../../../_assets/images/quests/rewards/nesting-rename-loot-crate.png "Renaming the entries of the parent table looks cleaner")

Step 6: Hit accept until you are back at quest creation.

![The accept button](../../../../_assets/images/quests/rewards/accept.png "Hitting the accept button ensures saving your changes!")

Step 7: Create a quest, create a "Loot Table" reward and set it to your parent reward table (in this example, "All Loot Crates").

![Loot reward](../../../../_assets/images/quests/rewards/nesting-loot-reward.webp "A chance to get any of the five loot crates!")

Now your players can truly receive a random assortment of items; the possibilities are limitless!
