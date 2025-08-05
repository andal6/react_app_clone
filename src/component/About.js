import { useContext } from "react";
import Usercontext from "./UserContext";
const About=()=>{

    const {loggedinuser}=useContext(Usercontext)
    return(
        <div>
      User:{loggedinuser}
     
        </div>
    )
}

export default About;