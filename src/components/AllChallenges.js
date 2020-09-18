import React, { useState } from 'react';
import '../App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import { useHistory, Link } from 'react-router-dom';

function AllChallenges() {
  const history = useHistory();
  // const [name, setName] = useState('');

  const handleClick = ({ name }) => {
    history.push(`/challenge?name=${name}`);
  };

  const list = [
    '30 Day Plank',
    `24 Hour Marathon & Chores`,
    'Learn how to make bread like a boss.',
    '7 days of Yoga',
    '200 pushups in a week',
    '25 pushups under a minute',
    'Run 2 miles without stopping',
    '2 weeks Vegan',
  ];

  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <h1 className="howdy">All Challenges</h1>
        {list.map((name, index) => {
          return (
            <div className="list" key={index}>
              <Link className="item" to={`/challenge/${name}`} >{name}</Link>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AllChallenges;
