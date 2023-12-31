
// Fetching de datos con TS
//! QuickType: Da los tipos de una respuesta a una api

export type JSONPlaceHolder = {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

const URL_API = 'https://jsonplaceholder.typicode.com/posts'

const response = await fetch(URL_API)

                                //! Asi se tipa las respuestas de una API
const data = [await response.json() as JSONPlaceHolder]

data.map(post => {
    return {
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
    }
})