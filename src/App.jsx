import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BackTop } from 'antd';
import {ConfigProvider} from "antd";
import toast from 'react-hot-toast'
import Drawer from "react-modern-drawer";
import 'react-modern-drawer/dist/index.css'

const App = () => {
  const[isloggedin,setisloggedin]=useState(false)
  const[age,setage]=useState('');
  const[isopen,setisopen]=useState(false);
  function togglehandler()
  {
    setisopen((prev)=>!prev)
  }

  function clickhandler()
  {
    const numericAge = Number(age);

    if (numericAge > 18) {
      toast.success("eligible")
    } else if (numericAge === 0 || numericAge === -1) {
      toast.error("age cant be zero or negative")
    } else {
      toast.error("not eligible")
    }
  }

  
  return (
    <div>
      

      <div className=" bg-slate-900  ">
      <Navbar isloggedin={isloggedin} setisloggedin={setisloggedin}></Navbar>
      </div>
      <ConfigProvider>
        
        <Drawer
                open={isopen}
                onClose={togglehandler}
                direction='top'
                className='bla bla bla'
            >
                <input type="text" placeholder="enter your age" value={age}
          onChange={(e) => setage(e.target.value)}>
          </input>
          <button onClick={clickhandler}>submit</button>
            </Drawer>
        <div className=" text-center">
          <h1 className=" text-black bg-green-600">SALE IS LIVE</h1>
          <button onClick={togglehandler} className=" bg-blue-600">VISIT SALE</button>
          <br></br>
          
        </div>
      </ConfigProvider>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Login' element={<Login setisloggedin={setisloggedin}></Login>}></Route>
        <Route path='/Signup' element={<Signup setisloggedin={setisloggedin}></Signup>}></Route>
        <Route path="/cart" element={<Cart></Cart>}/>
      </Routes>
      
      
      <BackTop
        style={{ backgroundColor: 'white', color: 'blue' }}
        step={500}
        speed={100}
        content={<div>Top</div>}
      />
     
    </div>
  );
};

export default App;
