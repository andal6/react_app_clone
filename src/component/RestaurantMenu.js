import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCat from "./RestaurantCat";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCat from "./RestaurantCat";
import { useState } from "react";

/// state variables
const RestaurantMenu = () => {
const { resId } = useParams(); 
const [showindex,setshowindex]=useState(null)
const resinfo=useRestaurantMenu(resId)
///

//shimmer UI
if (resinfo === null) {
    return <Shimmer />;
  }
//

// destructuring from API
const { name, cuisines, costForTwoMessage } =resinfo?.cards[2]?.card?.card?.info || {};
const itemCards = resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
const caterogory=resinfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>
    c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
console.log(caterogory);
///

return (

<div className="text-center">
{/* Name, cuisines and cost for two */}

      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>

{/* Ends */}

        {/* Gives Catergory */}
     {caterogory.map((catg,index)=>
<RestaurantCat key={catg?.card?.card?.title} 
data={catg?.card?.card}
showitem={index ===showindex}
setshowindex={()=>setshowindex(showindex===index?null:index)}
/>)}
{/* Ends */}
</div>
  );
};
export default RestaurantMenu;







