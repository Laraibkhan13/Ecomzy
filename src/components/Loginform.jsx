import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import{AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import toast from 'react-hot-toast'

 const Loginform = ({setisloggedin}) => {
    
const[formdata,setformdata]=useState({
        email:"", password:""
    
    })

const[showpassword,setshowpassword]=useState(false)

const navigate=useNavigate();
function changehandler(event){
        setformdata((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value

            }
        ))
    }
    function submitHandler(event)
    {
        event.preventDefault();
        setisloggedin(true);
        toast.success("Login successfull")
        navigate("/")


    }
  return (
    <form onSubmit={submitHandler}
    className=' flex flex-col w-full gap-y-4 mt-6'>
        <label className=' w-full'>
            <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Addresss <sup className='text-red-500 '>*</sup>
            </p>
            <input
            required
            type="email"
            value={formdata.email}
            onChange={changehandler}
            placeholder="enter your email"
            name="email"
            className=' bg-black rounded-[0.5rem] text-white w-full p-[12px]'
            />
        </label>  
        
        <label className=' w-full relative'>
        <p className=' text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]'>Password <sup className=' text-red-500
        '>*</sup></p>
            <input
            required
            type={showpassword ? ("text"): ("password")}
            value={formdata.password}
            onChange={changehandler}
            placeholder='enter your password'
            name='password'
            className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
            />

            <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={()=>{
                setshowpassword((prev)=>!prev)
            }}>
                {
                showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) 
                }
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-green-500 max-w-max ml-auto'>Forgot password</p>
            </Link>
        </label>  

        <button className='bg-green-500 hover:bg-green-600 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Signup</button>
        
    </form>
  )
}

export default Loginform