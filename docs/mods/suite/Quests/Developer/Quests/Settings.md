---
title: Settings
---

## Quest

### Description

The description of the quest. This is what will be displayed below the quest tasks and rewards.
The text can be formatted to include colours, bold text, links and more. SEE GUIDE

### Disable Completion Toast

Disables the completion toast for this quest. This will prevent the toast from appearing in the top right when this quest is completed.

### Icon

The quest icon, this is the icon that will be displayed in the questbook

### Subtitle

The subtitle will be displayed as a tooltip when you hover over the quest title in the quest list.

### Tags

Tags are used to help theme the quest/questbook and also allow you to use them in KubeJS events. You can add multiple tags to a quest.

### Title

The title of the quest.

---

## Appearance

### Icon scaling

Size of the quest icon in the questbook

### Min opened quest window width

Minimum width of the quest description window

### Shape

The shape of the quest in the questbook. The following shapes are available:

- Default (Will use the default shape for the chapter)
- Circle
- Square
- Rounded Square
- Diamond
- Pentagon
- Hexagon
- Octagon
- Heart
- Gear

### Size

Size of the quest in the questbook including the icon

### X

X position of the quest in the questbook

### Y

Y position of the quest in the questbook

---

## Visibility

### Hide details until startable

If enabled, the quest details (text and tasks) will be hidden until the quest can be started.

### Hide until dependencies are visible

If enabled, the quest will be hidden until all of its dependencies are visible.

### Hide text until quest is completed

Hides the quest description until the quest is completed.

### Invisible until completed

The quest is invisible until it is completed. Useful for easter egg or optional quests.

### Invisible until X tasks are completed

Only applies if invisible is enabled. The quest will be invisible until X tasks are completed, once X tasks are completed the quest will become visible.

---

## Dependencies

### Dependencies

List of quests that the quest depends on, see the below dependency requirement options for more information.

### Dependency requirement

- All Completed
  - All the dependencies must be completed before this quest can be started.
- One Completed
  - Only one of the dependencies must be completed before this quest can be started.
- All Started
  - All the dependencies must be started before this quest can be started.
- One Started
  - Only one of the dependencies must be started before this quest can be started.

### Hide dependency lines

Hides the dependency lines for this quest.

### Hide dependent lines

Hides the dependent lines for any quests that depend on this quest.

### Min required dependencies

Number of dependencies that must be completed before this quest can be started.

---

## Misc

### Disable JEI recipe

Disable showing JEI recipes for this quest.

### Guide page

???

### Ignore reward blocking

Offer the quest rewards even if reward blocking is enabled for the team.

### Optional quest

The quest is optional and does not need to be completed to progress.

### Progression mode

- Linear
  - Quests must be completed in order.
- Flexible
  - Quests can be completed in any order.

### Repeatable quest

The quest can be repeated as many times as the player wants.

### Sequential task completion

If enabled tasks in this quest will need to be completed in order.
