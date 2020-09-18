import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function SignIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleClick = () => {
    console.log("clicked but wtf")
    history.push('/home')
  };

// console.log(props, "props")

  return (
    <div className="App">
      <header className="App-header">
        <p className="header-title">It's Been Broughten!</p>
        <p className="header-subtitle">Oh yeah it has...</p>
      </header>
      <div className="App-body">
        <form className="form-container">
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input
            className="form-input"
            type="text"
            placeholder="Email"
            onChange={(email) => setEmail(email)}
          />
          <input
            className="form-input"
            type="text"
            placeholder="Password"
            onChange={(password) => setPassword(password)}
          />
        </form>
        <button onClick={handleClick}>
          {/* <Link to="/">Homes</Link> */}
        </button>
      </div>
      <footer className="App-footer">
        
      </footer>
    </div>
  );
}

export default SignIn;
