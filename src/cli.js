#! /usr/bin/env node

const buildSizeBadge = require('./build-size-badge');
const getGzipSize = require('./get-gzip-size');
const fs = require('node:fs');

if (process.argv.length < 4) {
  console.log('Usage: npx package-size-badge <filename> <output-path> <label> <color>');
  process.exit(1);
}

const filename = process.argv[2];
const outputPath = process.argv[3];
const label = process.argv[4] || 'gzip';
const color = process.argv[5] || 'green';

async function buildBadge(filename) {
	const size = await getGzipSize(filename);
	const badge = buildSizeBadge(label, `${size.toFixed(2)} KB`, color)
	fs.writeFileSync(outputPath, badge);
}

buildBadge(filename);
