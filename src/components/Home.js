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
      <body className="App-body">
        <p>
          Howdy, Anchovy Special...
        </p>
        <p>
          You ready to bring it?
        </p>
        <Card></Card>
      </body>
      <footer  className="App-footer">
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
        <p>Link 4</p>
      </footer>
    </div>
  );
}

export default Home;