import React from "react";
import {useState} from "react";
import {signUp} from "../styles/signUp.css"

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState("");
    return (
        <div className="login-form">
            <h3>Sign In </h3>
            <span>Welcome, please sign in to continue</span>
            <form>
                <input
                    type="text"
                    name="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="checkbox"
                    name="checkbox"
                    value={remember}
                    onChange={(e) => setRemember(e.target.value)}
                />
                <span>Remember me</span>
                <button
                    type="submit"
                    className="login-button"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
};
export default SignUpForm;