import React, { useState } from 'react'
import{AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

const Signupform = ({setisloggedin}) => {

    const[formdata,setformdata]=useState({firstname:"",lastname:"", email:"",createpassword:"",confirmpassword:""})
    const[showpassword,setshowpassword]=useState(false)
    const[confirmpassword,setconfirmpassword]=useState(false)
    const navigate=useNavigate();

    function changeHandler(event)
    {
        setformdata((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
               
        
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formdata.createpassword!==formdata.confirmpassword)
            {
                toast.error("password not matched")
            }
            else{
                setisloggedin(true)
        toast.success("Signup successfull")
        navigate("/")

            }
        const accountdata={
            ...formdata
        }
        console.log('printing account data')
        console.log(accountdata)
        
    }

  return (
    <div>
        {/* <div  className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button>student</button>
            <button>instructor</button>
        </div> */}
        
        <form onSubmit={submitHandler}>
            <div className='flex gap-x-4 mt-[20px]'>
                <label  className='w-full'>
                    <p
                    className='text-[0.875rem] text mb-1 leading-[1.375rem]'>First Name <sup className=' text-red-500'>*</sup></p>
                    <input
                    type='text'
                    name='firstname'
                    value={formdata.firstname}
                    placeholder='first namae'
                    onChange={changeHandler}
                    className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                </label>

                <label className=' w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-red-500'>*</sup></p>
                    <input
                    type='text'
                    name='lastname'
                    value={formdata.lastname}
                    placeholder='Last namae'
                    onChange={changeHandler}
                    className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
                    />
                </label>
            </div>
            <label className='w-full mt-[20px]'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-500'>*</sup></p>
                <input
                    type='email'
                    name='email'
                    value={formdata.email}
                    placeholder='enter email'
                    onChange={changeHandler}
                    className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
                    />
            </label>
            <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>create passsowrd<sup className='text-red-500'>*</sup></p>
                <input
                    type={showpassword?("text"):("password")}
                    name='createpassword'
                    value={formdata.createpassword}
                    placeholder='enter password'
                    onChange={changeHandler}
                    className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
                    />

                <span 
                className='absolute right-3 top-[38px] cursor-pointer' 
                onClick={()=>{
                    setshowpassword((prev)=>!prev)
                }}>
                    {
                        showpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)
}
                </span>

            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>confirm passsowrd<sup className='text-red-500'>*</sup></p>
                <input
                    type={showpassword?("text"):("password")}
                    name='confirmpassword'
                    value={formdata.confirmpassword}
                    placeholder='enter password'
                    onChange={changeHandler}
                    className='bg-black rounded-[0.5rem] text-white w-full p-[12px]'
                    />

                <span
                 className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={()=>{
                    setconfirmpassword((prev)=>!prev)
                }}>
                    {
                        confirmpassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
            </label>
            </div>

            <button className=' w-full bg-green-500 rounded-[8px] hover:bg-green-600 font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                <p>Create account</p>
            </button>




        </form>
    </div>
  )
}

export default Signupform