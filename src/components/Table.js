import React from "react";

const Table = () => {
  const numbers = [...Array(13)].map((_, index) => index + 1);
  const player1Icons = [
    "♜",
    "♞",
    "♝",
    "♛",
    "♚",
    "♝",
    "♞",
    "♜",
    "♟",
    "♟",
    "♟",
    "♟",
    "♟",
    "♟",
    "♟",
  ];
  const player2Icons = [
    "♙",
    "♙",
    "♙",
    "♙",
    "♙",
    "♙",
    "♙",
    "♖",
    "♘",
    "♗",
    "♕",
    "♔",
    "♗",
    "♘",
    "♖",
  ];

  return (
    <div className="flex items-center justify-center text-white">
      <table className="hidden border border-gray-300 lg:block">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">Number</th>
            <th className="p-2 border border-gray-300">Player 1</th>
            <th className="p-2 border border-gray-300">Player 2</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((number) => (
            <tr key={number}>
              <td className="p-2 border border-gray-300">{number}</td>
              <td className="p-2 border border-gray-300">
                {player1Icons[number - 1]}
              </td>
              <td className="p-2 border border-gray-300">
                {player2Icons[number - 1]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="border border-gray-300 lg:hidden">
        <tbody>
          <tr>
            {numbers.map((number) => (
              <td key={number} className="p-2 border border-gray-300">
                {number}
              </td>
            ))}
          </tr>
          <tr>
            {player1Icons.map((icon, index) => (
              <td key={index} className="p-2 border border-gray-300">
                {icon}
              </td>
            ))}
          </tr>
          <tr>
            {player2Icons.map((icon, index) => (
              <td key={index} className="p-2 border border-gray-300">
                {icon}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
