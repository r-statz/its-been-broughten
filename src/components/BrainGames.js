import React from 'react';
import '../App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import { useLocation, Link } from 'react-router-dom';

function BrainGames() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const name = query.get('name');
  const description = query.get('description');
  const list = [
    'NYTM Word Scramble',
    'Logic Fun',
    'Riddle',
    // `The "Dog" Bodene`,
    // 'Lucy Liu',
    // 'Sherlock Holmes',
    // 'James Bond',
    // 'Franky Four Fingers',
  ];

  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <h1 className="howdy">{name}</h1>
        <p className="sub-howdy">What's the Challenge? {description}</p>
        <div>
          <h2>Participants</h2>
          <ul>
            {list.map((name, index) => {
              return (
                <div className="name-item">
                  <Link className="item" key={index}>
                    {name}
                  </Link>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BrainGames;