import React from "react";
import {BrowserRouter ,Link } from "react-router-dom";

const register = () =>
{
    return(
        <BrowserRouter>
            <div>
                <h1>Registration</h1>
                <label>First Name</label>
                <input type="text" placeholder="First Name" id="fname" />
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" id="lname" />
                <label>Username</label>
                <input type="text" placeholder="Username" id="username" name="username"/>
                <label>Password</label>
                <input type="password" placeholder="Password" id="password" name="password"/>
                <button>Register</button>
            </div>
            <b>Already have an account?</b>
            <Link to="/login"><button>Login</button></Link>
        </BrowserRouter>
    )
}

export default register;