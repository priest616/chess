import React, { useState } from 'react';
import { FaBars, FaFacebook, FaGoogle, FaMixer } from "react-icons/fa";

import { bug, chat, flip, plus, settings, share } from '../../assets';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  ];

  const account = [
    {
        image: FaGoogle,
        title: "Google"
    },
    {
        image: FaFacebook,
        title: "Facebook"
    }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <FaBars className='absolute text-2xl text-white top-2 left-4 lg:hidden' onClick={toggleMenu}/> 
      <div className='flex'>
          <div className={`absolute top-0 z-10 block space-y-5 text-white lg:hidden left-0 bg-[#5a5a5a] px-[2rem] py-[2rem] h-full rounded ${isMenuOpen ? '' : 'hidden'} transition-all duration-1000 ease-in-out`}>
            <FaMixer className='absolute text-2xl top-2 right-2' onClick={toggleMenu}/>
            {aside.map((menu, index) => (
              <div className='flex flex-col items-center hover:bg-gray-800' key={index}>
                <img src={menu.image} className='w-[2rem]' alt={menu.title} />
                <div>{menu.title}</div>
              </div>
            ))}
          </div>
          {/* <div>
              {account.map((acc, index)=>{
                return(
                    <div>
                        <div key={index}>{acc.image}</div>
                        <div>{acc.title}</div>
                    </div>
                )
              })}
          </div> */}
      </div>
    </div>
  );
};

export default MobileNav;