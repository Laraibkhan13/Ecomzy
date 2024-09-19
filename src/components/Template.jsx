import React from 'react'

import frame from '../assets/frame.png'
import Signupform from './Signupform'
import Loginform from './Loginform'
import { FaGoogle } from "react-icons/fa";

const Template = ({title,desc1,desc2,formtype,image,setisloggedin}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
        <h1
        className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
            <span className='text-richblack-100'>{desc1}</span>
            <span className='text-blue-100 italic'>{desc2}</span>

        </p>
        {
            formtype==="signup"?
            (<Signupform setisloggedin={setisloggedin}></Signupform>):
            (<Loginform setisloggedin={setisloggedin}></Loginform>)
        }

        <div  className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading[1.375rem]'>or</p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button className='w-full flex flex-row justify-center items-center rounded-[8px] font-medium text-richblack-100
            border  px-[12px] py-[8px] gap-x-2 mt-6 bg-yellow-300 hover:bg-yellow-400'><p>Sign Up With Google </p><FaGoogle /></button>
        </div>

        <div className='fixed w-11/12 max-w-[450px] left-[60%] top-[26%] '>
            <img src={frame} alt=''
            width={448}
            height={404}
            loading='lazy'/>

            <img src={image} alt=''
            width={448}
            height={404}
            loading='lazy'
            className='absolute -top-4 right-4'/>
        </div>
       
    </div>
  )
}

export default Template
