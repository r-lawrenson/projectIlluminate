import { useState } from "react";

export const SearchResource = ({setUsername}) => {
    const [keywords, setKeywords] = useState();

    return(
        <div>
        <label for="resource-search">Search for Resources:</label>
        <input onChange={(e) => setKeywords(e.target.value)}/>

        <button type="search" id="resource-search">Search</button>
        </div>
    )
}