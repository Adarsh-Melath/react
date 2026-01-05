import { useState } from 'react'
export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count => count + 1);
  }

  const decrement = () => {
    setCount(count => count > 0 ? count - 1 : 0)
  }
  return (
    <div>
      <h1>Count :{count} </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}