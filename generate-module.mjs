#!/usr/bin/env node

import highland from 'highland'

const keys = Object.keys(highland).join(', ')

const output = `
import highland from './bundle.cjs'

export default highland
export const {${keys}} = highland
`

console.log(output)
