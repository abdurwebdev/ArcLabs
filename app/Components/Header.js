"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [Menu, setMenu] = useState(false)
    const showMenu = ()=>
        {
               const elem=document.getElementById("mainMenu");
               const move=Menu ? "-100%" :"79.5px";
               elem.style.top=move;
               elem.style.transition="ease 0.5s";
               elem.style.transition="ease-out 0.9s";
               elem.style.zIndex="9999";
               setMenu(!Menu);
               
        }
        
  return (
    <div>
        <div className='p-7 text-white  w-full relative h-20 xl:p-14  xl:text-lg xl:text-black xl:bg-white bg-black flex items-center justify-between'>
            <div>
            <div>
                <h1 className='font-extrabold text-3xl'>ArcLab.</h1>
            </div>
            </div>
            <div>
                <button onClick={showMenu} className='text-[#6b8080ca] font-light text-2xl block xl:hidden'>MENU</button>
            </div>
            
            <div className='xl:block hidden  xl:space-x-16 '>
                <Link href="#" className='text-[#96BB54]'>Home</Link>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>About</Link>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Team</Link>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Services</Link>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Project</Link>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Blog</Link>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Contact</Link>
            </div>
        </div>
           {/* Slide Menu Start */}
           <div id='mainMenu' className='p-7 absolute top-[-100%] bg-black h-96 w-full  flex-col flex xl:hidden space-y-5  text-lg text-white'>
            <div>
                <Link href="#" className='text-[#96BB54]'>Home</Link>
            </div>
            <div>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>About</Link>
            </div>
            <div>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Team</Link>
            </div>
            <div>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Services</Link>
            </div>
            <div>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Project</Link>
            </div>
            <div>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Blog</Link>
            </div>
            <div>
                <Link href="#" className='hover:transition-colors hover:text-[#96BB54]'>Contact</Link>
            </div>
           </div>
           {/* Slide Menu Ends */}
    </div>
  )
}

export default Header