import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className=' flex flex-col justify-center items-center fixed top-[40%] left-[45%]'>
        <div className=' spinner'></div>
        <div>Getting Things Done..</div>
    </div>
  )
}

export default Spinner