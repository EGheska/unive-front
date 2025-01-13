import React, {useContext, useEffect, useRef} from "react";
import {useState} from "react";
import "../styles/signUp.css"
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const {UserStore} = useContext(Context);
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const isChecked = false;
    // const [email, setEmail] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const isValid = loginData.email && loginData.password.length > 0;

    useEffect(() => {
        console.log(isChecked)
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
        if (loginData.email.includes("unive")) {
            UserStore.setEmployee(true);
            navigate("/home")
        } else {
            UserStore.setUser(true);
            navigate("/")
        }
        console.log(UserStore.isAuth);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("Logged");
        if (loginData.email.includes("unive")) {
            UserStore.setEmployee(true);
            navigate("/home")
        } else {
            UserStore.setUser(true);
            navigate("/")
        }
        console.log(UserStore.isAuth);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
        console.log("Updated loginData: ", loginData);
    };

    return (
        <div className="auth-container" ref={containerRef}>
            <div className="form-container">
                <form
                    className={`sign-in-form ${isSignUp ? "hidden" : "visible"}`}
                >
                    <h1>Sign In</h1>
                    <p>Welcome, please sign in to continue</p>
                    <input className="sign-in-input"
                           name="email"
                           onChange={handleChange}
                           value={loginData.email}
                           type="email"
                           placeholder="Email*"
                           required
                    />
                    <input className="sign-in-input"
                           name="password"
                           onChange={handleChange}
                           type="password"
                           value={loginData.password}
                           placeholder="Password*"
                           required
                    />
                    <div className="remember">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <button type="submit" disabled={!isValid} onClick={handleSignIn}>Sign In</button>
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
                    <input type="text" placeholder="First name*" required className="sign-in-input"/>
                    <input type="text" placeholder="Last name*" required className="sign-in-input"/>
                    <input type="date" placeholder="Date of birth*" required className="sign-in-input"/>
                    <input type="email" name="email" value={loginData.email} placeholder="Email*" onChange={handleChange} required
                           className="sign-in-input"/>
                    <input type="password" name="password" value={loginData.password} placeholder="Password*" onChange={handleChange} required
                           className="sign-in-input"/>
                    <div className="remember">
                        <input type="checkbox" required/>
                        <label>
                            Accept <a href="#">Terms and Conditions</a>
                        </label>
                    </div>
                    <button type="submit" onClick={handleSignUp} disabled={!isValid}>Sign Up</button>
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