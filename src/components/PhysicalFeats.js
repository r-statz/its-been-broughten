import React from 'react';
import '../App.css';
import ChallengeFooter from './ChallengeFooter.js';
import Header from './Header.js';
import { useLocation, Link } from 'react-router-dom';

function PhysicalFeats() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const name = query.get('name');
  const description = query.get('description');
  const list = [
    '30 Day Plank',
    `24 Hour Marathon & Chores`,
    '7 days of Yoga',
    '200 pushups in a week',
    '25 pushups under a minute',
    'Run 2 miles without stopping',
  ];

  return (
    <div className="App">
      <Header></Header>
      <div className="challenge-body top-padding">
        <h1 className="howdy">Physical Feats</h1>
        <div className="list">
          {list.map((name, index) => {
            return (
              <div key={index}>
                <Link
                  className="item"
                  to={`/challenge?name=${name}&description=${description}`}
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <ChallengeFooter></ChallengeFooter>
    </div>
  );
}

export default PhysicalFeats;