---
title: Modder API
---

FTB Ultimine fires a few [Architectury](https://www.curseforge.com/minecraft/mc-mods/architectury-api) events intended to make it easy for modders to write plugins and extension to FTB Ultimine. These events, and the related interfaces and systems are all described here.

:::note

Any code in the `dev.ftb.mods.ftbultimine.api` package is public API, and we will make every effort to keep this API stable and documented. Any code outside the `api` package is subject to change without notice - please try to avoid using this code directly. [Contact us](https://go.ftb.team/support-mod-issues) if you want to create an addon mod that the existing API does not cover, and we will try to help.

:::

### Pulling in the API

Add the following to the `repositories` section of your `build.gradle` file:

```
maven {
  url "https://maven.ftb.dev/releases"
  content {
    includeGroup "dev.ftb.mods"
  }
}
```

And in the `dependencies` section:

#### For NeoGradle / ModDevGradle
```
compileOnly("dev.ftb.mods:ftb-ultimine:${ftb_ultimine_version}")
# if desired
runtimeOnly("dev.ftb.mods:ftb-ultimine-neoforge:${ftb_ultimine_version}")
```

#### For Loom / Architectury Loom
```
# if using a multi-arch project, add this to your common/build.gradle
modCompileOnlyApi("dev.ftb.mods:ftb-ultimine:${ftb_ultimine_version}")
# or add these to your neoforge and/or fabric build.gradle files
modApi("dev.ftb.mods:ftb-ultimine-neoforge:${ftb_ultimine_version}")
modApi("dev.ftb.mods:ftb-ultimine-fabric:${ftb_ultimine_version}")
```

You can get the most recent version of the mod by browsing to https://maven.ftb.dev/#/releases/dev/ftb/mods/ftb-ultimine

### Custom right-click handlers

This provides for custom behaviour when a block is right-clicked and the Ultimine key is currently pressed. Look at code in the `dev.ftb.mods.ftbultimine.rightclick` package for examples (builtin examples include farmland tilling, path flattening and log stripping).

In your mod constructor, register an instance of a class which implements the `RightClickHandler` interface:
```java
RegisterRightClickHandlerEvent.REGISTER.register(dispatcher -> dispatcher.registerHandler(MyHandler.INSTANCE));
```

Example handler:
```java
public enum MyHandler implements RightClickHandler {
    INSTANCE;

    @Override
    public int handleRightClickBlock(ShapeContext shapeContext, InteractionHand hand, Collection<BlockPos> positions) {
        // do the work you need here
        return numberOfBlocksAffected;
    }
}
```

### Custom crop types

This allows for detection of custom crops which don't behave like vanilla crops. Builtin support is included for Agricraft (see the `AgriCraftCropLikeHandler` class).

In your mod constructor, register an instance of a class which implements `CropLikeHandler`:

```java
RegisterCropLikeEvent.REGISTER.register(registry -> registry.register(MyHandler.INSTANCE));
```

See `VanillaCropLikeHandler` or `AgriCraftCropLikeHandler` for examples.

### Custom ultimining restrictions

This can be used to restrict players' ability to ultimine based on criteria of your choosing.

```java
RegisterRestrictionHandlerEvent.REGISTER.register(registry -> registry.register(MyHandler.INSTANCE));
```

Example to require player to be holding a specific item:
```java
public enum MyHandler implements RestrictionHandler {
    @Override
    public boolean canUltimine(Player player) {
        return player.getMainHandItem().getItem() instanceof SomeCustomItem;
    }
}
```

### Custom ultimining shapes

This can be used to register custom ultimining shapes.

In your mod constructor, register an instance of the `Shape` interface:

```java
RegisterShapeEvent.REGISTER.register(registry -> registry.register(MyShape.INSTANCE));
```

You will need to implement the `getName()` method to return a unique ID for your custom shape, and the `getBlocks(ShapeContext)` method to return a list of the block positions included in the shape. The `ShapeContext` object passed to the latter method contains various information you can use to determine the shape; see the javadocs for that class for more detail.

### Custom block-break handlers

In most cases, the default break strategy (simply to break the block and produce its drops) is fine. However, there may be a need at times when breaking blocks to have a little more control. An example is EnderIO conduit bundles, where you might want to break all the connected item conduits while leaving other parts of the bundle alone. This can be achieved with a custom block-break handler.

To register a custom block-break handler:

```java
RegisterBlockBreakHandlerEvent.REGISTER.register(registry -> registry.register(MyBlockBreakHandler.INSTANCE));
```

```java
enum MyBlockBreakHandler implements BlockBreakHandler {
  INSTANCE;

  @Override
  public Result breakBlock(Player player, BlockPos pos, BlockState state, Shape shape, BlockHitResult hitResult) {
    // check if it's your block, and if not return PASS asap
    if (!isMyBlock(state)) {
       return Result.PASS;
    }
    // do your custom block break logic here, return SUCCESS or FAIL as appopriate
    return Result.SUCCESS;
  }
}
```

### Custom block-selection handlers

Block selection determines which blocks will be included in the next ultimining operation, and is shown by the white outline on blocks when the ultimine key is held. By default, this is controlled by the current ultimining shape (and depending on the shape, the currently focused block). For the `Shapeless` shape, this can be customised; using EnderIO conduits again as an example, you might want to only select blocks which have the same facade as the focused block.

To register a custom block-selection handler:

```java
RegisterBlockSelectionHandlerEvent.REGISTER.register(registry -> registry.register(MySelectionHandler.INSTANCE));
```

```java
public enum MySelectionHandler implements BlockSelectionHandler {
  INSTANCE;

  @Override
  public Result customSelectionCheck(Player player, BlockPos origPos, BlockPos pos, BlockState origState, BlockState state) {
     // Called for every block in the current shape; keep the checks quick and efficient!
      
     // check if it's your block first, and return Result.PASS immediately if it's not

     // then check for block equivalence (e.g. do both blocks have the same facade?)
     // return Result.TRUE or Result.FALSE as appropriate
     return Result.TRUE;
  }
}
```
