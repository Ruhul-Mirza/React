import React, { useEffect, useState } from "react";

const NUMBERS = [
  [36, 35, 34, 33, 32, 31],
  [25, 26, 27, 28, 29, 30],
  [24, 23, 22, 21, 20, 19],
  [13, 14, 15, 16, 17, 18],
  [12, 11, 10, 9, 8, 7],
  [1, 2, 3, 4, 5, 6],
];

const SNAKES = {
  8: 2,
  16: 6,
  23: 15,
  28: 18,
};
const LADDERS = {
  5: 10,
  13: 19,
  25: 33,
};

export default function Board({ dice, isGameActive }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (isGameActive) {
      setPosition(1);
    }
  }, [isGameActive]);

  useEffect(() => {
    if (!!isGameActive) {
      const targetPosition = Math.floor(position + dice, 36);
      if (targetPosition <= 36) setPosition(targetPosition);
    }
  }, [dice]);

  useEffect(() => {
    if (position === 36) {
      alert("Congratulations");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }

    if (SNAKES[position]) {
      setPosition(SNAKES[position]);
      alert(
        `You got bit by a snake! Descending from ${position} to ${SNAKES[position]}`
      );
    }
    if (LADDERS[position]) {
      setPosition(LADDERS[position]);
      alert(
        `You've found a ladder! Climbing from ${position} to ${LADDERS[position]}`
      );
    }
  }, [position]);

  return (
    <>
      <div className="mt-5 bg-white shadow-black shadow-lg">
        {NUMBERS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((number) => (
              <div
                key={number}
                className={`${position === number ? "border-8 bg-purple" : ""} 
                            ${
                              SNAKES[number]
                                ? "bg-[url('./src/Projects/SnakeLadder/images/snake.png')] bg-cover"
                                : ""
                            } 
                            ${
                              LADDERS[number]
                                ? "bg-[url('./src/Projects/SnakeLadder/images/ladder.png')] bg-center bg-cover"
                                : ""
                            } 
                            w-20 h-20 border border-purple-900 flex items-center justify-center`}
              >
                <span className="text-xl shadow-gray-700 drop-shadow-md font-extrabold text-center">
                  {number}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
