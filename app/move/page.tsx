"use client";
import { join } from "path";
import React, { useState } from "react";

export default function Page() {
  const [firstBox, setFirstBox] = useState([1, 2, 3]);
  const [secondBox, setSecondBox] = useState([4]);
  const [selected, setSelected] = useState<number[]>([]);

  function handleTransfer(
    from: number[],
    to: number[],
    setFrom: React.Dispatch<React.SetStateAction<number[]>>,
    setTo: React.Dispatch<React.SetStateAction<number[]>>
  ) {
    setTo(Array.from(new Set([...to, ...selected])));
    setFrom([...from.filter((ele) => !selected.includes(ele))]);
    setSelected(selected.filter((ele) => to.includes(ele)));
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <BoxComponent
        box={firstBox}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="flex flex-col gap-4 mx-10">
        <button
          onClick={() => {
            handleTransfer(firstBox, secondBox, setFirstBox, setSecondBox);
          }}
          className="px-8 text-black py-2 bg-white rounded-xl"
        >{`>`}</button>
        <button
          onClick={() => {
            handleTransfer(secondBox, firstBox, setSecondBox, setFirstBox);
          }}
          className="px-8 text-black py-2 bg-white rounded-xl"
        >{`<`}</button>
      </div>
      <BoxComponent
        box={secondBox}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

const BoxComponent = ({
  box,
  selected,
  setSelected,
}: {
  box: number[];
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  return (
    <div className=" flex flex-col gap-4 items-center justify-center border w-[200px] h-[400px] bg-white rounded-xl">
      {box.map((box) => (
        <div
          className="flex items-center justify-center gap-4 text-black"
          key={box}
        >
          <input
            onChange={(e) => {
              const isSelectedBefore =
                selected.indexOf(box) !== -1 ? true : false;
              if (!e.target.checked)
                setSelected(selected.filter((item) => item !== box));
              if (!isSelectedBefore) setSelected([...selected, box]);
            }}
            id={String(box)}
            className="w-8 h-8"
            type="checkbox"
          />
          <span>{box}</span>
        </div>
      ))}
    </div>
  );
};
