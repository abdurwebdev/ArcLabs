"use client"
import React, { useEffect, useRef } from 'react'
import { AiFillHome } from "react-icons/ai";
import gsap from 'gsap';

const First = () => {
  const fourtRef=useRef(null);
  useEffect(() => {
   const el=fourtRef.current;
   gsap.fromTo(el,{y:100},{y:0,duration:4,scrollTrigger:
    {
      trigger:el
    }
   })
  }, [])
  
  return (
    <div className='flex flex-col p-8 items-center justify-center' ref={fourtRef}>
        <div className='text-white text-8xl'>
            <AiFillHome/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-white'>Build a Home For You</h1>
        </div>
        <div className='text-center mt-3'>
            <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
  )
}

export default First