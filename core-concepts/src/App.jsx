import React from "react";
import Welcome from "./component/Welcome";
import Button from "./component/Button";
import { HelloWithJsx, HelloWithoutJsx } from "./component/Hello";
import { Person } from "./component/Person";
import { Greeting } from "./component/Greeting";
import { UserCard } from "./component/UserCard";
import { CardWrapper } from "./component/CardWrapper";
import { UserDetails } from "./component/UserDetails";
import { ProductList } from "./component/ProductList";
const App = () => {
  return (
    <div>
      <ProductList></ProductList>
      {/* <UserDetails name="Adarsh" isOnline={true} isPremium={false}></UserDetails> */}
      {/* <CardWrapper title="User Profile">
        <p>Adarsh</p>
        <p>adarshmelath1305@gmail.com</p>
        <button>Edit profile</button>
      </CardWrapper> */}
      {/* <UserCard name="Adarsh" age={18} city={"Berlin"} email={"adarsh123@gmail.com"}></UserCard> */}
      {/* <Greeting name="Adarsh" message="Good Morning!"></Greeting>
      <Greeting message="Welcome"></Greeting>
      <Greeting name="Adarsh" ></Greeting>
      <Greeting></Greeting> */}
      {/* <Person name="Adarsh" age={18} skill={["React ", "Node ", "Express"]}></Person> */}
      {/* <Welcome name="Adarsh" />
      <Welcome name="Sreerag"></Welcome>
      <Welcome name="Nadeem" />
      <Button></Button> */}
    </div>
  )
}

export default App;