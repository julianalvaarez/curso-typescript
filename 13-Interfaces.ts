

//! INTERFACES: Son como moldes que especifican qué propiedades debe tener un objeto y qué tipos de datos deben tener esas propiedades. Las interfaces se utilizan para asegurarse de que los objetos cumplan con ciertos requisitos y estructuras

interface HeroNormal {
    id:number
    name: string
    age: number
    saludo?: () => void
}

//! ANIDAR INTERFACES: 

interface Heroes {
    totalHeroes: number
    heroes: (HeroNormal | BestHero)[]  // --→  Indica que es un array de la interfaz HeroNormal o de BestHero
}

const heroes: Heroes = {
    totalHeroes: 45,
    heroes: [
        {
            id: 1,
            name: 'Batman',
            age: 40
        }
    ]
}

//! EXTENDER INTERFACES: Copiar propiedades de una interfaz para agregarlo en otra
                    // → Copia todas las propiedades de la interfaz HeroNormal
interface BestHero extends HeroNormal {
    power: number
}


//! INDICAR FUNCIONES EN INTERFACES
interface Options {
    add: (product: string) => void
    delete: (id: number) => void
}