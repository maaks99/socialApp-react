import React, {useState} from 'react';
import './FormLogin.css';


const FormLogin = (props) => {


    return(
        <div>
            <form>
                <h2>Log in</h2>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button type="submit">LOG IN</button>
                <p>Don't have an account? Sign up now!</p>
            </form>
        </div>
    )

}

export default FormLogin;