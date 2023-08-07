import React from 'react'
import { queen, horse, player1 } from '../assets'

const Header = () => {
  return (
    <div>
       <div className='flex justify-between px-4 py-8 text-white shadow-md'>
         <div className='flex items-center justify-start w-full space-x-5'>
           <img src={player1} className='rounded-full w-[50px]' alt=''/>
           <div>
            <div>Nicolas Jackson</div>
            <div>Points: 1195 &#46; RUS</div>
           </div>
           <div>
             <div className='text-xs'>Time </div>
             <div className='text-4xl'>0:11</div>
           </div>
           
         </div>
         <div className='flex justify-end w-full space-x-5'>
           <div className='w-[2rem] h-[2rem] bg-white rounded-sm flex items-center justify-center'><span className='text-black'>+2</span></div>
           <img className='h-[2rem]'  src={horse}/>
           <img className='h-[2rem]' src={queen}/>
         </div>
       </div>
    </div>
  )
}

export default Header