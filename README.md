## What is React?

-   React is a javaScript library for building web and mobile user interfaces.

## Why learn React?

-   React has a component-based architecture
    -   break UI into small,reusable pieces,which can be composed to make more complex UIs
-   React is declarative
    -   descirbe what you want the UI to look like,and React takes care of building and updating the actual UI.

## How to create a React app

-   npm create vite@latest

## Project Structure

-   package.json - Specifies what tools and libraries we need to build our app

## Components

-   A component is a piece of the UI that has its own logic and appearance

-   It is just a js function that returns some HTML describing what should appear on screen.

-   Components are reusable

```jsx
import React from "react";
    function()
    {
        return <h1>Hello World</h1>
    }
```

## Importing and Exporting Components

-   Organizing components into separate files makes your code more maintainable.
-   Each Component has its own space,and you can easily find and update components as your app grows.

-   This modular approach means you can reuse components across different parts of your app just by importing them.

## JSX

-   JSX is a syntax extension for JS that lets us write markup that looks similar to HTML,but with the full power of JavaScript behind it.

-   Example

```jsx
export const HelloWithJsx = () => {
    return (
        <div id="container">
            <h1>Hello Adarsh</h1>
        </div>
    );
};
```

## React without JSX

-   _createElement()_
    -This createElement method needs at least three arguments:

    -   1. The HTML element to be rendered(as a string)

    -   2. Any properties/attributes for that element(or null if there are't any)

    -   3. The children of that element

-   Example

```js
export const HelloWithoutJsx = () => {
    return React.createElement(
        'div',
        {
            id: 'container',
        },
        React.createElement('h6', null, 'Hello Adarsh')
    );
};
```

## Rules of JSX

-   Rule #1: Every component must return a single root element

```jsx
export const HelloWithJsx = () => {
    return (
        <div id="container">
            <h1>Hello Adarsh</h1>
            <p>I am a Java Dev </p>
        </div>
    );
};
```

-   here we wrapped h1 and p tag with div tag

-   Rule #2: Every single tag must be properly closed

-   Rule #3: Attribute names must be written in camelCase

## Props(Properties)

-   A parent component can pass data down to its children through props

                   App(parent)
                        |
                        |props
                        |
                    Welcome(child)

```jsx
const Welcome = (props) => {
    return (
        <div>
            <h1>Welcome {props.name}</h1>
        </div>
    );
};
```
