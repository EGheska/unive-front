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
                            <img src="asd" className="customer-image-message"></img>
                            <span>Dmytro Taras</span>
                            <span className="customer-no-span">ZW123456789</span>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis urna sed
                            fringilla pharetra. Phasellus tempus vulputate velit, nec finibus lacus egestas vitae.
                            Aenean laoreet facilisis pretium. Nam consequat, nibh id viverra aliquet, orci tortor mollis
                            diam, in luctus turpis odio eu eros. Aenean accumsan vestibulum diam, non fringilla elit
                            imperdiet vel. Sed nec metus euismod, porttitor ligula sit amet, mollis metus. Sed lacus
                            metus, suscipit et mauris ac, elementum varius odio. Etiam ut sollicitudin ipsum.\n" +
                            "\n" +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeHomeMessages