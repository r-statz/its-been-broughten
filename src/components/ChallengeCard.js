import React from 'react';
import '../App.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faPepperHot,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';

function ChallengeCard() {
  // const [time, setTime] = useState('');
  // const now = moment(); // Mon Oct 22 2018 14:38:30 GMT+0900

  // useEffect(() => {
  //   const timerId = setInterval(function () {
  //     const end = moment().endOf('day');
  //     const timeLeft = moment(end.diff(moment(), true));
  //     const formatted = timeLeft.format('HH:mm:ss');
  //     setTime(formatted);
  //   }, 1000);

  //   return () => clearInterval(timerId);
  // }, []);
  return (
    <div className="challenge-card-container">
      <div className="card-row">
        <Link className="challenge-text-box app-link" to={`/brain-games`}>
          <div className="icon-text">
            <FontAwesomeIcon className="challenge-icon App-logo" icon={faBrain} />
            <p className="challenge-text-icon">Brain Games</p>
          </div>
        </Link>
        <Link className="challenge-text-box app-link" to={`/physical-feats`}>
          <div className="icon-text">
            <FontAwesomeIcon className="challenge-icon App-logo" icon={faRunning} />
            <p className="challenge-text-icon">Physical Feats</p>
          </div>
        </Link>
        <Link className="challenge-text-box app-link" to={`/kitchen-fun`}>
          <div className="icon-text">
            <FontAwesomeIcon className="challenge-icon App-logo" icon={faPepperHot} />
            <p className="challenge-text-icon">Kitchen Fun</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ChallengeCard;
