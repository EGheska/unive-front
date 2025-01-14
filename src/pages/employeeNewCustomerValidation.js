import React, {useState} from 'react'
import Navbar from "../components/navbar";
import "../styles/employeeValidation.css";
import TextAreaComponent from "../components/textAreaComponent";

const dataObject = {
    first_name: "Dima",
    last_name: "Taras",
    infix: "-",
    email: "dima@email.com",
    phoneNumber: "+123 45 67 89 00",
    address: "Haverstraatpassage 12B, 7511EW , ENSCHEDE",
    dateOfBirth: "11.04.2002",
    typeofRequest: "policy",
    additionalInformation: "Owns a farm near the city, wants to be insured from fire, strong winds etc"
}
const EmployeeNewCustomerValidation = () => {
    const onCorrect = () => alert("Correct clicked!");
    const onApprove = () => alert("Approve clicked!");
    const onCreateSeparately = () => alert("Create Separately clicked!");

    const generatedText = `This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed. This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed.This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed. This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed. This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed.`;
    const [formData, setFormData] = useState({
        first_name: "", last_name: "", infix: "", date: "", address: "", email: "", phone: "",
    });

    const isValid = formData.first_name && formData.last_name && formData.infix && formData.date && formData.date.length > 0;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }
    const handleNextButtonClick = (e) => {
        e.preventDefault();

    }

    return (<div className='pageClass-home-employee'>
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-customer">
                <Navbar/>
                <div className="customer-validation">


                    <div className="customer-info-container-validation">

                        <div className="customer-info-left">
                            <div className="customer-photo-placeholder"></div>
                        </div>
                        <div className="customer-info-right">
                            <h2>Customer Information</h2>
                            <div className="customer-info-row">
                                <span>Customer No.</span>
                                <span className="customer-number">CUST10293847</span>
                            </div>
                            <div className="customer-info-fields">
                                <div className="form-row">
                                    <label>First Name</label>
                                    <span>{dataObject.first_name}</span>
                                </div>
                                <div className="form-row">
                                    <label>Infix</label>
                                    <span>{dataObject.infix}</span>
                                </div>
                                <div className="form-row">
                                    <label>Last Name</label>
                                    <span>{dataObject.last_name}</span>
                                </div>
                                <div className="form-row">
                                    <label>Date of birth</label>
                                    <span>{dataObject.dateOfBirth}</span>
                                </div>
                                <div className="form-row">
                                    <label>Adress</label>
                                    <span>{dataObject.address}</span>
                                </div>
                                <div className="form-row">
                                    <label>Email</label>
                                    <span>{dataObject.email}</span>
                                </div>
                                <div className="form-row">
                                    <label>Phone</label>
                                    <span>{dataObject.phoneNumber}</span>
                                </div>
                                <div className="form-row">
                                    <label>Type of request</label>
                                    <span>{dataObject.typeofRequest}</span>
                                </div>
                                <div className="form-row">
                                    <label>Additional Infromation</label>
                                    <span>{dataObject.additionalInformation}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="generated-policy-container">
                        <h2>Generated Policy</h2>
                        <p className="subheading">Based on experienced AI model we suggest:</p>
                        <div className="text-container">
                            <p className="generated-text">{generatedText || "Your generated policy will appear here."}</p>
                        </div>
                        <div className="button-container">
                            <button className="policy-button" onClick={onCorrect}>Correct</button>
                            <button className="policy-button" onClick={onApprove}>Approve</button>
                            <button className="policy-button" onClick={onCreateSeparately}>Create Separately</button>
                        </div>
                    </div>
                    <div className="generated-policy-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeNewCustomerValidation;