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
const images = globSync(path.join(__dirname, '../../docs/**/_assets/images/*.{png,jpg,jpeg}'))

// Get all the markdown documents :D
const documents = globSync(path.join(__dirname, '../../docs/**/*.md'))

console.log(`Found ${documents.length} in docs/`);

const newImages = [];
// Loop through each image
for (const image of images) {
    // Get the original byte size of the image
    const originalSize = fs.statSync(image).size

    // Skip images under 100kb
    if (originalSize < 100000) {
        console.log(`Skipping ${image.substring(image.lastIndexOf("/") + 1)} as it's under 100kb`)
        continue;
    }

    // Get the dimensions of the image
    const { width, height } = await sharp(image).metadata();

    // Optimise and output
    const fileOut = image.replace(/\.(png|jpg|jpeg)$/, '.webp');

    const imageSharp = sharp(image);
    if (width > 1920) {
        imageSharp.resize(1920, null, { fit: 'inside' })
    }

    // Finally output the image
    const data = await imageSharp
        .webp({ nearLossless: true, quality: 70  })
        .toFile(fileOut)

    const newSize = data.size;

    // Compute the savings from 0 - 100%
    const savings = 100 - Math.round((newSize / originalSize) * 100);
    console.log(`${image.substring(image.lastIndexOf("/") + 1)} - ${originalSize} -> ${newSize} = ${savings}% savings`)

    // Remove the original image
    fs.unlinkSync(image);
    newImages.push([image, fileOut]);
}

// Run over each document and find old image references and replace them with the new ones
for (const document of documents) {
    let content = fs.readFileSync(document, 'utf8');

    for (const image of newImages) {
        const [oldImage, newImage] = image;

        // Normalise the path, let's chop the url at _assets/images
        const oldImageNormalised = oldImage.substring(oldImage.indexOf('_assets/images'));

        // Normalize the new image path
        const newImageNormalised = newImage.substring(newImage.indexOf('_assets/images'));

        content = content.replaceAll(oldImageNormalised, newImageNormalised);
    }

    fs.writeFileSync(document, content);
}
