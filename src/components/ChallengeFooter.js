import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faPepperHot,
  faRunning,
  faHome
} from '@fortawesome/free-solid-svg-icons';

function ChallengeFooter() {
  // const history = useHistory();
  // const toAllChallenges = () => {
  //   history.push('/all-challenges')
  // };
  // const toMyChallenges = () => {
  //   history.push('/my-challenges')
  // };
  // const toUserStats = () => {
  //   history.push('/user-stats')
  // };
  // const toPeanutGallery = () => {
  //   history.push('/peanut-gallery')
  // };
  // const toHome = () => {
  //   history.push('/home')
  // };

  return (
    <div className="App-footer-with-links">
      <Link className="app-link" to="/home">
      <FontAwesomeIcon icon={faHome} size="3x" />
      </Link>
      <Link className="app-link" to="/brain-games">
        {' '}
        <FontAwesomeIcon icon={faBrain} size="3x" />
      </Link>
      <Link className="app-link" to="/kitchen-fun">
        <FontAwesomeIcon icon={faPepperHot} size="3x" />
      </Link>
      <Link className="app-link" to="/physical-feats">
        <FontAwesomeIcon icon={faRunning} size="3x" />
      </Link>
    </div>
  );
}

export default ChallengeFooter;
