import React from 'react';
import '../App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import ScrollMenuComponent from './ScrollMenuComponent.js';

function MyChallenges() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <h1 className="howdy">My Challenges</h1>
        <p>Coming soon, thank you for your fucking patience.</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MyChallenges;