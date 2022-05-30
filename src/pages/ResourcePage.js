import {  useState } from "react";
import { SearchResource } from "../components/resources";


 export const Resource = () => {
    const [search, setSearch] = useState();
    const [results, setResults] = useState();

    

    
  return (
      <div>
      
     
      <SearchResource setSearch={setSearch} search={search} setResults={setResults}/>
      <p>{results}</p>
      </div>
  )  
};