import React from 'react';
import '../App.css';
import ChallengeFooter from './ChallengeFooter.js';
import Header from './Header.js';
import { useLocation, Link } from 'react-router-dom';

function BrainGames() {
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }
  // let query = useQuery();
  const name = 'Brain Games';
  // const description = query.get('description');
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
      <div className="challenge-body">
        <h1 className="howdy margin-bottom-md">{name}</h1>
        <div>
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
      <ChallengeFooter></ChallengeFooter>
    </div>
  );
}

export default BrainGames;