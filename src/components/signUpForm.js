import React, {useContext, useEffect, useRef} from "react";
import {useState} from "react";
import "../styles/signUp.css"
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const containerRef = useRef(null);

    // Ideally i need to do following in parent class,
    // so the component still can be reusable and unique

    const {UserStore} = useContext(Context);

    useEffect(() => {
        if (containerRef.current) {
            const activeForm = containerRef.current.querySelector(
                isSignUp ? ".sign-up-form" : ".sign-in-form"
            );
            containerRef.current.style.height = `${activeForm.offsetHeight}px`;
        }
    }, [isSignUp]);

    const toggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("Submited");
        UserStore.setUser(true);
        console.log(UserStore.isAuth);
    };

    return (
        <div className="auth-container" ref={containerRef}>
            <div className="form-container">
                <form
                    className={`sign-in-form ${isSignUp ? "hidden" : "visible"}`}
                >
                    <h1>Sign In</h1>
                    <p>Welcome, please sign in to continue</p>
                    <input type="email" placeholder="Email*" required/>
                    <input type="password" placeholder="Password*" required/>
                    <div className="remember">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <button type="submit">Sign In</button>
                    <footer>
                        <p>
                            Don’t have an account?{" "}
                            <a onClick={toggleForm}>
                                Create an account
                            </a>
                        </p>
                    </footer>
                </form>

                <form
                    className={`sign-up-form ${isSignUp ? "visible" : "hidden"}`}
                >
                    <h1>Sign Up</h1>
                    <p>Welcome to the registration page</p>
                    <input type="text" placeholder="First name*" required/>
                    <input type="text" placeholder="Last name*" required/>
                    <input type="date" placeholder="Date of birth*" required/>
                    <input type="email" placeholder="Email*" required/>
                    <input type="password" placeholder="Password*" required/>
                    <div className="remember">
                        <input type="checkbox" required/>
                        <label>
                            Accept <a href="#">Terms and Conditions</a>
                        </label>
                    </div>
                    <button type="submit" onClick={handleSignUp}>Sign Up</button>
                    <footer>
                        <p>
                            Already have one?{" "}
                            <a onClick={toggleForm}>
                                Sign in
                            </a>
                        </p>
                    </footer>
                </form>
            </div>
        </div>
    )
};
export default SignUpForm;