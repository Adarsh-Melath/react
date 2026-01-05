import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { LoginCard } from './components/LoginCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginCard></LoginCard>
      {/* <h1>Hello World!</h1>
      <Counter /> */}
    </>
  )
}

export default App
