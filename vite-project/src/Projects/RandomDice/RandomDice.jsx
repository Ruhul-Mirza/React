import { useState } from 'react'

const IMAGES = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png']
function RandomDice() {
  const [count, setCount] = useState(1)
  
  function generateRandomNumber () {
    setCount(Math.floor(Math.random() * 6) + 1)
  }

  return (
      <div className='flex mt-28 gap-12 justify-center items-center'>
        <img className='h-40' src={`./src/Projects/RandomDice/images/${IMAGES[count - 1]}`}/>
        <button onClick={generateRandomNumber} className='bg-purple-700 p-4 rounded-xl text-white font-semibold'>Roll The Dice</button>
      </div>
  )
}

export default RandomDice