import React from 'react'
import "../styles/customerSearchComponent.css";


// Data should be passed to this component
// also write some onlick function to the serach icon or enter

const CustomerSearchComponent = () => {
    return (
        <div className="search-container">
            <div className="search-container-inner">
                <div className="search-input">
                    <input
                     type="text"
                     className="input-search-prompt"
                     placeholder="search by name, phone number, customer number"
                    />
                    <img src="/input_icon.png" alt="Search" className="input_icon" />
                </div>
                <div className="search-popup">
                    <img src="profile-pic-url" alt="Customer"/>
                    <div className="info">
                        <div><span className="label">First Name:</span> Dima</div>
                        <div><span className="label">Surname:</span> Taras</div>
                        <div><span className="label">Date of birth:</span> 11.04.2002</div>
                        <div><span className="label">Customer No.:</span> CUST10293847</div>
                    </div>
                </div>
            </div>
            <button className="view-btn">View</button>
        </div>
    );
};

export default CustomerSearchComponent;