import React from 'react';
import '../App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import ScrollMenuComponent from './ScrollMenuComponent.js';

function Home() {
  return (
    <div className="App ">
      <Header></Header>
      <Footer></Footer>
      <div className="challenge-body ">
        <p className="howdy">Howdy, Anchovy Special...</p>
        <p className="howdy">You ready to bring it?</p>
        <ScrollMenuComponent></ScrollMenuComponent>
      </div>
    </div>
  );
}

export default Home;
