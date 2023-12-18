import React, { useEffect , useState } from "react";
export default function Board({ position ,SNAKES ,LADDERS }) {
  
  const NUMBERS = [
    [36, 35, 34, 33, 32, 31],
    [25, 26, 27, 28, 29, 30],
    [24, 23, 22, 21, 20, 19],
    [13, 14, 15, 16, 17, 18],
    [12, 11, 10, 9, 8, 7],
    [1, 2, 3, 4, 5, 6],
  ];
  

  return (
    <>
      <div className="mt-5 bg-white shadow-black shadow-md">
        {NUMBERS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((number) => (
              <div
                key={number}
                className={`w-20 h-20 border border-emerald-900  text-emerald-900  flex items-center justify-center
                ${ position === number ? "bg-emerald-900" : "bg-white"} 
                ${position === number ? "text-white" : "text-emerald-900"}`}
              >
                {number}
                {LADDERS[number] && <span className="ladders">🚪</span>}
                {SNAKES[number] && <span className="snakes">🐍</span>}
              </div>
            ))}
          </div>
        ))}
        
      </div>
    </>
  );
}
