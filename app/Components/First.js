"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { CiSettings } from "react-icons/ci";
gsap.registerPlugin(ScrollTrigger);

const First = () => {
  const firstRef = useRef(null);
  useEffect(() => {
  const el=firstRef.current;
  gsap.fromTo(el,{y:100},{y:0,duration:1,scrollTrigger:{
      trigger:el
  }})
  
  }, [])
  
  return (
    <div className='flex flex-col p-8 items-center justify-center' ref={firstRef}>
        <div className='text-white text-8xl'>
            <CiSettings/>
        </div>
        <div>
            <h1 className='font-bold text-xl text-white'>Design Process</h1>
        </div>
        <div className='text-center mt-3'>
            <p className='text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
    </div>
  )
}

export default First