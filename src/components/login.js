import React from "react";
import "./login.css";
import register from "./register";
import {BrowserRouter, Link} from 'react-router-dom';

const login = () =>
{
    return(
        <BrowserRouter>
            <div>
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" placeholder="Username" id="username" name="username"/>
                <label>Password</label>
                <input type="password" placeholder="Password" id="password" name="password"/>
                <button >Log in</button>
            </div>
            <b>Register, Click here!</b>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </BrowserRouter>
    )
}

export default login;