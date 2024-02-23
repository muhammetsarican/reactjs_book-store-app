import { useState } from "react";
import { Plus } from "lucide-react";
import { useMutation } from "@apollo/client";
import { addAuthorMutation, getAuthorsQuery } from "../queries/Queries";

const AddAuthor = () => {
    const [mutateFunction, { loading, error, data }] = useMutation(addAuthorMutation);
    const [author, setAuthor] = useState({
        name: "",
        age: 0
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>An error occured, error: {error.message}</p>

    const handleSubmit = (e) => {
        e.preventDefault();
        mutateFunction({
            variables: {
                name: author.name,
                age: author.age
            },
            refetchQueries: [{
                query: getAuthorsQuery
            }]
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full">
                <h3 className="text-start mb-5 ms-5 font-bold text-xl uppercase">Add new author</h3>
                <div className="grid grid-cols-2 gap-10">
                    <label htmlFor="name" className="text-right p-3 ">
                        Name:
                    </label>
                    <input className="m-2 bg-[#efefef] py-3 px-5 rounded-full shadow-lg shadow-[#fee] focus:outline-none focus:border-[#ad1457] focus:ring-[#ad1457] focus:ring-2" type="text" id="name" onChange={(e) => { setAuthor({ ...author, name: e.target.value }) }} placeholder="Enter author name"></input>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <label htmlFor="age" className="text-right p-3 ">
                        Age:
                    </label>
                    <input className="m-2 bg-[#efefef] py-3 px-5 rounded-full shadow-lg shadow-[#fee] focus:outline-none focus:border-[#ad1457] focus:ring-[#ad1457] focus:ring-2" id="age" type="text" onChange={(e) => { setAuthor({ ...author, age: Number(e.target.value) }) }} placeholder="Enter author age"></input>
                </div>
                <div className="flex justify-end m-5">
                    <button className="flex justify-center items-center text-white text-3xl bg-[#ad1457] border-none py-0 px-[10px] rounded-full h-[40px] w-[40px]"><Plus /></button>
                </div>
            </div>
        </form>
    )
}

export default AddAuthor;