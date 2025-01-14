import React from 'react'
import Navbar from "../components/navbar";

const dataObject = {
    first_name: "Dima",
    last_name: "Taras",
    email: "dima@email.com",
    phoneNumber: "+123 45 67 89 00",
    address: "Haverstraatpassage 12B, 7511EW , ENSCHEDE",
    dateOfBirth: "11.04.2002",
    typeofRequest: "policy",
    additionalInformation: "Owns a farm near the city, wants to be insured from fire, strong winds etc"
}
const EmployeeNewCustomerValidation = () => {

    return (
        <div className='pageClass-home-employee'>
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-customer">
                <Navbar/>
                <div className="customer-additional-info-container">
                    <div className="info-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeNewCustomerValidation;