"use client"
import React, { useEffect, useRef } from 'react';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

const Cards = () => {
   
  return (
    <div className='w-full py-5  h-[1250px] sm:h-[1130px] xl:h-[400px] md:h-[600px] bg-[#96BB7C]'>
        <div className='grid grid-cols-1 p-10 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-4 '>
            <div>
                <First/>
            </div>
            <div>
                <Second/>
            </div>
            <div>
                <Third/>
            </div>
            <div>
                <Fourth/>
            </div>
        </div>
    </div>
  )
}

export default Cards