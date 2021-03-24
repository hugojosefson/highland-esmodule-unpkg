# @hugojosefson/highland

This is meant to be a (hopefully) proper esmodule re-export of
[Highland.js](https://github.com/caolan/highland), loaded via
[skypack.dev](https://skypack.dev/), for use in a modern web browser or
[Deno](https://deno.land).

## Installation

No install. Use it directly from your module script on a web page, or with Deno.

## Usage

Simply `import` this module from a script module, running inside a web
browser:

[https://cdn.skypack.dev/@hugojosefson/highland?dts](https://cdn.skypack.dev/@hugojosefson/highland?dts)

To know which version you are using, you should
specify the exact version in the URL:

[https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts](https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts)

For a better cache experience (1 year vs 5 minutes) in production, you can open the import URL in a web browser, to see what that version's pinned URL is. Then use that instead.

## Usage example

### Deno

Put this in a file `mymodule.ts`:

```typescript
import _ from 'https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts'
import { isString } from 'https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts'

_([1, 2, 'three', 'four'])
  .map(n => ({n, numeric: !isString(n)}))
  .map(JSON.stringify)
  .collect()
  .map(array => array.join('\n'))
  .each(s => console.log(s))
```

Run it with Deno:

```sh
deno run mymodule.ts
```

You should see something like this:

```
{ "n": 1, "numeric": true }
{ "n": 2, "numeric": true }
{ "n": "three", "numeric": false }
{ "n": "four", "numeric": false }
```

### Web browser

Put this in a file named `index.html`:

```html
<script type="module" src="./mymodule.mjs"></script>
```

Put this in `mymodule.mjs`, in the same directory as `index.html`:

```js
import _ from 'https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts'
import { isString } from 'https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts'

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
[https://raw.githack.com/hugojosefson/highland/main/example-page.html](https://raw.githack.com/hugojosefson/highland/main/example-page.html)!

You should see something like this:

```
{ "n": 1, "numeric": true }
{ "n": 2, "numeric": true }
{ "n": "three", "numeric": false }
{ "n": "four", "numeric": false }
```

This should work directly in any modern browser (because they support
esmodules).
