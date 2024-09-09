---
title: Theming the quest book
toc_max_heading_level: 4
---

Firstly: Themes are just a `.txt` file that tells quests how to look. Most components will use this for their styling. If they don't. Let us know! Not many people use this system

Secondly: Themes are handled by placing a `ftbquests/ftb_quests_theme.txt` file in your resource pack (kubejs works here)

## The fun stuff

### Properties

#### Colour
- `color`: A colour property is a RGBA colour code but it supports a bunch of things so here goes
    - "#00A8FF" (Hex codes are supported)
    - "#FF00A8FF" (Alpha supported (First 2) hex codes are supported
    - Then the following presets are supported: `transparent`, `black`, `dark_gray`, `gray`, `white`, `red`, `green`, `blue`, `light_red`, `light_green`, `light_blue`
#### Icon
- `icon`: Another fun one, this can be handled using the following:
    - An icon is a string value like the following `item:minecraft:diamond`
    - But an icon and support many different types (Not just items)
        - `color:{value}` (See above)
        - `bullet:{color_value}` is a simple bullet-point icon (drawn in code, rather than as a bullet texture)
        - `http`, `https`, `file`: Loads a resource from disk or a remote location.
            - All of these take a value like `https://example.com`, `file://C:/Location`
        - `hollow_rectangle:{color}` The name says it all, it makes a hollow rectangle
        - `part:{icon}` is used for drawing [nine-sliced](https://en.wikipedia.org/wiki/9-slice_scaling) widgets using an existing texture and corner-size definition
        - `builtin` indicates that the icon is drawn by the mod using an internal class to do the work
        - Finally, if you do not provide one of these keywords, and instead do something like `ftbranks:textures/gui/something.png` it will just try to do a normal asset icon
- **But now! Here is the fun stuff...**
    - Properties: Using a `;` you can signify that an icon has specific properties. These are as follows (I'll show an example at the end btw)
        - `padding={int_value}` Icon padding (all directions (left, right, up, down))
        - `border={color_value}` see colour description above.
            - You can give this rounded corners by adding `border_round_edges=true`
        - `color={color_value}` See above for colours but this will give the icon a standard colour under all the other options
        - `tint={color_value}` See above again. But this adds an overall tint to the icon
        - The distinction between `color` and `tint` is subtle and the effect often depends on the specific icon type. If in doubt, experiment!
        - Finally, these are added together using a `;` meaning a full example might look like this
            - `icon:minecraft:diamond;padding=5;border=#00A8FF;border_round_edges=true;color=blue;tint=#A8FFFFFF`
- `double`: This one is simple. It's just a double (`1.0D`)
- `int`: (See above)
- `string`: (See above)

Well! Wasn't that fun. Now we know all about properties. As you can tell, the colour and icon properties are pretty powerful!

Now we get onto the fun stuff. How do you use this in quests? Well as we said above it's all configured in the `ftb_quests_theme.txt`

As of right now, the quest themes system supports the following values

#### Overall
- <code>background: \{<a href="#icon">icon_prop</a>\}</code>
- `extra_quest_shapes: {string}` (Please note, this is split using a `,`)
- <code>text_color: \{<a href="#color">color_prop</a>\}</code>
- <code>hover_text_color: \{<a href="#color">color_prop</a>\}</code>
- <code>disabled_text_color: \{<a href="#color">color_prop</a>\}</code>

#### Widgets

Widgets are most of the UI containers (IIRC)

- <code>widget_border: \{<a href="#color">color_prop</a>\}</code>
- <code>widget_background: \{<a href="#color">color_prop</a>\}</code>
- <code>symbol_in: \{<a href="#color">color_prop</a>\}</code>
- <code>symbol_out: \{<a href="#color">color_prop</a>\}</code>
- <code>button: \{<a href="#icon">icon_prop</a>\}</code>
- <code>panel: \{<a href="#icon">icon_prop</a>\}</code>
- <code>disabled_button: \{<a href="#icon">icon_prop</a>\}</code>
- <code>hover_button: \{<a href="#icon">icon_prop</a>\}</code>
- <code>context_menu: \{<a href="#icon">icon_prop</a>\}</code>
- <code>scroll_bar_background: \{<a href="#icon">icon_prop</a>\}</code>
- <code>scroll_bar: \{<a href="#icon">icon_prop</a>\}</code>
- <code>container_slot: \{<a href="#icon">icon_prop</a>\}</code>
- <code>text_box: \{<a href="#icon">icon_prop</a>\}</code>

#### Icons
- <code>check_icon: \{<a href="#icon">icon_prop</a>\}</code> This defaults to `builtin` - using the `CheckIcon` class in FTB Quests
- <code>add_icon: \{<a href="#icon">icon_prop</a>\}</code> This defaults to `builtin` - using a complex render but uses the `symbol_in` and `symbol_out` colours

#### Overall quest book icons
- <code>alert_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>support_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>wiki_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>wiki_url: \{<a href="#icon">icon_prop</a>\}</code>
- <code>pin_icon_on: \{<a href="#icon">icon_prop</a>\}</code>
- <code>pin_icon_off: \{<a href="#icon">icon_prop</a>\}</code>
- <code>editor_icon_on: \{<a href="#icon">icon_prop</a>\}</code>
- <code>editor_icon_off: \{<a href="#icon">icon_prop</a>\}</code>
- <code>hidden_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>link_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>save_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>settings_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>prefs_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>close_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>emergency_items_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>guide_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>modpack_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>reward_table_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>shop_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>collect_rewards_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>delete_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>reload_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>download_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>edit_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>move_up_icon: \{<a href="#icon">icon_prop</a>\}</code>
- <code>move_down_icon: \{<a href="#icon">icon_prop</a>\}</code>

#### Task specific
- <code>checkmark_task_active: \{<a href="#icon">icon_prop</a>\}</code>
- <code>checkmark_task_inactive: \{<a href="#icon">icon_prop</a>\}</code>

#### Quest window

- <code>icon: \{<a href="#icon">icon_prop</a>\}</code>
- `full_screen_quest: {int_prop}`
- <code>tasks_text_color: \{<a href="#color">color_prop</a>\}</code>
- <code>rewards_text_color: \{<a href="#color">color_prop</a>\}</code>
- <code>quest_view_background: \{<a href="#icon">icon_prop</a>\}</code>
- <code>quest_view_border: \{<a href="#color">color_prop</a>\}</code>
- <code>quest_view_title: \{<a href="#color">color_prop</a>\}</code>
- <code>quest_completed_color: \{<a href="#color">color_prop</a>\}</code>
- <code>quest_started_color: \{<a href="#color">color_prop</a>\}</code>
- <code>quest_not_started_color: \{<a href="#color">color_prop</a>\}</code>
- <code>quest_locked_color: \{<a href="#color">color_prop</a>\}</code>
- <code>dependency_line_texture: \{<a href="#icon">icon_prop</a>\}</code>
- <code>dependency_line_completed_color: \{<a href="#color">color_prop</a>\}</code>
- <code>dependency_line_uncompleted_color: \{<a href="#color">color_prop</a>\}</code>
- <code>dependency_line_requires_color: \{<a href="#color">color_prop</a>\}</code>
- <code>dependency_line_required_for_color: \{<a href="#color">color_prop</a>\}</code>
- `dependency_line_selected_speed: {double_prop}`
- `dependency_line_unselected_speed: {double_prop}`
- `dependency_line_thickness: {double_prop}`
- `quest_spacing: {double_prop}`
- `pinned_quest_size: {double_prop}`
- <code>left_arrow: \{<a href="#icon">icon_prop</a>\}</code>
- <code>right_arrow: \{<a href="#icon">icon_prop</a>\}</code>

#### Tagging

You may have noticed a `[*]` line at the very top of the `ftb_quests_theme.txt` file. Lines like this act as _filters_, limiting which quests that theming should be applied to. The default filter, a `*`, indicates that anything below this should apply to _all_ quests, so this is the fallback behaviour.

You can add more `[...]` lines if you want. Between the `[]` brackets, put either a quest ID (the long hex ID you can get by right-clicking a quest and selecting "Copy ID"), or a quest _tag_. Quest tags are just freeform strings, which you can add to quests via the "Edit" context menu action - see the "Tags" list property in the edit screen.

Example:
```
[bluequests]
quest_not_started_color: #FF0000FF

[redquests]
quest_not_started_color: #FFFF0000
```

Now, adding the "bluequests" tag to any quest will make it render blue when it hasn't yet been started, and similarly for the "redquests" tag. Every other theming property is inherited from the `[*]` defaults.

In general, it's better to use tags than literal quest ID's, just because tags are lot more flexible.

#### Custom Shapes

You can have custom quest shapes if the builtin shapes aren't sufficient for your needs. To do this:

* Pick a shape name (freeform text, keep it short and meaningful, one word) and add it to the comma-separated list in `extra_quest_shapes`
* Place three texture files for your new shape name in your resource pack, accessible as:
    * `ftbquests:textures/shapes/<shapename>/background.png` - textured background
    * `ftbquests:textures/shapes/<shapename>/outline.png` - a solid outline for the shape edge
    * `ftbquests:textures/shapes/<shapename>/shape.png` - used for masking, the same as (and exactly enclosing) the outline
    * See one of the existing texture sets in https://github.com/FTBTeam/FTB-Quests/tree/main/common/src/main/resources/assets/ftbquests/textures/shapes if unsure
* Add a translation for your shape in a lang file: `"ftbquests.quest.shape.<shapename>": "New Shape"`

### Side notes

Finally, there are a couple of side notes to this system

At any point in your `.txt` file, if you use `{{ NAME }}` in the value, it will assume you want to use the value of a different property. So this might looke like the following: `quest_completed_color: {{rewards_text_color}}`

It's important to note that these need to be the same (or compatible) property types for a replacement to be successful.

Some of the above values have mins and maxs. You should check here: https://github.com/FTBTeam/FTB-Quests/blob/main/common/src/main/java/dev/ftb/mods/ftbquests/quest/theme/property/ThemeProperties.java for those min and max values
