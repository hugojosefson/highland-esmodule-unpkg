import _ from 'https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts'
import { isString } from 'https://cdn.skypack.dev/@hugojosefson/highland@2.13.5-3?dts'

_([1, 2, 'three', 'four'])
  .map(n => ({n, numeric: !isString(n)}))
  .map(JSON.stringify)
  .collect()
  .map(array => array.join('\n'))
  .each(s => document.body.innerText = s)
