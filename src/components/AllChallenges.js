import React, { useState } from 'react';
import '../App.css';
import { useHistory, Link } from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';
import ChallengeCard from './ChallengeCard.js';

function AllChallenges() {
  const history = useHistory();
  const description = 'Hot dog eating contest, bitches!!!';
  // const list = [
  //   '30 Day Plank',
  //   `24 Hour Marathon & Chores`,
  //   'Learn how to make bread like a boss.',
  //   '7 days of Yoga',
  //   '200 pushups in a week',
  //   '25 pushups under a minute',
  //   'Run 2 miles without stopping',
  //   '2 weeks Vegan',
  // ];

  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <div className="scroll-body card-top-padding">
        <ChallengeCard></ChallengeCard>
      </div>
    </div>
  );
}

export default AllChallenges;
