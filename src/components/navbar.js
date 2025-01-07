import React, {useContext, useEffect, useState} from 'react';
import '../styles/navbar.css';
import {NavLink, useLocation} from "react-router-dom";
import UserStore from "../store/user_store";
import {Context} from "../index";

const Navbar = () => {
    const {UserStore} = useContext(Context);
    const [isUser, setIsUser] = useState(null);
    const location = useLocation();

    const navItems = [
        {path: "/", label: "Dashboard", icon: "/dashboard_icon.png", selectedIcon: "/dashboard_selected.png"},
        {
            path: "/personal-info",
            label: "Personal Info.",
            icon: "/personal_info_icon.svg",
            selectedIcon: "/personal_info_selected.svg"
        },
        {
            path: "/notifications",
            label: "Notifications",
            icon: "/notifications_unselected.png",
            selectedIcon: "/notifications_icon_selected.png"
        },
        {path: "/policies", label: "Policies", icon: "/policies_icon.png", selectedIcon: "/policy_selected.png"},
        {path: "/claims", label: "Claims", icon: "/claims_icon.png", selectedIcon: "/claims_selected.png"},
        {path: "/payments", label: "Payments", icon: "/payments_icon.png", selectedIcon: "/payments_selected.png"},
        {path: "/faq", label: "FAQ", icon: null, selectedIcon: null},
    ];

    const navItemsEmployee = [
        {path: "/home", label: "Dashboard", icon: "/dashboard_icon.png", selectedIcon: "/dashboard_selected.png"},
        {path: "/customer", label: "Customer Library", icon: "/personal_info_icon.svg", selectedIcon: "/personal_info_selected.svg"},
        {path: "/new-customer", label: "New Customer", icon: "/plus.png", selectedIcon: "/plus_selected.png"},
    ]

    useEffect(() => {
        if (UserStore.isUser) {
            setIsUser(true)
        } else if (UserStore.isEmployee) {
            setIsUser(false)
        }
    }, [isUser]);

    if (!isUser) {
        return (
            <div className="navbar-container">
                {navItemsEmployee.map(({path, label, icon, selectedIcon}) => (
                    <div key={path} className={`navbar-nav ${location.pathname === path ? "selected" : ""}`}>
                        {icon && selectedIcon && (
                            <img
                                src={location.pathname === path ? selectedIcon : icon}
                                alt={label}
                                className="icon-unselected"
                            />
                        )}
                        <NavLink to={path} className="navbar-link" style={path === "/faq" ? {textAlign: "center"} : {}}>
                            {label}
                        </NavLink>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="navbar-container">
            {navItems.map(({path, label, icon, selectedIcon}) => (
                <div key={path} className={`navbar-nav ${location.pathname === path ? "selected" : ""}`}>
                    {icon && selectedIcon && (
                        <img
                            src={location.pathname === path ? selectedIcon : icon}
                            alt={label}
                            className="icon-unselected"
                        />
                    )}
                    <NavLink to={path} className="navbar-link" style={path === "/faq" ? {textAlign: "center"} : {}}>
                        {label}
                    </NavLink>
                </div>
            ))}
        </div>
    );
};

export default Navbar;