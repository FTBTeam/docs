export type Weights = {
    blocks: Array<{
        name: string
        meshes: Array<{
            name: string
            totalWeight: number
            drops: Array<{
                item: string
                weight: number
                percent: number
            }>
        }>
    }>
}


const response = await fetch('https://pste.me/v1/paste/hVLdbeCcPoc/raw');
const data = await response.json() as Weights;

// Get all meshes and store them in a record grouped by mesh and block
const meshes: Record<string, Record<string, Weights['blocks'][0]['meshes'][0]>> = {};
for (const block of data.blocks) {
    for (const mesh of block.meshes) {
        if (!meshes[mesh.name]) {
            meshes[mesh.name] = {};
        }
        meshes[mesh.name][block.name] = mesh;
    }
}

const blockOrder = [
    'dirt',
    'dust',
    'gravel',
    'sand',
    'red_sand',
    'soul_sand',
    'crushed_netherrack',
    'crushed_endstone',
    'crushed_basalt'
];

for (const meshName in meshes) {
    console.log(`## ${formatItemName(meshName)}`);
    for (const blockName of blockOrder) {
        const mesh = meshes[meshName][blockName];
        console.log(`### ${formatItemName(blockName)}\n`);
        console.log(`| **_Item_**         | **_Drop Chance_** |`);
        console.log(`|--------------------|-------------------|`);
        for (const drop of mesh.drops) {
            console.log(`| **${formatItemName(drop.item)}** | ${drop.percent.toFixed(2)}% |`);
        }
        console.log('\n---\n');
    }
}

function formatItemName(name: string): string {
    return name.replace(/(minecraft|ftb_sieves|ftb_ma):/g, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}


// for (const block of data.blocks){
//     for (const mesh of block.meshes){
//         console.log(`## ${mesh.name}`)
//         console.log(`### ${block.name}`);
//         console.log(`| **_Item_**         | **_Drop Chance_** |`)
//         console.log(`|--------------------|-------------------|`)
//         for (const drop of mesh.drops){
//             console.log(`| ${formatItemName(drop.item)} | ${drop.percent}% |`)
//         }
//         console.log('\n\n');
//     }
// }
//
