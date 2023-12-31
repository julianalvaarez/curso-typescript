

//! Crear un tipo:
//      → Siempre el nombre debe ser con Mayuscula
type Hero = {
    name: string
    age: number
}

let hero: Hero = {
    name: 'Thor',
    age: 400
}

//?                   Indica que el parametro debe ser un tipo Hero y que la funcion tambien debe retornar un tipo Hero
function createHero(hero: Hero): Hero  {
    return hero
}