import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';


function Footer() {
  const history = useHistory();
  const toAllChallenges = () => {
    history.push('/all-challenges')
  };
  const toMyChallenges = () => {
    history.push('/my-challenges')
  };
  const toUserStats = () => {
    history.push('/user-stats')
  };
  const toTrashTalkForum = () => {
    history.push('/trash-talk-forum')
  };
  const toHome = () => {
    history.push('/home')
  };
  return (
    <div className="App-footer-with-links">
      <p onClick={toHome}>Home</p>
      <p onClick={toAllChallenges}>All challenges</p>
      <p onClick={toMyChallenges}>My Challenges</p>
      <p onClick={toUserStats}>User Stats</p>
      <p onClick={toTrashTalkForum}>Trash Talk Forum</p>
    </div>
  );
}

export default Footer;
