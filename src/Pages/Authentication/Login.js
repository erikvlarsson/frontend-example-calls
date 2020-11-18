import React, { useState } from "react";

export default function Login({ goToSignup, login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    login(userData);
    alert("logged in!");
  };

  const handleWrite = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const className = "margin-5 padding-10";

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          placeholder="email"
          className={className}
          onChange={handleWrite}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          className={className}
          onChange={handleWrite}
        />
        <button type="submit" className={className + " submitButton"}>
          Log in
        </button>
        <button onClick={goToSignup} className={className}>
          Sign up
        </button>
      </form>
    </div>
  );
}
