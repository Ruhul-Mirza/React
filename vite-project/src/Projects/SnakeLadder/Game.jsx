import Dice from "./Dice";
import { useState, useEffect } from "react";
import Board from "./Board";

export default function Game() {
  const [dice, setDice] = useState(1);
  const [isGameActive, setIsGameActive] = useState(false);

  const generateRandomNumber = () => {
    setDice(Math.floor(Math.random() * 6) + 1);
  };
  
  useEffect(() => {
    if (dice === 6 && isGameActive === false) {
      setIsGameActive(true);
      alert("Game Begins");
    }
  }, [dice]);

  return (
    <>
      <div className="flex flex-col items-center gap-6 h-screen bg-purple-900">
        <Board dice={dice} isGameActive={isGameActive} />
        <Dice dice={dice} onClick={generateRandomNumber} />
      </div>
    </>
  );
}
