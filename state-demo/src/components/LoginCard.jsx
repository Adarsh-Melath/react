import { useState } from 'react';
export const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }
  return (
    <>
      <h1>{isLoggedIn ? "Welcome, User!" : "Please log in."}</h1>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      <div>
        <input type="text" placeholder="Type a message" value={message} onChange={handleChange} />
      </div>
      <p>{message}</p>
    </>
  )
}