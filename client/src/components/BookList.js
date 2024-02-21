import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/Queries";

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <ol>
                {data.books.map(book => {
                    return (
                        <li key={book.id}>{book.name}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default BookList;