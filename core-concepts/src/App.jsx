import React from "react";
import Welcome from "./component/Welcome";
import Button from "./component/Button";
import { HelloWithJsx, HelloWithoutJsx } from "./component/Hello";
import {Person} from "./component/Person";
const App = () => {
  return (
    <div>
      <Person name={"Adarsh"} age={18} skill={["React ", "Node ", "Express"]}></Person>
      {/* <Welcome name="Adarsh" />
      <Welcome name="Sreerag"></Welcome>
      <Welcome name="Nadeem" />
      <Button></Button> */}
    </div>
  )
}

export default App;