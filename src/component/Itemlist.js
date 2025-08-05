import { useDispatch } from "react-redux"
import { additem } from "../utils/cartSlice"
import { CDN_URL } from "../utils/constants"
const Itemlist=({items},index)=>{

const dispatch=useDispatch()

    const handleAddItem=(item)=>{
        dispatch(additem(item));
    }
    return (
    <div >
       {items.map(item=>
<div key={`${item.card.info.id}-${index}`}
 className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
<div className="w-9/12">
<div className="py-2">
<span>{item.card.info.name}</span>
<span> - ₹ {item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100 }</span>
</div>
<p className="text-xs">{item.card.info.description}</p>
</div>

<div className="w-4/12 p-4">
<div className="absolute">
<button onClick={()=>handleAddItem(item)} className="p-2 mx-16 cursor-pointer rounded-xl bg-black text-white shadow-lg  m-auto">
Add+
</button>
</div>
<img src={CDN_URL + item.card.info.imageId} className="w-full h-32 object-cover rounded-lg" />
</div>
</div>
)}
    </div>
    )
}
export default Itemlist