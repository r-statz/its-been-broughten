import React, { useEffect, useState } from 'react';
import '../App.css';
import moment from 'moment';

function Card() {
  const [time, setTime] = useState('');
  const now = moment(); // Mon Oct 22 2018 14:38:30 GMT+0900

  useEffect(() => {
    const timerId = setInterval(function () {
      const end = moment().endOf('day');
      const timeLeft = moment(end.diff(moment(), true));
      const formatted = timeLeft.format('HH:mm:ss');
      setTime(formatted);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  
  return (
    <div className="card-container">
      <header className="card-header">
        <p className="card-title">Active Challenge</p>
        <p className="card-subtitle">* 30 Day Plank *</p>
      </header>
      <div className="card-body">
        <div>{time}</div>
        <p>Completed: 10/30</p>
      </div>
      <footer className="card-footer">
        <p>Current Overall Ranking: 8th</p>
      </footer>
    </div>
  );
}

export default Card;
