import React from "react";
import SignUpForm from "../components/signUpForm";
import '../styles/signPage.css'
import {useNavigate} from "react-router-dom";

const SignPage = () => {

    return (
        <div className="pageClass">
            <div className="logo-container">
                <img src="/univelogo.svg" alt="logo"/>
            </div>
            <SignUpForm />
        </div>
    )
};

export default SignPage;