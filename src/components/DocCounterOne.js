import React from 'react'
import useCounter from '../hooks/useCounter'

//custom hooks example 2
function DocCounterOne() {
    const [count, increment, decrement, reset] = useCounter(20, 10) 

  return (
    <div>
       <h2>count = {count}</h2>
       <button onClick={increment}>Increment</button> 
       <button onClick={decrement}>Decrement</button> 
       <button onClick={reset}>Reset</button> 
    </div>
  )
}

export default DocCounterOne