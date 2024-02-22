import { gql } from "@apollo/client"

const getBooksQuery = gql`
{
    books{
        id,
        name,
        genre
    }
}`

const getAuthorsQuery = gql`
{
    authors{
        id,
        name,
        age
    }
}
`

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId){
        id,
        name
    }
}
`

const getBookQuery = gql`
query($id: ID!){
    book(id:$id){
        id,
        name,
        genre,
        author{
            id,
            name,
            age,
            books{
                name,
                id
            }
        }
    }
}
`

export {
    getBooksQuery,
    getAuthorsQuery,
    addBookMutation,
    getBookQuery
}