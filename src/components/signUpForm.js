import React from "react";
import {useState} from "react";
import "../styles/signUp.css"

const SignUpForm = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [remember, setRemember] = useState("");
    return (
        <div className="login-form">
            <form>
                <h1>Sign In </h1>
                <p>Welcome, please sign in to continue</p>
                <input type="email" id="email" name="email"  placeholder="Email*" required/>
                <input type="password" id="password" name="password" placeholder="Password*" required/>
                <div className="remember">
                    <input type="checkbox" id="remember" name="remember"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button type="submit">Sign in</button>
                <div className="line"></div>
                <footer>
                    <p>Don’t have one? <a href="#">Create an account</a></p>
                </footer>
            </form>
        </div>
    )
};
export default SignUpForm;