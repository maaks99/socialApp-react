import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp'
import axios from 'axios';

function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')))
  console.log(currentUser);
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + localStorage,
  };

  const logout = (e) => {
    e.preventDefault();
    
    axios.post('https://akademia108.pl/api/social-app/user/logout', {headers: headers})
      .then((req) => {
        localStorage.removeItem('user');
        //localStorage.clear();
        setCurrentUser(req.data);

      })
      .catch((error) => {
        console.log(error);
      })
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

              {!currentUser && <li>
                <Link to="/login">Login</Link>
              </li>}

              {!currentUser && <li>
                <Link to="/signup">Sign Up</Link>
              </li>}
              {currentUser && <li>
                <Link onClick={logout}>LogOut</Link>
              </li>}
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <FormLogin setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/signup">
              <FormSignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>

      </Router>
    </div>
  );

  function Home() {
    return <h2>Home</h2>;
  }

}

export default App;


