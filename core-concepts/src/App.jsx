import React from "react";


const Welcome = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

const Button = () => {
  return (
    <button>Click Me</button>
  )
}

const App = () => {
  return (
    <div>
      <h1>React Core Concepts</h1>
      <Welcome></Welcome>
      <Button></Button>
    </div>
  )
}

export default App;