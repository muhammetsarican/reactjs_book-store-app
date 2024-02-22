import { useSuspenseQuery } from "@apollo/client";
import { getBookQuery } from "../queries/Queries";

const BookItem = (id) => {
    const { data } = useSuspenseQuery(getBookQuery, {
        variables: id
    });
console.log(data);
    return (
    <div>
        <h2>{data.book.name}</h2>
        <p>{data.book.genre}</p>
        <p>{data.book.author.name}</p>
        <p>The other books written by the Author</p>
        <ol>
        {data.book.author.books.map((book)=>(
            <li key={book.id}>{book.name}</li>
        ))}
        </ol>
    </div>)
}

export default BookItem;