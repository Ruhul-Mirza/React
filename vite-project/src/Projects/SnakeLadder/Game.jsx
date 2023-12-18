import {Board} from "./Board";
import { useState } from "react";

export default function Game(){
    const [position, setPosition] = useState(0)
    const [msg,setMsg] = useState('')
  
    const snake = {  
      8 : 2,
      16 : 6,
      23 : 15,
      28 : 18,
      48 : 10
  }
  
  const ladder = {
      5:10,
      13:19,
      25:33,
      38:49
  }
  
    const rollDice = ()=>{
      const diceValue = Math.floor(Math.random() * 6) + 1;
      const currentPosition = position + diceValue;
      setPosition(currentPosition)
      
      if (snake[currentPosition]) {
        const snakesEnd = snake[currentPosition]
        alert(`You got bit by a snake! Descending from ${currentPosition} to ${snakesEnd}`)
        setPosition(snake[currentPosition]);
      }else if(ladder[currentPosition]){
        const ladderEnd = ladder[currentPosition]
        alert(`You've found a ladder! Climbing from ${currentPosition} to ${ladderEnd}`)
        setPosition(ladder[currentPosition]);
      }else if(currentPosition===50){
        endGame()
      }else {
        setPosition(currentPosition)
        setMsg(`You rolled a ${diceValue}`);
      }
      
    };
    function endGame(){
        alert('Congratulations, You won the game')
    }
    
    return(
        <>
            <div className="main flex justify-between w-full gap-5">
                <div className="board flex flex-wrap w-80">
                    <Board position={position}/>
                </div>
                <div className="dicemain">
                    <div className="dice">
                    <button onClick={rollDice} className="mt-10 h-10 px-10 mx-auto bg-blue-500 text-white">Roll Dice</button>
                    </div>
                    <div className="message">
                        <h1 className="mt-10 text-center font-semibold text-3xl text-black">{msg}</h1>
                    </div>    
                </div>
            </div>
        </>
    )
}