'use client'

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";




export default function   Home() {

  useEffect(()=>{
    const getData=async () =>{

      try{

        const res=await fetch ('http://localhost:3002/api/login')
        // we are awaiting the response and also converting the json response
        const data= await res.json()
        console.log(data)
      }

      catch(e){
        console.log('error dey somewhere')
      }

    }

   

    const getData2=async () =>{

      try{

        const res=await fetch ('http://localhost:3002/api/register')
        // we are awaiting the response and also converting the json response
        const data= await res.json()
        console.log(data)
      }

      catch(e){
        console.log('error dey somewhere')
      }

    }
    getData()
    getData2()

  },[])




  
  return (

    <div>
      <Navbar/>
      <Hero/>

    </div>
  );
}
