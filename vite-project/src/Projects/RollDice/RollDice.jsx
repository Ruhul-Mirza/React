import { useState } from 'react'
import './RollDice.css'

function RollDice() {
  const [dice, setDice] = useState(1)
  const images = ['/images/one.png','/images/two.png','/images/three.png','/images/four.png','/images/five.png','/images/six.png']
  function rollDice(){
    const randomNumber = Math.floor(Math.random() * 6) + 1
    setDice(randomNumber)
  }
  return (
    <>
    <h1 className='text-white text-center mt-20 text-7xl'>ROLL DICE</h1>
    <div className="flex items-center min-h-screen m-10">
      <div className='main flex flex-row-reverse w-full items-center justify-between p-5 rounded-2xl'>
        <div className='h-20'>
          <img className='h-full' src={images[dice-1]} alt={dice} />
        </div>
        <div className="">
          <button className='rounded-xl border px-5 py-2 bg-white text-emerald-900 font-semibold hover:text-white hover:bg-emerald-950 hover:border-none' onClick={rollDice}>Roll Dice</button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default RollDice;
