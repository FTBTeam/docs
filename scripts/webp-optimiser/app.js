import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import {globSync} from 'glob'

// Get arguments and ensure --just-do-it is present
const args = process.argv.slice(2);
if (args.length === 0 || !args.includes('--just-do-it')) {
    console.log('This script will optimise all images in docs/**/_assets/images and replace them with webp images. It will also update all markdown documents to point to the new images.');
    console.log('To run this script, please use the --just-do-it flag');
    process.exit(1);
}

// Setup __dirname for ESM
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Find all the images from the docs/**/_assets/images folder using glob pattern
// const image = globSync(path.join(__dirname, '../../docs/**/_assets/images/**/*.{png,jpg,jpeg,gif}'))
const image = path.join(__dirname, '../../docs/mods/_assets/images/chunks/chunks-claiming.webp')

const newImages = [];

// Get the original byte size of the image
const originalSize = fs.statSync(image).size

// Skip images under 100kb
if (originalSize < 100000) {
    console.log(`Skipping ${image.substring(image.lastIndexOf("/") + 1)} as it's under 100kb`)
    process.exit(1);
}

// Get the dimensions of the image
var imageMeta = await sharp(image).metadata();
const { width, height } = imageMeta;

// Optimise and output
const fileOut = image.replace(/\.(png|jpg|jpeg|gif|webp)$/, '-new.webp');

// Is the image a gif?
const isGif = image.endsWith('.gif');
const isAnimatedGif = isGif || imageMeta.pages > 1;

const options = {};
if (isAnimatedGif) {
    options.animated = true;
    options.pages = -1;
    options.limitInputPixels = false;
}

const imageSharp = sharp(image, options);
if (width > 1920) {
    imageSharp.resize(1920, null, { fit: 'inside' })
}

// Finally output the image
let data;
if (isAnimatedGif) {
    const { paletteBitDepth, loop, delay } = imageMeta
    data = await imageSharp
        .webp({
            loop,
            delay,
            quality: 70, // 0-100
            nearLossless: false,
        })
        .toFile(fileOut)
} else {
    data = await imageSharp
        .webp({ nearLossless: true, quality: 70  })
        .toFile(fileOut)
}

const newSize = data.size;

// Compute the savings from 0 - 100%
const savings = 100 - Math.round((newSize / originalSize) * 100);
console.log(`${image.substring(image.lastIndexOf("/") + 1)} - ${originalSize} -> ${newSize} = ${savings}% savings`)

// Remove the original image
fs.unlinkSync(image);
newImages.push([image, fileOut]);
