---
title: Configuration
description: Configuration options for FTB Team Bases.
sidebar_position: 2
---

## Config Files

- `config/ftbteambases-server.snbt` - server side config file
- `config/ftbteambases-client.snbt` - client side config file
- `defaultconfigs/ftbteambases/ftbteambases-server.snbt` - default server config (for modpacks, 1.20.1 only)

### Server Config Options

#### General Section

| Option                      | Type    | Default | Description                                                |
|-----------------------------|---------|---------|------------------------------------------------------------|
| `clear_player_inv_on_join`  | boolean | false   | Clear player inventory when joining a team                 |
| `heal_player_on_join`       | boolean | true    | Heal and feed player when joining a team                   |
| `clear_player_inv_on_leave` | boolean | true    | Clear player inventory when leaving a team                 |
| `team_nether_entry_point`   | boolean | true    | Enable team-specific nether portal destinations            |
| `base_separation`           | int     | 4       | Base separation in 512-block regions for shared dimensions |
| `home_cmd_permission_level` | int     | 0       | Permission level for `/ftbteambases home` command          |

#### Lobby Section

| Option                         | Type      | Default               | Description                                                                                 |
|--------------------------------|-----------|-----------------------|---------------------------------------------------------------------------------------------|
| `lobby_structure_location`     | string    | "ftbteambases:lobby"  | Resource location of the lobby NBT structure                                                |
| `additional_pregen_dimensions` | string    | ""                    | Comma-separated dimension IDs for additional pregen copying (e.g., "mymod:dim1,mymod:dim2") |
| `lobby_y_pos`                  | int       | 0                     | Y position for pasting the lobby structure (-64 to 256)                                     |
| `lobby_game_mode`              | enum      | "adventure"           | Game mode for players in the lobby (survival/creative/adventure/spectator)                  |
| `lobby_spawn_pos`              | int array | [0, 0, 0]             | Spawn position for pregen-based lobbies                                                     |
| `lobby_dimension`              | string    | "minecraft:overworld" | Dimension ID for the lobby (must be static, set before world creation)                      |
| `lobby_player_yaw`             | double    | 0.0                   | Player rotation when spawning in lobby (0-360, 0=south)                                     |

#### Worldgen Section

| Option                        | Type    | Default               | Description                                     |
|-------------------------------|---------|-----------------------|-------------------------------------------------|
| `chunk_generator`             | enum    | see below             | Chunk generator type                            |
| `single_biome_id`             | string  | ""                    | Force single biome (e.g., "minecraft:the_void") |
| `biome_source_from_dimension` | string  | ""                    | Copy biome source from existing dimension       |
| `feature_gen`                 | enum    | "default"             | Feature generation (default/never/always)       |
| `noise_settings`              | string  | "minecraft:overworld" | Noise settings resource location                |
| `entities_in_start_structure` | boolean | true                  | Include entities from start structure NBT       |

#### Nether Section

| Option                             | Type    | Default | Description                                          |
|------------------------------------|---------|---------|------------------------------------------------------|
| `allow_nether_portals`             | boolean | true    | Allow nether portal construction in team dimensions  |
| `team_specific_nether_entry_point` | boolean | true    | Use team-specific nether coordinates                 |
| `min_dist_from_origin`             | int     | 1000    | Minimum distance from origin for nether entry points |
| `max_dist_from_origin`             | int     | 25000   | Maximum distance from origin for nether entry points |
| `use_custom_portal_y`              | boolean | false   | Use custom Y position for nether entry               |
| `portal_y_pos`                     | int     | 0       | Custom Y position for nether entry (if enabled)      |

#### Autoclaiming Section (FTB Chunks required)

| Option               | Type      | Default   | Description                                         |
|----------------------|-----------|-----------|-----------------------------------------------------|
| `lobby_radius`       | int       | 0         | Radius in chunks for lobby autoclaim (0 = disabled) |
| `lobby_shape`        | enum      | "square"  | Shape to autoclaim (square/circle)                  |
| `server_team_name`   | string    | "Lobby"   | Display name for server team on FTB Chunks map      |
| `lobby_claim_color`  | string    | "#FF40FF" | Server team color (hex or color name)               |
| `lobby_claim_center` | int array | [0, 0]    | X/Z chunk position for claim center                 |

### Client Config Options

#### General Section

| Option          | Type    | Default | Description                                      |
|-----------------|---------|---------|--------------------------------------------------|
| `hide_void_fog` | boolean | true    | Suppress void fog in void dimensions             |
| `void_horizon`  | double  | 0.0     | Y level where sky turns black in void dimensions |

#### Advanced Section

| Option          | Type    | Default | Description                          |
|-----------------|---------|---------|--------------------------------------|
| `show_dev_mode` | boolean | false   | Show dev_mode bases in selection GUI |
