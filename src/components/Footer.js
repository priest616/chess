import React from 'react'
import {player2, queen } from '../assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between px-4 py-8 text-white'>
      <div className='flex items-center justify-start w-full space-x-5'>
           <img src={player2} className='rounded-full w-[50px]' alt=''/>
           
           <div className='hidden sm:block'>
            <div>Mary Sydneyleu</div>
            <div>Points: 1195 &#46; RUS</div>
           </div>
           <div>
             <div className='text-xs'>Time </div>
             <div className='text-4xl'>0:09</div>
           </div>
         </div>
         {/* <div className='text-xl lg:text-6xl'>
            CheckMate!
         </div> */}
         <div className='flex justify-end w-full'>
            <img src={queen} alt='' className='h-[2rem]'/>
         </div>
    </div>
  )
}

export default Footer
