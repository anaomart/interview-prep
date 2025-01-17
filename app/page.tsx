import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link
        className="border-2 p-2 m-10 h-full my-10 bg-blue-500"
        href={"/memorygame"}
      >
        Memory Game
      </Link>
      test{" "}
      <Link
        className="border-2 p-2 m-10 h-full my-10 bg-blue-500"
        href={"/selectall"}
      >
        Select All
      </Link>
      <Link
        className="border-2 p-2 m-10 h-full my-10 bg-blue-500"
        href={"/tictactoe"}
      >
        TicTacToe
      </Link>
      <Link
        className="border-2 p-2 m-10 h-full my-10 bg-blue-500"
        href={"/move"}
      >
        move selected
      </Link>
      <Link
        className="border-2 p-2 m-10 h-full my-10 bg-blue-500"
        href={"/folder"}
      >
       folder Structure
      </Link>
    </div>
  );
}
