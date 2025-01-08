import React, {useContext, useEffect, useRef} from "react";
import {useState} from "react";
import "../styles/signUp.css"
import {Context} from "../index";
import {useNavigate} from "react-router-dom";


const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const {userStore} = useContext(Context);
    console.log("UserStore", userStore);

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
        if (email.includes("unive")){
            userStore.setUser(true);
            userStore.setEmployee(true);
            userStore.setUser(false);
            navigate("/home")
        } else {
            userStore.setUser(true);
            navigate("/")
        }
        console.log(userStore.isAuth);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("Logged");
        if (email.includes("unive")){
            userStore.setEmployee(true);
            navigate("/home")
        } else {
            userStore.setUser(true);
            navigate("/")
        }
        console.log(userStore.isAuth);
    };

    return (
        <div className="auth-container" ref={containerRef}>
            <div className="form-container">
                <form
                    className={`sign-in-form ${isSignUp ? "hidden" : "visible"}`}
                >
                    <h1>Sign In</h1>
                    <p>Welcome, please sign in to continue</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email*"
                        required
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password*"
                        required
                    />
                    <div className="remember">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <button type="submit" onClick={handleSignIn}>Sign In</button>
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