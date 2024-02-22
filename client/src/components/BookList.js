import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/Queries";
import { useState } from "react";
import BookDetails from "./BookDetails";

const BookList = () => {
    const [selected, setSelected]=useState(null);

    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <ol>
                {data.books.map(book => {
                    return (
                        <li key={book.id} onClick={()=>setSelected(book.id)}>{book.name}</li>
                    )
                })}
            </ol>

            <BookDetails props={selected} />
        </div>
    )
}

export default BookList;