"use client"
import React, { useEffect, useRef } from 'react';
import { CgWorkAlt } from "react-icons/cg";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const First = () => {
  const secondRef = useRef(null);
  useEffect(() => {
       const el=secondRef.current;
       gsap.fromTo(el,{y:100},{y:0,duration:2,scrollTrigger:{
        trigger:el
       }})
  }, [])
  
  return (
    <div className='flex flex-col p-8 items-center justify-center' ref={secondRef}>
        <div className='text-white text-8xl'>
            <CgWorkAlt/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-white'>Supervision</h1>
        </div>
        <div className='text-center mt-3'>
            <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
  )
}

export default First