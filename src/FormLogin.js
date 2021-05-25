import React, {useState} from 'react';
import './Form.css';


const FormLogin = (props) => {


    return(
        <div>
            <form>
                <h2>Log in</h2>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">LOG IN</button>
                <p>Don't have an account? <a href="#">Sign up now!</a></p>
            </form>
        </div>
    )

}

export default FormLogin;