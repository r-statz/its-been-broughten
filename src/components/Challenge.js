import React from 'react';
import '../App.css';
import ChallengeFooter from './ChallengeFooter.js';
import Header from './Header.js';
import { useLocation, Link } from 'react-router-dom';

function Challenge() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const name = query.get('name');
  const description = query.get('description');
  const list = [
    'Che la Vie',
    'Anchovy Special',
    'J.LanCaster',
    `The "Dog" Bodene`,
    'Lucy Liu',
    'Sherlock Holmes',
    'James Bond',
    'Franky Four Fingers',
  ];

  return (
    <div className="App">
      <Header></Header>
      <div className="challenge-body ">
        <h1 className="howdy">{name}</h1>
        <p className="sub-howdy">What's the Challenge? {description}</p>
        <div>
          <h2>Participants</h2>
          <ul>
            {list.map((name, index) => {
              return (
                <div className="name-item" key={index}>
                  <Link className="item" to="/home">
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

export default Challenge;
