const fs = require('fs').promises;
const zlib = require('zlib');
const util = require('util');

const gzip = util.promisify(zlib.gzip);

async function getGzipSize(filename) {
	// Read the file
	const fileBuffer = await fs.readFile(filename);

	// Compress the file
	const compressedBuffer = await gzip(fileBuffer);

	// Write the compressed file
	const compressedFilename = filename + '.gz';
	await fs.writeFile(compressedFilename, compressedBuffer);

	// Get the file size
	const stats = await fs.stat(compressedFilename);
	const fileSizeInKB = stats.size / 1024;

	return fileSizeInKB;
}

module.exports = getGzipSize;
