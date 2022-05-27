import { useState } from "react";
import { SearchResource } from "../components/resources";


 export const Resource = () => {
    const [search, setSearch] = useState();

    
  return (
      <div>
      
     <SearchResource setSearch={setSearch}/>
      <p>{}</p>
      </div>
  )  
};