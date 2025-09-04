# FTB Docs

This website is built using [Docusaurus](https://docusaurus.io/)

## Installation

```
pnpm install
```

### Local Development

```
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Crafting table examples

````
```crafting table
planks_oak #logs -
planks_oak #logs -
planks_oak #planks -
result: oak_door
```

```crafting table
planks_oak planks_oak -
planks_oak planks_oak -
planks_oak planks_oak -
result: #logs,3
```

```crafting smelting
ftbsa:compressed_cobble
planks_oak
result: ftbsa:#compressed,20
```

```crafting smelting
ftbsa:compressed_cobble
planks_oak
result: ftbsa:double_compressed_cobble
```
````
