import React from 'react';
import '../App.css';

function Card() {
  return (
    <div className="card-container">
      <header className="card-header">
        <p className="card-title">Current Challenge</p>
        <p className="card-subtitle">* 30 Day Plank *</p>
      </header>
      <div className="card-body">
        <p>Completed: 10/30</p>
        {/* <p>
          <a>My Challenges</a>
        </p> */}
      </div>
      <footer className="card-footer">
        <p>Current Overall Ranking: 8th</p>
      </footer>
    </div>
  );
}

export default Card;
