import { useState } from "react";
import { SearchResource } from "../components/resources";

 export const Resource = () => {
    const [username, setUsername] = useState();

  return (
      <div>
      <p title={username}></p>
      <SearchResource setUsername={setUsername}/>
      </div>
  )  
};