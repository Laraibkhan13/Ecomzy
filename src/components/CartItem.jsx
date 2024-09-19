import React from 'react'
import toast from 'react-hot-toast';
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from 'react-redux'
import { remove } from '../Redux/Slice/cartSlice';


const CartItem = ({item,itemindex}) => {

    const dispatch= useDispatch();

    const Removefromcart=()=>{
        dispatch(remove(item.id));
        toast.success("Item removed")
    }
  return (
    <div>
    <div className=' flex gap-3 mt-[50px]'>
        <div>
            <img className=' h-[200px] w-[150px]' src={item.image}/>
        </div>
        <div>
            <h1 className=' text2xl font-semibold m-5'>{item.title.split(" ").slice(0,4).join(" ") +".. "}</h1>
            <h1 className=' w-[300px] m-5'>{item.description.split(" ").slice(0,10).join(" ") + ".."}</h1>
            <div className=' flex justify-between'>
                <p className=' m-5'>{item.price}</p>
                <div className=' m-5' onClick={Removefromcart}>
                    <FcDeleteDatabase/>
                </div>
            </div>
           

        </div>
        
    </div>
    
    <div className=' h-[1px] w-[100%] bg-black mt-[10px] mb-[10px]'></div>
    </div>
  )
}

export default CartItem