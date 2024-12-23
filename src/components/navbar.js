import React from 'react';
import '../styles/navbar.css';
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-container">
            <div className={`navbar-nav ${location.pathname === "/" ? "selected" : ""}`}>
                {location.pathname === "/" ? (
                <img src="/dashboard_selected.png" alt="Dashboard" className="icon-unselected"/>
            ) : (
                <img src="/dashboard_icon.png" alt="Dashboard" className="icon-unselected"/>
            )}
                <NavLink to="/" className="navbar-link">
                    Dashboard
                </NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/personal-info" ? "selected" : ""}`}>
                {location.pathname === "/personal-info" ? (
                    <img src="/personal_info_selected.svg" alt="Dashboard" className="icon-unselected"/>
                ) : (
                    <img src="/personal_info_icon.svg" alt="Dashboard" className="icon-unselected"/>
                )}
                <NavLink to="/personal-info" className="navbar-link">
                    Personal Info.
                </NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/notifications" ? "selected" : ""}`}>
                {location.pathname === "/notifications" ? (
                    <img src="/notifications_icon_selected.png" alt="Dashboard" className="icon-unselected"/>
                ) : (
                    <img src="/notifications_unselected.png" alt="Dashboard" className="icon-unselected"/>
                )}
                <NavLink to="/notifications" className="navbar-link">Notifications</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/policies" ? "selected" : ""}`}>
                {location.pathname === "/policies" ? (
                    <img src="/policy_saelected.png" alt="Dashboard" className="icon-unselected"/>
                ) : (
                    <img src="/policies_icon.png" alt="Dashboard" className="icon-unselected"/>
                )}
                <NavLink to="/policies" className="navbar-link">Policies</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/claims" ? "selected" : ""}`}>
                {location.pathname === "/claims" ? (
                    <img src="/claims_selected.png" alt="Dashboard" className="icon-unselected"/>
                ) : (
                    <img src="/claims_icon.png" alt="Dashboard" className="icon-unselected"/>
                )}
                <NavLink to="/claims" className="navbar-link">Claims</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/payments" ? "selected" : ""}`}>
                {location.pathname === "/payments" ? (
                    <img src="/payments_selected.png" alt="Dashboard" className="icon-unselected"/>
                ) : (
                    <img src="/payments_icon.png" alt="Dashboard" className="icon-unselected"/>
                )}
                <NavLink to="/payments" className="navbar-link">Payments</NavLink>
            </div>
            <div className={`navbar-nav ${location.pathname === "/faq" ? "selected" : ""}`}>
                <NavLink to="/faq" className="navbar-link" style={{ textAlign: "center"}} t>FAQ</NavLink>
            </div>
        </div>
    );
};

export default Navbar;