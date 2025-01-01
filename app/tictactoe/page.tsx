"use client";
import React, {  useState } from "react";

export default function TicTacToe() {
  const [ticTacToe, setTicTacToe] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [mark, setMark] = useState("X");

  const [winner, setWinner] = useState("");
  function evaluate() {
    for (let i = 0; i < 3; i++) {
      if (
        ticTacToe[i][0] == ticTacToe[i][1] &&
        ticTacToe[i][1] == ticTacToe[i][2] &&
        ticTacToe[i][0] != ""
      ) {
        setWinner(ticTacToe[i][0]);
      } else if (
        ticTacToe[0][0] == ticTacToe[1][1] &&
        ticTacToe[1][1] == ticTacToe[2][2] &&
        ticTacToe[0][0] != ""
      ) {
        setWinner(ticTacToe[0][0]);
      } else if (
        ticTacToe[0][2] == ticTacToe[1][1] &&
        ticTacToe[1][1] == ticTacToe[2][0] &&
        ticTacToe[0][2] != ""
      ) {
        setWinner(ticTacToe[0][2]);
      } else if (
        ticTacToe[0][i] == ticTacToe[1][i] &&
        ticTacToe[1][i] == ticTacToe[2][i] &&
        ticTacToe[0][i] != ""
      ) {
        setWinner(ticTacToe[0][i]);
      }
    }
  }

  if (winner) {
    setTimeout(() => {
      setTicTacToe([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      setWinner("");
      setMark((prev) => (prev == "X" ? "O" : "X"));
    }, 4000);
    return (
      <div className="text-4xl flex items-center justify-center w-screen h-screen">
        {" "}
        {winner} is the Winner{" "}
      </div>
    );
  }

  return (
    <div className="bg-black w-[100vw] h-screen  gap-4 grid grid-cols-3 p-10  items-center ">
      {ticTacToe.flat().map((cell, index) => (
        <div
          onClick={(e) => {
            const firstKey = index / 3 < 1 ? 0 : index / 3 < 2 ? 1 : 2;
            const secondKey =
              firstKey == 0 ? index : firstKey == 1 ? index - 3 : index - 6;
            const newList = ticTacToe;
            if (
              newList[firstKey][secondKey] == "X" ||
              newList[firstKey][secondKey] == "O"
            )
              return;
            newList[firstKey][secondKey] = mark;
            setMark((prev) => (prev == "X" ? "O" : "X"));
            setTicTacToe(newList);
            evaluate();
          }}
          key={index}
          className="text-4xl border-2  p-8 h-24 w-24  m-auto text-white"
        >
          {cell}
        </div>
      ))}
    </div>
  );
}
