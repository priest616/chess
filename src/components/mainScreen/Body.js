import React, { useEffect, useState } from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import Aside from "./Aside";
import Table from "./Table";
import Board from "./Board";
import MobileNav from "../nav/MobileNav";

function Body() {
  return (
    <div>
      <div className="h-fit pt-[4rem] bg-[#252525] flex flex-col items-center justify-center">
        <div className="container border my-[2rem] rounded-xl bg-gradient-to-bl from-[#d3bbbb] via-[#666565] to-[#3f3f3f] flex flex-col justify-between">
          <PlayerOne />

          <div className="relative flex flex-col items-center justify-around space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
            <Aside />

            <MobileNav />

            <Board />

            <Table />
          </div>

          <PlayerTwo />
        </div>
      </div>
    </div>
  );
}

export default Body;
