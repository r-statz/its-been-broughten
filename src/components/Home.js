import React from 'react';
import '../App.css';
import Card from './Card.js';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-title">It's Been Broughten!</p>
        <p className="header-subtitle">Oh yeah it has...</p>
      </header>
      <div className="App-body">
        <p>
          Howdy, Anchovy Special...You ready to bring it?
        </p>
        {/* <p>
          You ready to bring it?
        </p> */}
        <Card></Card>
      </div>
      <footer  className="App-footer-with-links">
        <p>All challenges</p>
        <p>My Challenges</p>
        <p>Trash Talk Forum</p>
        <p>User Stats</p>
      </footer>
    </div>
  );
}

export default Home;