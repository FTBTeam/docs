---
title: About SNBT
---

SNBT, otherwise know as Stringified NBT, is a way to write NBT data in a string. We've modified and extended the existing idea of `SNBT` to allow for more flexibility and ease of use. FTB primarily uses SNBT for the following:

- Config files
- Data files
- Some internal communication between mods

## What does it look like

SNBT is very similar to JSON, but with a few key differences. The following is an example of a config file:

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
    }
}
```

## Json vs SNBT

The following is a comparison between JSON and SNBT:

| Feature | JSON | SNBT |
| --- | --- | --- |
| Comments | No | Yes |
| Trailing commas | No | Optional |
| Unquoted keys | No | Yes |
| Unquoted values | No | No |
| Single quoted strings | No | Yes |
| Specific number types | No | Yes |
| Nested Objects | Yes | Yes |
| Nested Arrays | Yes | Yes |
| Short hand value mapping | No | Yes |

## Types

SNBT supports the following types:

- Boolean
- Double
- Float
- Integer
- String
- Object (In the form of a nested SNBT object)
- Array
- ∞ (Infinity)