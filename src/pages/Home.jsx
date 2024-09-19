import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[posts,setposts]=useState([]);

  const[Loading,setLoading]=useState(false);
  async function fetchproductdata()
  {
    setLoading(true);
    try{
      const res= await fetch(API_URL)
      const data=await res.json();

      setposts(data);
      
    }
    catch(error)
    {
      console.log(error);
      setposts([]);
    }
    setLoading(false);
  }

  useEffect( ()=>{
    fetchproductdata();
  },[])

  return (
    <div>
      {
        Loading ? <Spinner/> :
        posts.length > 0 ?
        (
          <div className=" grid sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
              posts.map((post)=>(
                <Product key={post.id} post={post}/>
              ))
            }
          </div>
        )
        :
        <div className=" flex justif items-center">
          <p>No data found</p>
        </div>
      }
    </div>
  );
};

export default Home;
