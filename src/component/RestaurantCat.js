import Itemlist from "./Itemlist";

const RestaurantCat=({data,showitem,setshowindex})=>{

    const handleclick=()=>{
    setshowindex();

    }
    return(
<div>  
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
       <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold text-lg">
        {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
        </div>
        
        {showitem && <Itemlist items={data.itemCards}/>}
    
</div>
  

        </div>
    )
}
export default RestaurantCat;