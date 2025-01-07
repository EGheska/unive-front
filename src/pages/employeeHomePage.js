import React from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";

const EmployeeHomePage = () => {
    return (
        <div className="pageClass">
            <Header/>
            <div className="header-container">
                <p className="homepage-header-p">My Dashboard</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
            </div>
        </div>
    );
};

export default EmployeeHomePage;