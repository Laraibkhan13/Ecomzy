import React from 'react';
import loginimg from '../assets/login.png'
import Template from '../components/Template';


const Login = ({setisloggedin}) => {
  return (
    <Template
    title="Welcome back"
    desc1="Take your online shopping expeerienc at a new level"
    desc2=" taking you to new heights of shopping"
    image={loginimg}
    formtype="login"
    setisloggedin={setisloggedin}
    /> 
  )
}
export default Login