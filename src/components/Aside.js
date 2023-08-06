import React from 'react'
import { plus,settings, flip, share,
bug, chat } from '../assets'

const Aside = () => {
    const aside = [
        {
            image: plus,
            title: "New Game"
        },
        {
            image: settings,
            title: "Settings"
        },
        {
            image: flip,
            title: "Flip Board"
        },
        {
            image: share,
            title: "Share Game"
        },
        {
            image: bug,
            title: "Report Bug"
        },
        {
            image: chat,
            title: "Chat"
        }
    ]
  return (
    <div className='lg:grid  2xl:grid-cols-2 gap-4 mx-center mx-[3rem] text-white hidden '>
        {aside.map((action, index) =>{
            return(
                <div key={index} className='flex flex-col items-center'>
                    <img src={action.image} alt='' className='w-[2rem]' />
                    <div>{action.title}</div>
                </div>
            )
        })}
      <button className='bg-[yellow] w-fit p-3 rounded 2xl:mx-[50%] text-black'>Rematch</button>
    </div>
  )
}

export default Aside
