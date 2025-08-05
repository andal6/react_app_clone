import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "./UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
   const [btnname,setbtnname]=useState("login")
   const  onlineStatus=useOnlineStatus();
   const {loggedinuser}=useContext(Usercontext)

console.log({loggedinuser});
//subscribing the store using a selector

const cartitems=useSelector((store)=>store.cart.items)
console.log(cartitems)

return (
<div className="flex justify-between bg-pink-100 shadow-lg px-2">

<div>
   <img className="w-30" src={LOGO_URL}></img>
</div>

<div className="flex item-center">

<ul className="flex p-4 m-4">

<li className="px-4">
 Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
 
<li className="px-4">
<Link to="./">Home</Link></li>

<li className="px-4">
<Link to="/about">About</Link></li>
   
<li className="px-4">
<Link to="/contact">Contact</Link>
</li>

<li className="px-4 font-bold">USER:{loggedinuser}</li>

<li className="px-4 font-bold">
<Link to="/cart">
cart - {cartitems.length} items
</Link>
</li>


<li className="px-4">
   <button onClick={()=>{

   btnname==="login"?
    setbtnname("logout"):setbtnname("login")
   }
   } >{btnname}</button></li>
   <li>

   </li>
</ul>
</div>
      </div>
   )
}
export default Header;