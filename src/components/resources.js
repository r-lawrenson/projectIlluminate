import { useState } from "react";
import { resourcesSearch } from "../utils";

export const SearchResource = ({setSearch}) => {
    const [keywords, setKeywords] = useState([]);

    const submitHandler = (e) => {

        e.preventDefault();
        resourcesSearch(keywords, setSearch);
    };

    return(
        <div>
        <form onSubmit ={submitHandler}>
        <label>Search for Resources:</label>
        <input onChange={(e) => setKeywords(e.target.value)}placeholder="Search"/>

        <button type="search" id="resource-search">Search</button>
        </form>
        </div>
    )
}