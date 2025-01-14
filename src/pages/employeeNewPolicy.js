import React from "react"
import Navbar from "../components/navbar";
import "../styles/employeeNewPolicy.css";
import TextAreaComponent from "../components/textAreaComponent";

const EmployeeNewPolicy = () => {

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-customer">
                <Navbar />
                <div className="customer-additional-info-container">
                    <div className="info-container">
                        <h2>Enter a additional information</h2>
                        <TextAreaComponent placeholder="Enter description of the situation" />
                    </div>
                    <button
                        className="next-button"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeNewPolicy;