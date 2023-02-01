"use client";
import Header from "@/components/index/header";
import Body from "@/components/index/body";
import Footer from "@/components/index/footer";
import Loading from "@/components/index/loading";
import { useEffect, useState } from "react";
const page = () => {
  const [state, setState] = useState(true);
  useEffect( () => { 
    setTimeout( () => { 
      setState(false)
      console.log('im here')
    } , 5000 )
  } , [])
  return (
    <>
    { state ? <Loading /> : <div className="wrapper">
          <Header />
          <Body />
          <Footer />
        </div>
         }
  
    </>
  );
};

export default page;
