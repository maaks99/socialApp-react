import react, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FormLogin from './FormLogin';

import './MainMenu.css';

const MainMenu = (props) => {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Feed">Feed</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/SignUp">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login">
                        <Login />
                        <FormLogin />
                    </Route>
                    <Route path="/Feed">
                        <Feed />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
               
            </div>

        </Router>
    )
}

function Home() {
    return <h2>Home</h2>;
}

function Login() {
    return <h2>Login</h2>;
    
}
function Feed() {
    return <h2>Feed</h2>;
}

function SignUp() {
    return <h2>Sign Up</h2>;
}

export default MainMenu;