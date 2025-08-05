import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../utils/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch()

    const handleclearcart=()=>{
        dispatch(clearcart())
    }
    const cartitems=useSelector((store)=>store.cart.items);
    return <div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className="w-6/12 m-auto">
    <button onClick={handleclearcart} className="p-2 m-2 rounded-lg bg-black text-white cursor-pointer">Clear cart</button>
       
        {cartitems.length===0 && 
        <h1>Cart is Empty Add Items to the cart!
         </h1>}

    <Itemlist items={cartitems}/>
  
    </div>
    </div>
}
export default Cart;