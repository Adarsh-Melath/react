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

## Props pattern

-   Default props

    -   the default value is only if the prop is missing or if you pass undefined

    -   if you pass null or 0,the default value wont be used

    -   example:

        in App.jsx

        ```jsx
        <Greeting name="Adarsh" message="Good Morning!"></Greeting>
        <Greeting message="Welcome"></Greeting>
        <Greeting name="Adarsh" ></Greeting>
        <Greeting></Greeting>

        ```

        in Greeting jsx

        ```jsx
        export const Greeting = ({ name = 'Guest', message = 'Hello' }) => {
            return (
                <>
                    <h2>
                        {message} {name}
                    </h2>
                </>
            );
        };
        ```

-   Forwarding props with spread operator

    -   example:

        in App.jsx

        ```jsx
        <UserCard
            name="Adarsh"
            age={18}
            city={'Berlin'}
            email={'adarsh123@gmail.com'}
        ></UserCard>
        ```

        in UserCard.jsx

        ```jsx
        import { UserInfo } from './UserInfo';

        export const UserCard = (props) => {
            return (
                <>
                    <h2>User Details</h2>
                    <UserInfo {...props}></UserInfo>
                </>
            );
        };
        ```

        in UserInfo.jsx

        ```jsx
        export const UserInfo = ({ name, age, city, email }) => {
            return (
                <div>
                    <h3>{name}</h3>
                    <p>Age: {age}</p>
                    <p>City: {city}</p>
                    <p>Email: {email}</p>
                </div>
            );
        };
        ```

-   Passing JSX as children

    -   in HTML,you knwo that it is natural to nest elements inside each other

    -   In React ,you can do the exact same thing with components

    -   exmaple :

    in App.jsx

        ```jsx
            <CardWrapper title="User Profile">
            <p>Adarsh</p>
            <p>adarshmelath1305@gmail.com</p>
            <button>Edit profile</button>
            </CardWrapper>
        ```

    in CardWrapper.jsx

    ```jsx
    export const CardWrapper = ({ title, children }) => {
        return (
            <div className="card">
                <h1>{title}</h1>
                <div className="card-content">{children}</div>
            </div>
        );
    };
    ```

## Condition rendering

-   Conditional rendering is how we make our components show different content based on different conditions

-   example

    -   show a login button if the user isn't logged in

    -   show their profile if they are logged in

-   4 ways of conditional rendering

    -   if statements : Great for completely different renders or returning null.

    -   example:

    ```jsx
    export const UserDetails = ({ name, isOnline }) => {
        if (isOnline === true) {
            return (
                <div>
                    <h3>Name: {name}</h3>
                    <p>Status: Online</p>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>Name: {name}</h3>
                    <p>Status: Offline</p>
                </div>
            );
        }
    };
    ```

    -   ternary operator(?:) : Perfect for either/or situations

    -   example

    ```jsx
    export const UserDetails = ({ name, isOnline }) => {
        return (
            <div>
                <h3>{name}</h3>
                <span>{isOnline ? 'Online' : 'Offline'}</span>
                <p>
                    {isOnline ? 'Available for chat' : 'Not available for chat'}
                </p>
                {isOnline ? (
                    <button>Send message</button>
                ) : (
                    <small>Check back later</small>
                )}
            </div>
        );
    };
    ```

    -   AND operator(&&) : Ideal for show/hide scenarios

    -   example

    ```jsx
    export const UserDetails = ({ name, isOnline, isPremium }) => {
        return (
            <div>
                <h3>
                    {name}
                    {isPremium && <span>⭐</span>}
                </h3>
                <span>{isOnline ? 'Online' : 'Offline'}</span>
                <p>
                    {isOnline ? 'Available for chat' : 'Not available for chat'}
                </p>
                {isOnline ? (
                    <button>Send message</button>
                ) : (
                    <small>Check back later</small>
                )}
            </div>
        );
    };
    ```

    -   variables :Best for complex logic that would make your JSX messy.
