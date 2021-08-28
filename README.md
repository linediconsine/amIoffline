# am I offline ?

[![Build Status](https://travis-ci.org/linediconsine/amIoffline.svg?branch=master)](https://travis-ci.org/linediconsine/amIoffline)
[![License](https://badgen.net/github/license/linediconsine/amIoffline)](./LICENSE)
[![Library minified size](https://badgen.net/bundlephobia/min/amIoffline)](https://bundlephobia.com/result?p=amIoffline)
[![Library minified + gzipped size](https://badgen.net/bundlephobia/minzip/amIoffline)](https://bundlephobia.com/result?p=amIoffline)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install amioffline --save

# For Yarn, use the command below.
yarn add amioffline
```

### Installation from CDN

This module has an UMD bundle available through JSDelivr and Unpkg CDNs.

```html

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/gh/linediconsine/amIoffline/dist/index.mjs"></script>

<script>
  import aio  from "./aio.js";


  aio.whenOffline(alert('OFFLINE'))
</script>
```

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
