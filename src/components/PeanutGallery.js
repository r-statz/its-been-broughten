import React from 'react';
import '../App.css';
import Footer from './Footer.js';
import Header from './Header.js';

function toPeanutGallery() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <div className="challenge-body top-padding">
        <h1 className="howdy">Trash Talk Forum</h1>
        <p>Coming soon, thank you for your gracious fucking patience.</p>

      </div>
    </div>
  );
}

export default toPeanutGallery;