import {  useState } from "react";
import { SearchResource } from "../components/resources";


 export const Resource = () => {
    const [search, setSearch] = useState();
    const [results, setResults] = useState([]);
    
  return (
      <div>
        <SearchResource setSearch={setSearch} search={search} setResults={setResults}/>
     {results.map((item, index) => {
       return(
         <div key={index}>
           <p>{item.username}</p>
           <p>{item.helpline}</p>
           <p>{item.website}</p>
           </div>
       )
     })}

     
      </div>
  )  
};