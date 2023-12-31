
//! TYPE GUARD: Función que ayuda a determinar si una variable o un objeto es de un tipo o interface específico en tiempo de ejecución


interface Mario {
    name: string
    correr: () => void
}

interface Sonic {
    name: string
    saltar: () => void
}

type Personaje = Mario | Sonic


//?                                           → Indica que este type guard es para comprobar si personaje es un Sonic.
function checkIsSonic(personaje:Personaje): personaje is Sonic {
//?         Consideremos a personaje como si fuera de tipo Sonic. Esto nos permite acceder a las propiedades de Sonic en personaje.
    return (personaje as Sonic).saltar != undefined
    // Si es distinto a undefined, quiere decir que personaje es Sonic
}

function jugar(personaje:Personaje) {
    if(checkIsSonic(personaje)) {
        personaje.saltar()
    }
}