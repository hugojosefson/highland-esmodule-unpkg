import highland from 'highland'
import pkg from 'highland/package.json'

const keys = Object.keys(highland).join(', ')
const output =
`const noConflict = window.highland

import 'https://unpkg.com/highland@${pkg.version}/dist/highland.min.js'
const { highland } = window
export default highland
export const {${keys}} = highland

window.highland = noConflict
`

console.log(output)
