"use client";
import React, { useState } from "react";
type item = {
  [key: string]: boolean;
};
function checkAllTrue(object: {}[]): boolean {
  return object
    .map((ele: any) => {
      return Object.values(ele)[0];
    })
    .every((e: any) => e == true);
}
export default function Page() {
  const [selectAll, setSelectAll] = useState(false);
  const [items, setItems] = useState<item[]>([
    { first: true },
    { second: false },
    { third: true },
    { fourth: true },
  ]);
  return (
    <div className="bg-orange-300 p-10 min-h-screen h-full">
      <div>
        <input
          checked={checkAllTrue(items) ? true : selectAll}
          onClick={() => {
            setSelectAll(!selectAll);
            const newItems = items.map((ele, i) => {
              return { [Object.keys(ele)[0]]: !selectAll };
            });
            setItems(newItems);
          }}
          type="checkbox"
        />
        <label>Select All</label>
      </div>
      {items.map((item, i) => (
        <div key={i}>
          <input
            checked={Object.values(item)[0]}
            onClick={() => {
              const newItems = items.map((ele, i) => {
                return Object.keys(ele)[0] == Object.keys(item)[0]
                  ? { [Object.keys(ele)[0]]: !Object.values(item)[0] }
                  : ele;
              });

              setItems(newItems);

              selectAll && setSelectAll(!selectAll);
            }}
            type="checkbox"
          />
          <label>{Object.keys(item)[0]}</label>
        </div>
      ))}
    </div>
  );
}
