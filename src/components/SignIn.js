import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const handleClick = () => {
    history.push('/home')
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <form className="form-container">
          <h2 className="signin-text">Log the fuck in, why dontcha?</h2>
          {/* <p></p> */}
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
        <button 

        className="submit-btn"
        onClick={handleClick}>
          Login
        </button>
      </div>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default SignIn;
