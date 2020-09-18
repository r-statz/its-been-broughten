import React from 'react';
import '../App.css';
import Footer from './Footer.js'
import Header from './Header.js'
import { useLocation } from "react-router-dom";

function Challenge() {
  const description = `I think it's pretty god damned obvious.`
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const name = query.get("name")
  console.log(name, "name")

  return (
    <div className="App">
      <Header></Header>
      <div className="App-body">
        <h1 className="howdy">{name}</h1>
        <p className="howdy">What's the Challenge: {description}</p>
        {/* <p className="howdy">Only 3 measly players have signed</p> */}
        {/* < */}
        <div>
        <h2>Participants</h2>
        <ul>
          <li>
            <h3>Che la Vie</h3>
          </li>
          <li>
          <h3>Anchovy Special</h3>
          </li>
          <li>
          <h3>Che la Vie</h3>
          </li>
        </ul>
        {/* <User name={query.get("name")} /> */}
      </div>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default Challenge;