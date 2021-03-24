import highland from 'highland'
import highlandPkg from 'highland/package.json'

const keys = Object.keys(highland).join(', ')
const output =
`const noConflict = window.highland

import 'https://cdn.skypack.dev/highland@${highlandPkg.version}'
const { highland } = window

export default highland
export const {${keys}} = highland

window.highland = noConflict
`

console.log(output)
