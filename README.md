# package-size-badge
CLI tool for making package badges based on gzipped resource size.

## Why?

I originally thought this would be useful, only to later find that the following tools also exist!
* https://bundlephobia.com/
* https://shields.io/badges/npm-bundle-size

This repo still exists, if people would like to copy or fork its source code, but for the most part, you should check those options out and see if they would work for you!

## API

```sh
npx package-size-badge <filename> <output-path> <label> <color>
```

E.g.
```sh
npx package-size-badge ./tram-lite.js gzip-tram-lite.svg minified blue
```

Results in <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="108" height="20" role="img" aria-label="minified: 3.28 KB"><title>minified: 3.28 KB</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="108" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="53" height="20" fill="#555"/><rect x="53" width="55" height="20" fill="#007ec6"/><rect width="108" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="275" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">minified</text><text x="275" y="140" transform="scale(.1)" fill="#fff" textLength="430">minified</text><text aria-hidden="true" x="795" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="450">3.28 KB</text><text x="795" y="140" transform="scale(.1)" fill="#fff" textLength="450">3.28 KB</text></g></svg>
