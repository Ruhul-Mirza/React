import { useState } from 'react';

function Counter() {
const [counter,setCounter] = useState(0)

  const increment = ()=>{
    // Don't go above 20
    if(counter<20){
      let count = counter + 1
      setCounter(count)
    }
    // To go infinitely upwards
    // let count = counter + 1
    // setCounter(count)
  }
  const decrement = ()=>{
    // Don't go below 0
    if(counter>0){
      let count = counter - 1
      setCounter(count)
    }
    // To go infinitely downwards
    // let count = counter - 1
    // setCounter(count)
  }
  return (
    <>
      <h1>Simple Counter</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter;
