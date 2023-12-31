

//! Type Indexing: Acceder a propiedades dentro de tipos

type NewHero = {
    name: string
    adress: {
        city: string
        planet: string
    }
}

//* Como acceder a adress?
const adressHero:NewHero['adress'] = {
    city: 'Madrid',
    planet: 'Tierra'
}
const nameHero:NewHero['name'] = 'Thor'

//! Recuperar tipos de una funcion:

function createAdress() {
    return {
        city: 'Madrid',
        planet: 'Tierra'
    }
}

type Adress = ReturnType<typeof createAdress>
//?   Recupera lo que retorna la funcion de createAdress y lo establece como el tipo