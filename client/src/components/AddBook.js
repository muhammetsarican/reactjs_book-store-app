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
        <form onSubmit={handleSubmit} className="fixed bg-white bottom-0 left-0 w-[60%] p-5">
            <div className="w-[50%]">
                <h3 className="text-start mb-5 ms-5 font-bold text-xl uppercase">Add new book</h3>
                <div className="grid grid-cols-2 gap-10">
                    <label htmlFor="name" className="text-right p-3 ">
                        Name:
                    </label>
                    <input className="m-2 bg-[#efefef] py-3 px-5 rounded-full shadow-lg shadow-[#fee] focus:outline-none focus:border-[#ad1457] focus:ring-[#ad1457] focus:ring-2" type="text" id="name" onChange={(e) => { setBook({ ...book, name: e.target.value }) }} placeholder="Enter book name"></input>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <label htmlFor="Genre" className="text-right p-3 ">
                        Genre:
                    </label>
                    <input className="m-2 bg-[#efefef] py-3 px-5 rounded-full shadow-lg shadow-[#fee] focus:outline-none focus:border-[#ad1457] focus:ring-[#ad1457] focus:ring-2" id="Genre" type="text" onChange={(e) => { setBook({ ...book, genre: e.target.value }) }} placeholder="Enter book genre"></input>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <label htmlFor="Author" className="text-right p-3 ">
                        Author:
                    </label>
                    <select className="m-2 bg-[#efefef] py-3 px-5 rounded-full shadow-lg shadow-[#fee] focus:outline-none focus:border-[#ad1457] focus:ring-[#ad1457] focus:ring-2 text-gray-700" id="Author" onChange={(e) => setBook({ ...book, authorId: e.target.value })}>
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
                <div className="">
                    <button className="flex justify-center items-center text-white text-3xl bg-[#ad1457] border-none py-0 px-[10px] rounded-full h-[40px] w-[40px]"><Plus /></button>
                </div>
            </div>
        </form>
    )
}

export default AddBook;