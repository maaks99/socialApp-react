import react, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FormLogin from './FormLogin';
import FormSignUp from './FormSignUp'
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
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login">
                        <FormLogin />
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
    )
}

function Home() {
    return <h2>Home</h2>;
}

function Feed() {
    return <h2>Feed</h2>;
}


export default MainMenu;