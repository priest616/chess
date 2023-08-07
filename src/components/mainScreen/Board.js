import React from "react";

const Board = () => {
  const chessIcons = [
    "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
    "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
    "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖",
  ];

  return (
    <div className="flex items-center justify-center px-3 rounded-md shadow-md sm:px-0 ">
      <table className="border border-gray-300 rounded-md ">
        <tbody>
          {[...Array(8)].map((_, row) => (
            <tr key={row}>
              {[...Array(8)].map((_, col) => (
                <td
                  key={col}
                  className={`w-16 h-16 ${
                    (row + col) % 2 === 0 ? "bg-white" : "bg-gray-200"
                  }`}
                >
                  <span className="flex items-center justify-center text-3xl hover:scale-[1.1]">{chessIcons[row * 8 + col]}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;