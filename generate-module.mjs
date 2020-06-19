#!/usr/bin/env node

import _ from 'highland'

const keys = Object.keys(_).join(', ')

const output = `
import _ from 'highland'

const {${keys}} = _

export default _
export {${keys}}
`

console.log(output)
