"use client";
import React, { useState } from "react";

interface initialCards {
  id: number;
  value: number;
  flipped: boolean;
}
const initialCards: initialCards[] = [
  { id: 1, value: 1, flipped: false },
  { id: 2, value: 2, flipped: false },
  { id: 3, value: 3, flipped: false },
  { id: 4, value: 4, flipped: false },
  { id: 5, value: 5, flipped: false },
  { id: 6, value: 6, flipped: false },
  { id: 7, value: 1, flipped: false },
  { id: 8, value: 2, flipped: false },
  { id: 9, value: 3, flipped: false },
  { id: 10, value: 4, flipped: false },
  { id: 11, value: 5, flipped: false },
  { id: 12, value: 6, flipped: false },
];
export default function Page() {
  const [FirstCard, setFirstCard] = useState<number>(0);
  const [numberOfSelectedCard, setNumberOfSelectedCard] = useState<Number>(0);
  const [cards, setCards] = useState<initialCards[]>(initialCards);

  const check = (firstCardIndex: number, secondCardIndex: number) => {
    if (cards[FirstCard].value == cards[secondCardIndex].value) {
      console.log("Match found!");
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card, index) =>
            index === firstCardIndex || index == secondCardIndex
              ? { ...card, flipped: false }
              : card
          )
        );
      }, 700);
    }
    setNumberOfSelectedCard(0);
    setFirstCard(0);
  };
  function handleClick(index: number) {
    if (cards[index].flipped || numberOfSelectedCard === 2) return;
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    if (numberOfSelectedCard == 0) {
      console.log(index);
      setFirstCard(index);
      setNumberOfSelectedCard(1);
    } else if (numberOfSelectedCard == 1) {
      setNumberOfSelectedCard(2);

      check(FirstCard as number, index);
    }
  }

  return (
    <div className="bg-green-800   grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex-wrap w-full gap-4 min-h-screen h-full">
      {cards.map((card, index) => (
        <div
          onClick={() => {
            handleClick(index);
          }}
          className={`cursor-pointer w-[150px] sm:w-[200px] m-auto h-[150px]  sm:h-[200px]
            flex items-center rounded-lg justify-center ${
              card.flipped ? "bg-red-300" : "bg-blue-300"
            }`}
          key={card.id}
        >
          {card.flipped ? card.value : ""}
        </div>
      ))}
    </div>
  );
}
