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
    <div className="challenge-card-container top-padding">
      <div className="challenge-card-body">
        <header>
          <Link className="app-link card-title" to={`/brain-games`}>
            Brain Games
          </Link>
          <FontAwesomeIcon icon={faBrain} size="5x" />
        </header>
      </div>

      <div className="challenge-card-body">
        <header>
          <Link className="app-link card-title" to={`/physical-feats`}>
            Physical Feats
          </Link>
          <FontAwesomeIcon icon={faRunning} size="5x" />
        </header>
      </div>

      <div className="challenge-card-body">
        <header>
          <Link className="app-link card-title" to={`/kitchen-fun`}>
            Kitchen Fun
          </Link>
          <FontAwesomeIcon icon={faPepperHot} size="5x" />
        </header>
      </div>
    </div>
  );
}

export default ChallengeCard;
