import { useState } from "react";
import { SearchResource } from "../components/resources";





 export const Resource = () => {
    const [username, setUsername] = useState();

  return (
      <div>
      <h2 title={username}></h2>
      <SearchResource setUsername={setUsername}/>
      </div>
  )  

};