import React from 'react';
import '../styles/homepage.css';
import Navbar from "../components/navbar";
import Header from "../components/header";

const HomePage = () => {
    return (
        <div className="pageClass-home">
            <Header />
            <div className="header-container">
                <p className="homepage-header-p">My dashboard</p>
                <p className="homepage-header-sub-p">Welcome, here is an overview for you</p>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="content-container">
                    <div className="personal-information-container">

                    </div>
                    <div className="notifications-container">

                    </div>
                    <div className="policies-container">

                    </div>
                    <div className="claims-container">

                    </div>
                    <div className="payment-container">

                    </div>
                    <div className="faq-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;