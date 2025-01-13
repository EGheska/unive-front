import React from "react"
import Navbar from "../components/navbar";
import "../styles/employeeNewPolicy.css";

const EmployeeNewPolicy = () => {

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-customer">
                <Navbar />
                <div className="customer-info-container">
                    <div className="info-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeNewPolicy;