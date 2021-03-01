// ESM syntax: import hello from './hello'
const random = require('./random')
const max = Number(process.argv[2])
console.log(random(max)) // random from 0 - 10
