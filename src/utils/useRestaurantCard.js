import {useState,useEffect } from "react";

const useRestauranCard=()=>{
const [listofres, setlistofres] = useState([]);
const[filteredres,setfilres]=useState([]);
const [searchText, setsearchText] = useState("");

console.log(listofres)

useEffect(()=>{
fetchData();
  },[])

const fetchData=async()=>{

const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8811086&lng=80.2043886&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json=await data.json();
console.log(json);
setfilres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setlistofres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
console.log("Body rendered");

}
  return [filteredres, setfilres, listofres, searchText, setsearchText];
}

export default useRestauranCard;

