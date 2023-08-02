const { makeBadge } = require('badge-maker')

function buildSizeBadge(label, size, color, optionsJSON="{}") {
	const options = JSON.parse(optionsJSON);
	const svg = makeBadge({
		label, message: size, color, ...options
	})

	return svg;
}

module.exports = buildSizeBadge;
