import { useQuery, useMutation } from "@apollo/client";
import { Plus } from "lucide-react";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/Queries";
import { useState } from "react";

const AddBook = () => {
    const [book, setBook] = useState({
        name: "",
        genre: "",
        authorId: ""
    })

    const { loading, data, error } = useQuery(getAuthorsQuery);
    const [mutateFunction] = useMutation(addBookMutation);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    function handleSubmit(event) {
        event.preventDefault();
        mutateFunction({
            variables: {
                name: book.name,
                genre: book.genre,
                authorId: book.authorId
            },
            refetchQueries: [{
                query: getBooksQuery
            }]
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input type="text" id="name" onChange={(e) => { setBook({ ...book, name: e.target.value }) }}></input>
            </div>
            <div>
                <label htmlFor="Genre">
                    Genre:
                </label>
                <input id="Genre" type="text" onChange={(e) => { setBook({ ...book, genre: e.target.value }) }}></input>
            </div>
            <div>
                <label htmlFor="Author">
                    Author:
                </label>
                <select id="Author" onChange={(e) => setBook({ ...book, authorId: e.target.value })}>
                    <option>Choose an Author from List!</option>
                    {
                        data.authors.map((author) => {
                            return (
                                <option key={author.id} value={author.id}>{author.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <button><Plus /></button>
            </div>
        </form>
    )
}

export default AddBook;