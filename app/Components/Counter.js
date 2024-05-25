"use client"
import React, { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn,setcounterOn]=useState(false);
  return (
    <>
    {/* Count Up Start */}
  <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
  <div className="grid p-5 xl:p-10 grid-cols-1  xl:grid xl:grid-cols-4 md:grid md:grid-cols-2   w-full gap-10 h-[700px] xl:h-[500px] bg-white " >
  <div className='flex items-center  gap-4  '>
    {counterOn &&
    <h1 className="text-7xl xl:text-5xl font-bold text-[#97BC7E] tracking-widest" >
    <CountUp start={0} end={1000} duration={4} delay={0} />
  </h1>}
       <h1 className='tracking-widest text-[#999999]'>YEARS OF <br />
EXPERIENCED</h1>
       
  </div>
  <div className='flex items-center  gap-4 '>
    {counterOn &&
    <h1 className="text-7xl xl:text-5xl font-bold text-[#97BC7E] tracking-widest" >
    <CountUp start={0} end={2500} duration={4} delay={0} />
  </h1>}
       <h1 className='tracking-widest text-[#999999]'>PROJECT
DONE
</h1>
       
  </div>
  <div className='flex items-center   gap-4'>
    {counterOn &&
    <h1 className="text-7xl xl:text-5xl font-bold text-[#97BC7E] tracking-widest" >
    <CountUp start={0} end={500} duration={4} delay={0} />
  </h1>}
       <h1 className='tracking-widest text-[#999999]'>LICENSED
 <br />
 ARCHITECT</h1>
       
  </div>
  <div className='flex items-center   gap-4'>
    {counterOn &&
    <h1 className="text-7xl xl:text-5xl font-bold text-[#97BC7E] tracking-widest" >
    <CountUp start={0} end={67} duration={4} delay={0} />
  </h1>}
       <h1 className='tracking-widest text-[#999999]'>HAPPY
 <br />
CUSTOMER</h1>
       
  </div>
</div>
</ScrollTrigger>
{/* Count Up Ends */}
</>
  )
}

export default Counter