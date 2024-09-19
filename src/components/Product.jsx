import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../Redux/Slice/cartSlice'
import toast from 'react-hot-toast'


const Product = ({post}) => {

    const dispatch= useDispatch()

    const Addtocart=()=>{
        dispatch( add(post))
        toast.success("item added to cart")
    }

    const Removefromcart=()=>{
        dispatch(remove(post.id))
        toast.error("Item removed")
    }

    const {cart}=useSelector((state)=>state)
  return (
    <div className=' flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in   gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] '>
        <div>
            <p className=' text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{post.title}</p>
        </div>
        <div>
            <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
        <div >
            <img className=' h-[120px]' src={`${post.image}`}/>
        </div>
        <div className='flex justify-between gap-12'>
        <div>
            <p className=' text-green-700 font-bold'>${post.price}</p>
        </div>
        <div>
        {
            cart.some((p)=>p.id===post.id) ?
            (
                <button 
                className=' text-gray-700 border-2  border-gray-700 rounded-full p-1 px-3 text-[12px] font-semibold hover:bg-gray-700 hover:text-white transition duration-300 ease-in'
                onClick={Removefromcart}>
                    Remove Item
                </button>
            ):
            (
                <button 
                className=' text-gray-700 border-2  border-gray-700 rounded-full p-1 px-4 text-[12px] font-semibold'
                onClick={Addtocart}>
                    Add To Cart
                </button>
            )
        }
        </div>
        </div>
        
    </div>
  )
}

export default Product