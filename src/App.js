// import React from 'react';
// import Home from './components/Home.js';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Home></Home>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}
export default App;