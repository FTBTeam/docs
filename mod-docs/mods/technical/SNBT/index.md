---
title: SNBT
---

SNBT, otherwise know as Stringified NBT, is a way to write [NBT data](https://minecraft.fandom.com/wiki/NBT_format) in a string. We've modified and extended the existing idea of `SNBT` as used in vanilla Minecraft to allow for more flexibility and ease of use. FTB primarily uses SNBT for the following:

- Config files
- Data files
- Some internal communication between mods

FTB's implementation of SNBT is pretty much compatible with [vanilla SNBT](https://minecraft.fandom.com/wiki/NBT_format#SNBT_format), although FTB SNBT supports multiline structures, and does not require commas to delimit objects in such multiline structures.

## Why SNBT?

Why don't we just use Forge's night-config system like any other mod does? Or one of the multiple config libraries for Fabric? Our mods are cross-platform, and there isn't one single config mod that would work everywhere. So, we have our own system, as part of FTB Library. As for why SNBT in particular; it's based on an existing vanilla format, and the config files it uses are easily human-readable, and close enough to the familiar JSON format to be easy to pick up, while also offering a few improvements over JSON.

## What does it look like

SNBT is very similar to JSON, with a few key differences. The following is an example of a config file:

```jsonc
{
    # Boolean test 3
    # Default: false
    "test 3": false,

    # Default: true
    test_1: true

    # Boolean test 2
    # Default: true
    test_2: true

    # Group comment test
    # Line 2
    sub_test: {
        # Default: false
        boolean: false

        # Default: 0.5d
        # Range: 0.0d ~ 1.0d
        double: 1.0d

        # Default: 50
        # Range: 30 ~ +∞
        int: 30

        # Default: "hello"
        string: "hello"

        # Default: [ 1, 2, 3 ]
        list: [ 1, 2, 3 ]
    }
}
```

## Json vs SNBT

The following is a comparison between JSON and SNBT:

| Feature | JSON | SNBT | Notes |
| --- | --- | --- | --- |
| Comments | No | Yes | Start comments with a `#` symbol |
| Trailing commas | No | Optional | Commas are not optional in multi-line sections; they are required if multiple elements are on the same line, e.g. `a: { b: 1, c: 2}` |
| Unquoted keys | No | Yes | Keys must be quoted if they contain whitespace, e.g. `{ "my key": 3 }` |
| Unquoted values | No | No | Values must be quoted if they contain whitespace, e.g. `{ key: "some value" }` |
| Single quoted strings | No | Yes | |
| Specific number types | No | Yes | See Types section below for accepted numeric suffixes |
| Nested Objects | Yes | Yes | E.g. `a: { b: [ 1, 2, 3 ], c: { x: 10, y: 20 } }` |
| Nested Arrays | Yes | Yes | |
| Short hand value mapping | No | Yes | |

## Types

SNBT supports the following types (see [Vanilla documentation](https://minecraft.fandom.com/wiki/NBT_format#Data_types) for more info):

| Type | Notes |
| --- | --- |
| Boolean | Use unquoted `true` and `false` values (if quoted they are treated as String) |
| Double | Suffix the numeric value with `d` or `D`, e.g. `123.45D`. Exponential notation accepted, e.g. `1.23e-6d` |
| Float | Suffix the numeric value with `f` or `F`, e.g. `123.45F`. Exponential notation accepted. |
| Long | 64-bit value; suffix with `l` or `L` |
| Integer | 32-bit value; no suffix required, just a number |
| Short | 16-bit value; suffix with `s` or `S` |
| Byte | 8-bit value; suffix with `b` or `B` |
| String | String values are single-or double quoted |
| Object | (In the form of a nested SNBT object) |
| Array | Arrays are surrounded with square brackets, e.g. `[1, 2, 3 ]` |
| ∞ (Infinity) | Maps to Java `Double.POSITIVE_INFINITY`. Variants include `-∞`, `∞F` and `-∞F` for negative and float equivalents. |
| NaN (Not a Number) | Maps to Java `Double.NaN`. Also, `NanF` maps to `Float.NaN` |
