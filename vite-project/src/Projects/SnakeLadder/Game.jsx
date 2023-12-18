import RollDice from "../RollDice/RollDice";
import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [dice, setDice] = useState(1);
  const [position, setPosition] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

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

  const generateRandomNumber = () => {
    setDice(Math.floor(Math.random() * 6) + 1);
    gameActive();
  };

  
  const gameActive = () => {
      if (dice === 6) {
          setIsGameActive(true);
        }
    startGame();
  };

  const startGame = () => {
      if (dice === 6 && !isGameActive) {
          alert("let the game begins");
        } else {
            continueGame();
        }
  };
  
  const continueGame = () => {
      if (isGameActive === true) {
      setPosition(position + dice);
    }
    if (position <= 36) {
        snakeAndLadder();
    }
    if (position === 36) {
      endGame();
    }
};

const snakeAndLadder = () => {
    if (SNAKES[position]) {
        const snakesEnd = SNAKES[position];
        setPosition(SNAKES[position]);
        alert(
            `You got bit by a snake! Descending from ${position} to ${snakesEnd}`
            );
        }
        if (LADDERS[position]) {
            const laddersEnd = LADDERS[position];
            alert(
                `You've found a ladder! Climbing from ${position} to ${laddersEnd}`
      );
      setPosition(LADDERS[position]);
    }
};

const endGame = () => {
    alert("congratulation");
};

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <Board position={position} SNAKES={SNAKES} LADDERS={LADDERS} />
        <RollDice generateRandomNumber={generateRandomNumber} dice={dice} />
      </div>
    </>
  );
}
