import React from 'react'
import Navbar from "../components/navbar";
import Header from "../components/header";
import CustomerSearchComponent from "../components/customerSearchComponent";
import "../styles/employeeCustomerLibrary.css"

const EmployeeCustomerLibrary = () => {
    return (
        <div className="pageClass-customerLibrary">
            <Header />
            <div className="header-container">
                <p className="homepage-header-p">Customer Library</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <CustomerSearchComponent/>
            </div>
        </div>
    )
}

export default EmployeeCustomerLibrary;