
//!  Template Union Types: Crea tipos que tienen que cumplir una validacion

type Uid = `${string} - ${string} - ${string}`
const uid:Uid = '123 - 456 - 789'

type HexadecimalColor = `#${string}`
const color:HexadecimalColor = '#fff'