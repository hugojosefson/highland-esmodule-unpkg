#!/bin/sh

set -e

cp node_modules/@types/highland/index.d.ts .
replace '/// <reference types="node" />' 'import { EventEmitter } from "https://deno.land/std@0.91.0/node/events.ts";' index.d.ts
replace 'NodeJS.' '' index.d.ts
replace 'ReadWriteStream' 'ReadableStream & WritableStream' index.d.ts
