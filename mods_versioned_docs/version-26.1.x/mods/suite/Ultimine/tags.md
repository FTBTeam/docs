---
title: Block and Item Tags
---

## Block Tags

* `ftbultimine:excluded_blocks` - blocks in this tag may never be ultimined
* `ftbultimine:block_whitelist` - if this tag is non-empty, then _only_ blocks in this tag may be ultimined

## Item Tags

* `ftbultimine:excluded_tools` - items in this tag can't be used for ultimining (applies to main hand slot)
* `ftbultimine:excluded_tools/strict` - items in this tag can't be used for ultimining (applies to main _and_ offhand slots)
* `ftbultimine:included_tools` - if `require_tool` is true in server config, by default only "tool" items can be used (tiered items with durability); this can be used to allow extra items

