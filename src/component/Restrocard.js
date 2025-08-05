import { useContext } from "react";
import { CDN_URL } from "../utils/constants";


const Restrocard = ( {resData} ) => {
const { name, cuisines, avgRating, cloudinaryImageId, sla } = resData.data || resData?.info || {};
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[350px] bg-gray-50 hover:bg-gray-100">
      <img
        className="rounded-lg w-[200px] h-[200px]"
        src={CDN_URL + cloudinaryImageId}
        alt={name} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>

      <h4>{avgRating}⭐</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export const withsoondelivery=(Restrocard)=>{
  return(props)=>{
    return(
  <div>
    <label className="absolute bg-black text-white m-2 p-2 rounded-sm">Quick Delivery</label>
    <Restrocard {...props}/>
  </div>
)
  }
}


export default Restrocard;