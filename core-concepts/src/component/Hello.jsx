import React from "react";

export const HelloWithJsx = () => {
  return (
    <div id="container">
      <h1>Hello Adarsh</h1>
    </div>
  )
}

export const HelloWithoutJsx = () => {
  return React.createElement("div", {
    id: "container"
  }, React.createElement("h6", null, "Hello Adarsh"));
}; 