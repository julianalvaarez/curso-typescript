

//! Optional Properties: Indicar que propiedades son opcionales al crear un tipo
// Para indicar que la propiedad es opcional se pone un ? luego del nombre
type HeroOptional = {
    id?: number
    name: string
    age: number
}

const heroOptional: HeroOptional = {
    name: 'Thor',
    age: 400
}

function createHeroOptional(heroOptional:HeroOptional): HeroOptional {
   const {name, age} = heroOptional
   return { name, age, id: 3 }
                        // → Se crea el id que es opcional
}

const thor = createHeroOptional(heroOptional)

thor.id //? → Devolveria 3