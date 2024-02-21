import { useQuery } from "@apollo/client";
import {Plus} from "lucide-react";
import { getAuthorsQuery } from "../queries/Queries";

const AddBook = () => {
    const {loading, error, data}=useQuery(getAuthorsQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>

    console.log(data);
    return (
        <form>
            <div>
                <label htmlFor="name">
                    Name: 
                </label>
                <input type="text" id="name"></input>
            </div>
            <div>
                <label htmlFor="Genre">
                    Genre: 
                </label>
                <input id="Genre" type="text"></input>
            </div>
            <div>
                <label htmlFor="Author">
                    Author: 
                </label>
                <select id="Author" >
                    <option>Choose an Author from List!</option>
                    {
                        data.authors.map((author)=>{
                            return (
                                <option key={author.id}>{author.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <button><Plus/></button>
            </div>
        </form>
    )
}

export default AddBook;