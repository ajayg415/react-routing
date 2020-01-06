import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './Components/Home';
import About from './Components/About';

function App() {
  const [name, setName] = useState('');
  const click = (data) =>{
    console.log(data);
    setName(data);
  }
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About name={name}/>
          </Route>
          <Route path="/">
            <Home click={click}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
