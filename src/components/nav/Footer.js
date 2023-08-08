import React from "react";
import { Fade } from "react-awesome-reveal";
import { chessIcon } from "../../assets";

const Footer = () => {
  return (
    <Fade>
      <footer className="py-8 bg-gray-900 opacity-[0.6]">
        <div className="container mx-auto text-center text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <img src={chessIcon} alt="" className="w-[10rem]" />
              <h2 className="text-2xl font-bold">Chess Game</h2>
              <p>A place for chess enthusiasts to play online.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/play">Play Now</a>
                </li>
                <li>
                  <a href="/rules">Rules</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p>Email: info@chessgame.com</p>
              <p>Phone: +254 723456789</p>
            </div>
          </div>
          <div className="mt-8">
            <p>
              &copy; {new Date().getFullYear()} Chess Game. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
