import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faComment, faBahai } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="App-footer-with-links">
      <div className="logo-row">
        {/* <Link className="app-link" to="/home">
        My Challenges
      </Link> */}
        {/* <Link className="app-link" to="/home">
        User Stats
      </Link> */}
        <Link className="icon-text-box app-link " to={"/home"}>
          <div className="icon-text">
            <FontAwesomeIcon className="footer-icon" icon={faHome} />
            <p className="text-icon">Home</p>
          </div>
        </Link>
        <Link className="app-link icon-text-box" to={"/all-challenges"}>
          <div className="icon-text">
            <FontAwesomeIcon className="footer-icon" icon={faBahai} />
            <p className="text-icon">Challenges</p>
          </div>
        </Link>
        <Link className="app-link icon-text-box" to="/peanut-gallery">
          <div className="icon-text">
            <FontAwesomeIcon className="footer-icon" icon={faComment} />
            <p className="text-icon">Peanut Gallery</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
