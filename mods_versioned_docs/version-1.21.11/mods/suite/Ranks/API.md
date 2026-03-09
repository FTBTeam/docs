---
title: API
sidebar_position: 5
---

This page covers basic API usage for mods who wish to use FTB Ranks to query nodes or add their own conditions.

The top-level Java class for all API usage is [FTBRanksAPI](https://github.com/FTBTeam/FTB-Ranks/blob/1.20.1/main/common/src/main/java/dev/ftb/mods/ftbranks/api/FTBRanksAPI.java).

### Querying Nodes
A very simple example of querying a node:

```java
public int getInt(ServerPlayer player, int def, String node) {
  return Math.max(FTBRanksAPI.getPermissionValue(player, node).asInteger().orElse(def), 0);
}
```

This defines a simple method to retrieve an integer node value from FTB Ranks, with a default if the node isn't present. Example usage:

```java
int cooldown = getInt(player, "ftbessentials.home.cooldown", 5);
```

In general, any method or class in the `dev.ftb.mods.ftbranks.api` package is suitable for API usage, and all API classes have comprehensive Javadocs. It's not advised to use any classes or methods outside that package, as they may change without warning in a later FTB Ranks release.

### Registering Custom Conditions

Modders can register their own custom conditions by listening to the `RegisterConditionsEvent`. This is an Architectury event, since FTB Ranks is a cross-platform mod. Example:

```java
// in your mod constructor
RankEvent.REGISTER_CONDITIONS.register(MyModClass::registerConditions);

// later on
private static void registerConditions(RegisterConditionsEvent event) {
  event.register("my_simple", (rank, nbt) -> new CustomCondition());
  event.register("my_advanced", (rank, nbt) -> new AdvancedCustomCondition(nbt));
}

// elsewhere...
// note that simple conditions can implement RankCondition.Simple and don't need to do any serialization/deserialization
public class CustomCondition implements RankCondition {
  @Override
  public String getType() {
      return "my_simple";
  }

  @Override
  public boolean isRankActive(ServerPlayer player) {
      return false;  // adjust depending on what your condition is checking for
  }

  // other methods to be implemented
}
```
