import React from 'react';
import '../styles/homepage.css';
import Navbar from "../components/navbar";
import Header from "../components/header";

const HomePage = () => {
    return (
        <div className="pageClass-home">
            <Header />
            <div className="header-container">
                <p>My dashboard</p>
                <p>Welcome, here is an overview for you</p>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="content-container">
                    asdasd
                </div>
            </div>
        </div>
    )
}

export default HomePage;