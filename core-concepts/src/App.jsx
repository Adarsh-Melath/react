import React from "react";
import Welcome from "./component/Welcome";
import Button from "./component/Button";
import { HelloWithJsx, HelloWithoutJsx } from "./component/Hello";

const App = () => {
  return (
    <div>
      <HelloWithJsx />
      <HelloWithoutJsx />
      <Welcome></Welcome>
      <Button></Button>
    </div>
  )
}

export default App;