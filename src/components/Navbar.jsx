import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'


const Navbar = ({isloggedin,setisloggedin}) => {

    const {cart}=useSelector((state)=>state)
  return (
    <div className=' '>
    <nav className=' flex justify-between items-center h-16 max-w-5xl mx-auto  '>
        <NavLink to={"/"}>
        <img src="../logo.png" alt='logo' className=' h-14'/>
        </NavLink>
        
        <div className=' flex  font-medium text-slate-100'>
            <NavLink to={"/"}>
            <p className=' mx-4'>Home</p>
            </NavLink>
            <div className='flex gap-2'>
            {   !isloggedin &&
            <Link to='/Login'>
            <button>Login</button>
        </Link>
        }
        
        {
            !isloggedin &&
            <Link to='/Signup'>
            <button>Signup</button>
            </Link>
        }
        {   isloggedin &&
                   <Link to='/Login'>
                   <button onClick={()=>{
                    setisloggedin(false);
                    toast.success("Logout successfully")
                   }}>Logout</button>
               </Link>
        }

            </div>

            <NavLink to={"/cart"}>
                <div className=' relative'>
                <FaShoppingCart className=' text-2xl'/>
                {
                    cart.length>0 &&
                    <span className=' absolute -top-1 -right-2 bg-green-600 text-xs w-4 text-white h-4 rounded-full  flex justify-center items-center animate-bounce'>{cart.length}</span>
                }
                </div>
            
            
            </NavLink>

            
        </div>

    </nav>
    </div>
  )
}

export default Navbar