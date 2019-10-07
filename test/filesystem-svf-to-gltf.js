/*
 * Example: converting an SVF from local file system
 * Usage:
 *     node filesystem-svf-to-gltf.js <path to svf file> <path to output folder>
 */

const { SvfReader, GltfWriter } = require('..');

async function run (filepath, outputDir) {
    const reader = await SvfReader.FromFileSystem(filepath);
    const svf = await reader.read();
    const writer = new GltfWriter();
    writer.write(svf, outputDir);
}

run(process.argv[2], process.argv[3]);