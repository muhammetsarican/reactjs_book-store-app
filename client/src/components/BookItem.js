import { useSuspenseQuery } from "@apollo/client";
import { getBookQuery } from "../queries/Queries";

const BookItem = (id) => {
    const { data } = useSuspenseQuery(getBookQuery, {
        variables: id
    });
console.log(data);
    return (
    <div className="p-5">
        <h2 className="text-5xl font-bold mb-3 border-b-2 w-fit">{data.book.name}</h2>
        <p className="p-3"><span className="font-bold uppercase">genre: </span>{data.book.genre}</p>
        <p className="p-3"><span className="font-bold uppercase">author: </span>{data.book.author.name}</p>
        <p className="font-bold text-sm border-b mt-3 w-fit text-[#ddd] border-[#ddd]">The other books written by the Author</p>
        <ol className="list-disc p-5 text-[#ddd]">
        {data.book.author.books.map((book)=>(
            <li key={book.id}>{book.name}</li>
        ))}
        </ol>
    </div>)
}

export default BookItem;