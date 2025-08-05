import Restrocard,{withsoondelivery}from "./Restrocard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestauranCard from "../utils/useRestaurantCard";
import { useContext } from "react";
import Usercontext from "./UserContext";

const Body = () => {

  const Restrocardpromoted=withsoondelivery(Restrocard)

  const [filteredres, setfilres, listofres, searchText, setsearchText] = useRestauranCard();

const onlineStatus=useOnlineStatus();

if(onlineStatus === false)
  return <h1>Looks like you are offline please check you internet connection</h1>
  


  if (listofres.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className=" m-4 p-4 ">

          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}/>

         
          <button className="px-4 py-2 border border-black bg-green-100 m-4 rounded-lg cursor-pointer hover:bg-green-500"
            onClick={() => {
              const searchresult = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
             setfilres(searchresult);
             
            }}>
            Search</button>

        </div>
<div className="m-4 p-4 border-solid flex item-center rounded-lg ">
<button
          className="px-4 py-2 bg-gray-100 cursor-pointer hover:bg-green-300"
          onClick={() => {
            const filteredlist = listofres.filter(
              (res) => res.info.avgRating > 4
            );
            setfilres(filteredlist)
          }}>
          Top Rated Restaurants
</button>
</div>
<div className="m-4 p-4 border-solid flex item-center rounded-lg ">
      <button className="px-4 py-2 bg-gray-100 cursor-pointer hover:bg-green-300" onClick={()=>{
            const choicelist=listofres.filter((res)=>res.info.cuisines.includes("South Indian")
            );
            setfilres(choicelist)
        }}>
        South Indian
        </button>
</div>
<div className="m-4 p-4 border-solid flex item-center rounded-lg ">
<button className="px-4 py-2 bg-gray-100 cursor-pointer hover:bg-green-300" onClick={()=>{
const delTime=listofres.filter((res)=>
res.info.sla.deliveryTime < 30
)
setfilres(delTime);
}}>
Fast Delivery
</button>
</div>

<div className="m-4 p-4 border-solid flex item-center rounded-lg ">
<button
  className="px-4 py-2 bg-gray-100 cursor-pointer hover:bg-green-300"
  onClick={() => {
    setfilres(listofres);
    setsearchText("");
  }}>
  Reset
</button>
</div>
</div>

<div className="flex flex-wrap">
        {filteredres.map((restaurant) => (

<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
{
  restaurant.info.sla.deliveryTime <=20 ? <Restrocardpromoted resData={restaurant}/>:<Restrocard resData={restaurant} />}
</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;






   