import React from 'react'
import Navbar from "../components/navbar";
import "../styles/employeeHomeMessage.css"

const EmployeeHomeMessages = () => {
    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">Message Center</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-policy">
                <Navbar/>
                <div className="customer-claims-container-main">
                    <div className="message-center">
                        <div className="message-center-customer-info">
                            <img src="/me.png" className="customer-image-message"></img>
                            <span>Dmytro Taras</span>
                            <span className="customer-no-span">ZW123456789</span>
                        </div>
                        <div>
                           Dear Unive, could you please check the claim report i've sent about the fire in the offices
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeHomeMessages