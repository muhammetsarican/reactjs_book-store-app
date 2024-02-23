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

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId){
        id,
        name
    }
}
`

const addAuthorMutation=gql`
mutation($name:String!, $age:Int!){
    addAuthor(name:$name, age:$age){
        name,
        age
    }
}
`

export {
    getBooksQuery,
    getAuthorsQuery,
    getBookQuery,
    addBookMutation,
    addAuthorMutation
}