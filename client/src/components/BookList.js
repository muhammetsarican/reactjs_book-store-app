import { Component } from "react";
import { gql, useQuery } from "@apollo/client";
import { graphql } from "graphql";

const getBooksQuery = gql`
{
    books{
        name,
        genre
    }
}`

const BookList=() => {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    console.log(this.props, data);
    return (
        <div>
            <ol>
                <li>Book name</li>
            </ol>
        </div>
    )
}

export default BookList;