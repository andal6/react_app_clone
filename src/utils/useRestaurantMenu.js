import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu=(resId)=>{

const [resinfo,setResinfo] =useState(null);

useEffect(()=>{
    fectData();
},[]);

const fectData=async()=>{
    const data=await fetch(MENU_API+resId)
    const json=await data.json();
    setResinfo(json.data)
}

    return resinfo;
}

export default useRestaurantMenu;