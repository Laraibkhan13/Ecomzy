import React from 'react'
import signupimg from '../assets/signup.png'
import Template from '../components/Template'

const Signup = ({setisloggedin}) => {
  return (
    <Template
    title="join the millions buying things from Ecomzy"
    desc1="Take your online shopping expeerienc at a new level"
    desc2=" taking you to new heights of shopping"
    image={signupimg}
    formtype="signup"
    setisloggedin={setisloggedin}
    /> 
  )
}

export default Signup;