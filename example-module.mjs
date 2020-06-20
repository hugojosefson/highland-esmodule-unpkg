import _ from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg'
import { isString } from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg'

_([1, 2, 'three', 'four'])
  .map(n => ({n, numeric: !isString(n)}))
  .map(JSON.stringify)
  .collect()
  .map(array => array.join('\n'))
  .each(s => document.body.innerText = s)
