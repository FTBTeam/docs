# Image Optimiser

A realtively simple system that will go over the documentation and optimise any of the images within the documentation.

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [pnpm](https://pnpm.js.org/en/installation)

## Running

> ! Please consider this action destructive as it will overwrite image paths in the documentation! Please ensure you have pushed any changes to the documentation before running this script.

```bash
node app.js --just-do-it
```

If `--just-do-it` is not provided, the script will not do anything. This is just to ensure you are aware of the destructive nature of this script.

## How it works

- We find all images that are not `webp` format
- We iterate over each image and optimise it if the image is over `100kb`
- We then convert the image to `webp` format
- We downsize the image to a max width of `1920px` but keep the aspect ratio
- We then replace the image in the documentation with the new `webp` image

## How often should I run this?

Rarely. This script is only meant to be run after a PR has been merged into the documentation. This is because the script will overwrite the image paths in the documentation and create messy PRs.
