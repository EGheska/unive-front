import React from 'react';
import '../styles/navbar.css';
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <div className={`navbar-nav ${location.pathname === "/" ? "selected" : ""}`}>
                <NavLink to="/" className="navbar-link">Dashboard</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/personal-info" ? "selected" : ""}`}>
                <NavLink to="/personal-info" className="navbar-link">Personal Info.</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/notifications" ? "selected" : ""}`}>
                <NavLink to="/notifications" className="navbar-link">Notifications</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/policies" ? "selected" : ""}`}>
                <NavLink to="/policies" className="navbar-link">Policies</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/claims" ? "selected" : ""}`}>
                <NavLink to="/claims" className="navbar-link">Claims</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/payments" ? "selected" : ""}`}>
                <NavLink to="/payments" className="navbar-link">Payments</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/faq" ? "selected" : ""}`}>
                <NavLink to="/faq" className="navbar-link">FAQ</NavLink>
            </div>
        </div>
    );
};

export default Navbar;