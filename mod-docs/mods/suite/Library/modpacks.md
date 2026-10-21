---
title: Modpack Authors
description: A guide on how modpack authors can customize the sidebar buttons in FTB Library.
tags:
  - library
  - sidebar
---

### Modpack creators

Your layout is saved under `sidebar.buttons` in `ftblibrary-client.json5`. To ship a default layout with your pack, arrange the sidebar in-game and then include `config/ftblibrary-client.json5` in your modpack. Each entry is keyed by the button ID:

```json5
{
  sidebar: {
    buttons: {
      "ftblibrary:toggle/day": { enabled: false, x: 1 },
      "ftbquests:quests": { enabled: true, x: 0, y: 0 }
    }
  }
}
```

You can also use a resource pack to override a button's JSON file, for example to set `requires_op` to `true` or change its `sort_index`. To hide a button by default, set `enabled: false` for it in `sidebar.buttons` as shown above.

### Adding your own buttons

Any mod or resource pack can add a sidebar button by adding a JSON file at `assets/<namespace>/sidebar_buttons/<path>.json`. The button ID is `<namespace>:<path>`. For example, `assets/ftblibrary/sidebar_buttons/toggle/day.json` adds the button `ftblibrary:toggle/day`.

| Field                   | Required | Default | Description                                                                                                                                                       |
|-------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `icon`                  | Yes      |         | The button's icon (see [Icons](#icons))                                                                                                                           |
| `click`                 | Yes      |         | A list of actions to run when the button is clicked (see [Click actions](#click-actions))                                                                         |
| `shift_click`           | No       |         | A list of actions to run when the button is shift-clicked                                                                                                         |
| `default_enabled`       | No       | `true`  | Currently has no effect. Use `sidebar.buttons` in the client config to hide buttons by default                                                                    |
| `sort_index`            | No       | `0`     | The button's position in the sidebar. Lower numbers come first                                                                                                    |
| `tooltip`               | No       |         | A list of text components added to the tooltip                                                                                                                    |
| `shift_tooltip`         | No       |         | A list of text components added to the tooltip while holding Shift                                                                                                |
| `requires_op`           | No       | `false` | Only show the button to players with op permissions                                                                                                               |
| `required_mods`         | No       |         | A list of mod IDs. The button only shows when all of them are loaded                                                                                              |
| `loading_screen`        | No       | `false` | Show a loading screen while the click action runs                                                                                                                 |
| `environment_condition` | No       |         | The name of an environment variable. The button only shows when that variable is set. Prefix it with `!` to show the button only when the variable is **not** set |

The button's name comes from the language key `sidebar_button.<namespace>.<path>`, with `/` replaced by `.`. If you add a `sidebar_button.<namespace>.<path>.tooltip` key, it is shown as extra tooltip text while holding Shift.

Here is the button that sets the time to day:

```json
{
  "icon": ["ftblibrary:textures/icons/toggle_day.png"],
  "sort_index": 200,
  "click": ["command:/time set minecraft:day"],
  "requires_op": true
}
```

#### Click actions

Each action in `click` and `shift_click` is a string:

| Action             | Example                        | Description                                                                                  |
|--------------------|--------------------------------|----------------------------------------------------------------------------------------------|
| `command:`         | `command:/ftbquests open_book` | Runs a command as the player                                                                 |
| `http:` / `https:` | `https://feed-the-beast.com`   | Opens a URL. The player is asked to confirm first if their "Chat Links Prompt" setting is on |
| `file:`            | `file:/path/to/file.txt`       | Opens a file on the player's computer                                                        |
| `custom:`          | `custom:ftbteams:open_gui`     | Sends a custom click event that a mod can handle                                             |

Any other value of the form `namespace:path`, such as `ftbteams:open_gui`, is also sent as a custom click event.

#### Icons

`icon` is a list of icon strings, drawn on top of each other in order. Each string can be one of:

| Icon    | Example                                    | Description                                                                       |
|---------|--------------------------------------------|-----------------------------------------------------------------------------------|
| Texture | `ftblibrary:textures/icons/toggle_day.png` | A texture file. The path must end in `.png` or `.jpg`                             |
| Sprite  | `ftblibrary:icons/settings`                | A sprite from the GUI texture atlas (any ID that doesn't end in `.png` or `.jpg`) |
| Item    | `item:minecraft:diamond`                   | An item's icon                                                                    |
| Color   | `color:#FF0000`                            | A solid color                                                                     |
