# @hugojosefson/highland-esmodule-unpkg

This is meant to be a (hopefully) proper esmodule re-export of
[Highland.js](https://github.com/caolan/highland), loaded via
[unpkg.com](https://unpkg.com/), for use in a modern web browser.

## Installation

No install. Use it directly from your module script on a web page.

## Usage

Simply `import` this module from a script module, running inside a web
browser:

[https://unpkg.com/@hugojosefson/highland-esmodule-unpkg](https://unpkg.com/@hugojosefson/highland-esmodule-unpkg)

For a better cache experience (1 year vs 10 minutes), you may want to
specify the exact version in the URL:

[https://unpkg.com/@hugojosefson/highland-esmodule-unpkg@2.13.5-2](https://unpkg.com/@hugojosefson/highland-esmodule-unpkg@2.13.5-2)

## Usage example

Put this in a file named `index.html`:

```html
<script type="module" src="./mymodule.mjs"></script>
```

Put this in `mymodule.mjs`, in the same directory as `index.html`:

```js
import _ from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg@2.13.5-2'
import { isString } from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg@2.13.5-2'

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
[http://localhost:5000/](http://localhost:5000/). Or cheat and just go
to
[https://raw.githack.com/hugojosefson/highland-esmodule-unpkg/master/example-page.html](https://raw.githack.com/hugojosefson/highland-esmodule-unpkg/master/example-page.html)!

You should see something like this:

```
{ "n": 1, "numeric": true }
{ "n": 2, "numeric": true }
{ "n": "three", "numeric": false }
{ "n": "four", "numeric": false }
```

This should work directly in any modern browser (because they support
esmodules).
