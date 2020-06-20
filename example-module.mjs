import _ from './index.mjs'
import { isString } from './index.mjs'

// import _ from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg?module'
// import { isString } from 'https://unpkg.com/@hugojosefson/highland-esmodule-unpkg?module'

_([1, 2, 'three', 'four'])
  .map(n => ({n, numeric: !isString(n)}))
  .map(JSON.stringify)
  .collect()
  .map(array => array.join('\n'))
  .each(s => document.body.innerText = s)
