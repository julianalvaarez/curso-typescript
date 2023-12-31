

//! Intersection Types: Une 2 tipos en otro tipo

type BasicType = {
    name: string
    age: number
}

type OptionalTypes = {
    id?: string
    fights?: number
}

type GranHero = BasicType & OptionalTypes
//?      → Obtiene los 2 tipos