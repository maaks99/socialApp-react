import React, { useState, useEffect } from 'react';
import './Form.css';
import axios from 'axios';


const FormSignUp = (props) => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const [errors, setErrors] = useState({})
    

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        

        let newUser = {
            username: values.username.trim(),
            email: values.email,
            password: values.password,
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        

        axios.post('http://akademia108.pl/api/social-app/user/signup', JSON.stringify(newUser),{ 'headers': headers })
        .then((req) => {

            if(req.data.signedup === true) {
                console.log(req.data);
            }else {
                console.log(req.data.message);
            }
                 
        }).catch((error) => {
            console.error(error);
        })
    }

    const validate = (values) => {
        let errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}/;

        if (!values.username.trim()) {
            errors.username = "Cannot be blank!"
        } else if (values.username.trim().length < 4) {
            errors.username = "Username needs to be 4 characters or more!"
        }

        if (!values.email) {
            errors.email = "Cannot be blank!"
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Cannot be blank!"
        } else if (values.password.length < 6) {
            errors.password = "Password needs to be 6 characters or more!";
        } else if (!regex2.test(values.password)) {
            errors.password = "Invalid password format"
        }

        if (!values.password2) {
            errors.password2 = "Cannot be blank!"
        } else if (values.password2 !== values.password) {
            errors.password2 = "Passwords do not match"
        }

        return errors;
    }

    return (
        <div>
            <form className="form-signUp" onSubmit={handleSubmit} >
                <h2>Sign Up</h2>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={values.password}
                    onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
                <input
                    name="password2"
                    type="password"
                    placeholder="Confirm password"
                    value={values.password2}
                    onChange={handleChange}
                />
                {errors.password2 && <p>{errors.password2}</p>}
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    )




}

export default FormSignUp;