import React, { useState } from 'react';
import FormSignUp from './FormSignUp';
import './Form.css';
import {
    Link, Redirect
} from "react-router-dom";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const FormLogin = (props) => {

    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({})

    const [showPassword, setShowPassword] = useState(false);

    const [loggedin, setloggedin] = useState(false);

    const toggleshowPassword = () => {
        setShowPassword(showPassword ? false : true);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        setErrors(validate(values));

        let newUser = {
            username: values.username.trim(),
            password: values.password,
        };

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage,
        };


        axios.post('https://akademia108.pl/api/social-app/user/login', JSON.stringify(newUser), { headers: headers })
            .then((req) => {
                localStorage.setItem('token', JSON.stringify(req.data.jwt_token));
                console.log(req.data);
                if (req.data.error === false) {
                    setloggedin(true);
                }

            })
            .catch((error) => {
                console.log(error);
            })

    }

    const validate = (values) => {
        let errors = {}
        if (!values.username.trim()) {
            errors.username = "Cannot be blank!"
        }
        if (!values.password) {
            errors.password = "Cannot be blank!"
        }
        return errors;
    }

    return (
        <div>
            {loggedin && <Redirect to="/" />}
            <form className="forms" onSubmit={submitForm}>
                <h2>Log in</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                {errors.username && <p>{errors.username}</p>}
                <div className="password">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <i onClick={toggleshowPassword} className="eyeLogin">{eye}</i>
                </div>
                {errors.password && <p>{errors.password}</p>}

                <button type="submit">LOG IN</button>
                <p className="createAccount">Don't have an account? <Link to="/signup">Sign Up now!</Link></p>
            </form>
        </div>
    )

}

export default FormLogin;