
//* Como tipar parametros?
//                      → Obliga que el parametro sea un string
function saludar(name:string) {
    console.log(name)
}
saludar('Juan')


//* Como tipar OBJETOS como parametros?
function saludarObjeto({name, age}: {name:  string, age: number}) {
    console.log(name, age)
}
saludarObjeto({name: 'Juan', age: 40})

//* Como tipar lo que retorna una funcion?
function saludarReturn(name: string) :string {
    return `Hola ${name}`
}
console.log(saludarReturn)


//* Como tipar funciones como parametro?
//! VOID: Indica que es una funcion que puede no retornar nada o retornar cualquier cosa. No nos importa lo que retorne
                    //? → Asi se tipa una funcion usando void porque no importa lo que haga esa funcion
function sayHiFunction(fn:(name:string) => void) {
    fn('Juan')
}

function sayHi(name:string) {
    return name
}

sayHiFunction(sayHi)

//!   Never: Indica que la funcion no devuelve nada
function throwError(message:string) {
    throw new Error(message)
}
