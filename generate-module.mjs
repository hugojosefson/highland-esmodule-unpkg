#!/usr/bin/env node

import highland from 'highland'

const keys = Object.keys(highland).join(', ')

const output = 
`const oldHighland = window.highland
import 'https://unpkg.com/highland@2.13.5/dist/highland.min.js'

const { highland } = window

export default highland
export const {${keys}} = highland

window.highland = oldHighland
`

console.log(output)
