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

export {
    getBooksQuery,
    getAuthorsQuery
}