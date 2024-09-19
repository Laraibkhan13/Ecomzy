import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const[totalamount,settotalamount]=useState(0)
  const {cart}= useSelector((state)=>state)

  useEffect(()=>{
    settotalamount(cart.reduce((acc,cur)=>acc+cur.price,0));
  },[cart])

  return (
    <div className="">
      {
        cart.length> 0 ?
        (<div className=" flex  items-center justify-center gap-20 max-w-6xl">
          <div className=" ml-[-200px]">
            {
              cart.map((item,index)=>(
                <CartItem key={item.id} item={item} intemindex={index}/>
              ))
            }
          </div>
          <div className="  fixed left-[65%] top=[20%] bottom-[10%]">
            <div className=" flex flex-col h-[300px]">
              <div className=" font-semibold  ">Your Cart</div>
              <div className=" uppercase text-green-800 text-3xl font-bold">Summary</div>

              <p className=" mt-[10px] font-semibold ">
                <span>Total Items : {cart.length}</span>
              </p>
            </div>

            <div className="mt-[30px]">
              <p className="">Total Amount : <span className=" font-semibold">${totalamount}</span></p>
              <button className=" bg-green-800 text-white w-[100%] p-1 rounded-md hover:bg-green-950 ">Checkout Now</button>
            </div>

          </div>
        </div>):

        (
        <div className=" flex flex-col justify-center items-center fixed top-[50%] left-[45%]">
          <h1 className=" font-bold">Cart is Empty</h1>
          <Link to={"/"}>
            <button className=" bg-green-800 w-[200px] px-3 py-2 text-white rounded-md hover:bg-green-950">
              Shop Now
            </button>
          </Link>
        </div>
        )
      }

    </div>
  );
};

export default Cart;
