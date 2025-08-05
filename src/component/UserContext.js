import { createContext } from "react";
//comes from react library
const Usercontext=createContext({
    //central global object
    loggedinuser:"Deafult User",
});

export default Usercontext;