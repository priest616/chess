import React, { useState } from "react";
import { FaBars, FaChartBar, FaHome, FaPlay, FaQuestion } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsPersonAdd, BsToggle2Off } from "react-icons/bs";
import { Fade, Slide } from "react-awesome-reveal";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountClicked, setAccountClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const accontClick = () => {
    setAccountClicked(!accountClicked);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const desktopMenus = [
    {
      menu: "Home",
    },
    {
      menu: "Play",
    },
    {
      menu: "Leaderboard",
    },
    {
      menu: "About",
    },
  ];
  const mobileMenus = [
    {
      menu: "Home",
      icon: <FaHome />,
    },
    {
      menu: "Play",
      icon: <FaPlay />,
    },
    {
      menu: "Leaderboard",
      icon: <FaChartBar />,
    },
    {
      menu: "About",
      icon: <FaQuestion />,
    },
  ];

  return (
    <Slide delay={0} direction="down" className="fixed z-10 text-white bg-[#666666]">
      <nav className="w-screen py-4 shadow-md">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between px-4">
            <div className="text-xl font-bold">
              <a href="/">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/3d-chess/256/emblem.png"
                  className="w-[2rem]"
                  alt=""
                />
              </a>
            </div>
            <Slide>
              <div className="hidden space-x-6 md:flex">
                {desktopMenus.map((menus, index) => {
                  return (
                    <a
                      href={index === 0 ? "/" : index === 1 ? "/play" : "#"}
                      className="font-[500]  hover:text-white z-10"
                      key={index}
                    >
                      <span className="hover:underline">{menus.menu}</span>
                    </a>
                  );
                })}
                <div>
                  <a
                    href="#"
                    onClick={accontClick}
                    className="text-white hover:text-white"
                  >
                    Account
                  </a>
                  <ul
                    className={`flex flex-col justify-end w-fit absolute items-center gap-2 px-5 py-1 text-gray-300 hover:text-white bg-gray-900 rounded ${
                      accountClicked ? "" : "hidden"
                    }`}
                  >
                    <li className="w-full text-left">
                      <a href="/login">LogIn</a>
                    </li>
                    <li>
                      <a href="/signup">SignUp</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Slide>
            <div className="md:hidden">
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <FaBars onClick={() => setIsOpen((isOpen) => !isOpen)} />
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              className="absolute z-10 w-full px-4 mt-4 bg-gray-900 md:hidden h-fit"
            >
              {mobileMenus.map((menus, index) => {
                return (
                  <a
                    key={index}
                    href="/"
                    className="relative flex items-center gap-2 py-2 text-white hover:text-white"
                  >
                    {menus.icon} {menus.menu}
                  </a>
                );
              })}

              <a
                href="#"
                onClick={accontClick}
                className="flex items-center gap-2 py-2 text-gray-300 hover:text-white"
              >
                <BsPersonAdd /> Account
              </a>
              <ul
                className={`flex flex-col items-center gap-2 px-5 py-1 text-gray-300 w-fit hover:text-white ${
                  accountClicked ? "" : "hidden"
                }`}
              >
                <li>
                  <a href="/login">LogIn</a>
                </li>
                <li>
                  <a href="/signup">SignUp</a>
                </li>
              </ul>
            </motion.nav>
          )}
        </div>
      </nav>
    </Slide>
  );
};

export default Header;
