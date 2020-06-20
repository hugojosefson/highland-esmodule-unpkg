# @hugojosefson/highland-esmodule-unpkg

This is meant to be a proper(?) esmodule re-export of
[Highland.js](https://github.com/caolan/highland), loaded via
[unpkg.com](https://unpkg.com/), for use in a modern web browser.

## Installation

No install. Use it directly from your module script on a web page.

## Usage

Simply `import` the module
[https://unpkg.com/@hugojosefson/highland-esmodule-unpkg](https://unpkg.com/@hugojosefson/highland-esmodule-unpkg)
in a script module, running inside a web browser.

## Usage example

Put this in a file named `index.html`:

```html
<script type="module" src="./mymodule.mjs"></script>
```

Put this in `mymodule.mjs`, in the same directory as `index.html`:

```js
import _ from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg'
import { isString } from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg'

_([1, 2, 'three', 'four'])
  .map(n => ({n, numeric: !isString(n)}))
  .map(JSON.stringify)
  .collect()
  .map(array => array.join('\n'))
  .each(s => document.body.innerText = s)
```

Serve both files over HTTP (or HTTPS):

```
npx serve
```

Browse to the URL provided by `serve`, probably
[http://localhost:5000/](http://localhost:5000/). You should see something
like this:

```
{ "n": 1, "numeric": true }
{ "n": 2, "numeric": true }
{ "n": "three", "numeric": false }
{ "n": "four", "numeric": false }
```

This should work directly in any modern browser (because they support
esmodules).
