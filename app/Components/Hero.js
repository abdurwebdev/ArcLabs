"use client"
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { AiFillPlayCircle } from "react-icons/ai";
const Hero = () => {
    const container = useRef();
    useGSAP(()=>{
        gsap.from('.animate',{
            y:200});
        },
    {scope:container});
  return (
    <div className='w-full  h-[800px] md:bg-black  sm:h-screen md:h-[750px] xl:h-[800px] '>
        <div>
            <img className='h-[800px] w-full   bg-cover' src="https://preview.colorlib.com/theme/archlab/images/bg_1.jpg.webp"/>
        </div>
        <div ref={container} id="main">
        <div className='animate absolute text-black space-y-3 w-[90%] xl:w-[45%] sm:w-[55%] h-[80vh] left-8 top-40 flex flex-col '>
            <div>
                <h1 className='text-[#96BB54] text-6xl'> — </h1>
            </div>
            <div>
                <h1 className='font-normal font-sans text-7xl '>Modern</h1>
            </div>
            <div>
                <h1 className='font-normal font-sans text-6xl xl:text-7xl sm:text-7xl md:text-7xl'>Innovative</h1>
            </div>
            <div>
                <h1 className='font-normal font-sans text-5xl sm:text-7xl md:text-7xl xl:text-7xl'>Architecture</h1>
            </div>
            <div className='py-10 space-y-3'>
                <p className='text-[#898B8A] font-sans text-2xl'>From as low as $20 A small river named Duden flows <br /> by their place and supplies it with the necessary <br /> regelialia.</p>
            </div>
            <div className='flex xl:gap-5 gap-2 md:gap-5 sm:gap-5 items-center justify-start'>
                <div>
                    <button className='xl:px-8 xl:py-5 py-3 px-1 md:px-8 md:py-5 sm:px-8 sm:py-5 bg-[#96BB7C] rounded-md'>Explore Now</button>
                </div>
                <div className='xl:px-5 xl:py-4 sm:px-5 sm:py-4 px-4 py-3 md:px-5 md:py-4 rounded-full bg-[#96BB7C]'>
                    <button><AiFillPlayCircle className='text-2xl'/></button>
                </div>
                <div>
                    <Link href="#" className='text-white text-xl font-sans'>Watch Our Video</Link>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero