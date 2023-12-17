import {useState} from "react";
import RollDice from "./components/RollDice";

export default function SnakeLadder({rollDice,diceValue}){
    const initialSquare = [];
    for (let i = 0; i < 100; i++) {
      initialSquare.push(null);
    }
    const [position,setPosition] = useState(0)
    const [step, setStep] = useState(initialSquare);

    const snake = {  
        16: 6,
        47: 26,
        49: 11,
        56: 53,
        62: 19,
        64: 60,
        87: 24,
        93: 73,
        95: 75,
        98: 78,
    }

    const ladder = {
        4: 14,
        9: 31,
        20: 38,
        28: 84,
        40: 59,
        63: 81,
        71: 91,
        80: 100
    }

    const movement = (walk)=>{
        const newPosition = Math.min(position + walk , 99)
        setPosition(newPosition);
    

    if(snake[newPosition+1]){
        setPosition(snake[newPosition + 1] - 1)
    }else if(ladder[newPosition + 1]){
        setPosition(ladder[newPosition + 1] - 1)
    }
}

    const Dice = ()=>{
        const diceValue = Math.floor(Math.random() * 6) + 1;
        movement(diceValue)
    }
    return(
        <div className="App">
      <h1>Snake and Ladder Game</h1>
      <div className="board">
        {step.map((step, index) => (
          <div key={index} className="step">
            {step}
          </div>
        ))}
      </div>
      <RollDice rollDice={Dice} name={diceValue} />
    </div>
    )
}