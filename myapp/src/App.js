import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Films from "./views/films"
import People from "./views/people"
import DetailPeople from"./Components/detailPeople"

function App() {
  return (
    <Router>
      <div className="navbarDiv">
        <nav className="navbar">
          <ul>
            <li>
              <h1 id="swapiku">Swapiku</h1>
            </li>
            <li>
              <Link to ="/">Films</Link>
            </li>
            <li>
              <Link to ="/people">People</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/detailpeople">
            <DetailPeople />
          </Route>
          <Route path="/">
            <Films />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
