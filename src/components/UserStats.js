import React from 'react';
import '../App.css';
import Footer from './Footer.js';
import Header from './Header.js';

function UserStats() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <h1 className="howdy">UserStats</h1>
        <p>Coming soon, thank you for your fucking patience.</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default UserStats;