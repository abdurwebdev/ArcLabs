"use client"
import React, { useEffect, useRef } from 'react'
import { BsFillPinMapFill } from "react-icons/bs";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const First = () => {
  const thirdRef = useRef(null);
  useEffect(() => {
   const el=thirdRef.current;
   gsap.fromTo(el,{y:100},{y:0,duration:3,scrollTrigger:
    {
      trigger:el
    }
   })
  }, [])
  
  return (
    <div className='flex flex-col p-8 items-center justify-center' ref={thirdRef}>
        <div className='text-white text-8xl'>
           <BsFillPinMapFill/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-white'>Budget Planning</h1>
        </div>
        <div className='text-center mt-3'>
            <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
  )
}

export default First