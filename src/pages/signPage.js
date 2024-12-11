import React from "react";
import SignUpForm from "../components/signUpForm";
import '../styles/signPage.css'

const SignPage = () => {

    return (
        <div className="pageClass">
            <div className="logo-container">Unive</div>
            <SignUpForm />
        </div>
    )
};

export default SignPage;