import React, {useState} from 'react'
import Navbar from "../components/navbar";
import "../styles/employeeNewCustomer.css"
import {useNavigate} from "react-router-dom";

const EmployeeNewCustomer = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        infix: "",
        date: "",
        address: "",
        email: "",
        phone: "",
    });

    const isValid = formData.first_name && formData.last_name && formData.infix && formData.date && formData.date.length > 0;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }


    const handleNextButtonClick = (e) => {
        e.preventDefault();
        navigate("/new-customer/policy-select");
    };

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-customer">
                <Navbar className="nav"/>
                <div className="customer-info-container">
                    <div className="customer-info-left">
                        <div className="customer-photo-placeholder">
                            {/* Placeholder for customer photo */}
                            photo
                        </div>
                    </div>
                    <div className="customer-info-right">
                        <h2>Customer Information</h2>
                        <div className="customer-info-row">
                            <span>Customer No.</span>
                            <span className="customer-number">CUST10293847</span>
                        </div>
                        <div className="customer-info-fields">
                            <div className="form-row">
                                <label htmlFor="first-name">First name</label>
                                <input type="text" onChange={handleChange} name="first_name" value={formData.first_name} required id="first-name"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="infix">Infix</label>
                                <input type="text" onChange={handleChange} name="infix" value={formData.infix} required id="infix"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="surname">Surname</label>
                                <input type="text"  onChange={handleChange} name="last_name" value={formData.last_name} required id="surname"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="dob">Date of birth</label>
                                <input type="date"  onChange={handleChange} name="date" value={formData.date} required id="dob"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} required id="address"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required id="email"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="telephone">Telephone number</label>
                                <input type="tel" onChange={handleChange} name="phone" value={formData.phone} required id="telephone"/>
                            </div>
                            <button type="button" id="new-customer" disabled={!isValid} onClick={handleNextButtonClick} className="view-button">Next →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmployeeNewCustomer;