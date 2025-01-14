import React, {useState} from 'react'
import Navbar from "../components/navbar";
import "../styles/employeeValidation.css";
import TextAreaComponent from "../components/textAreaComponent";
import {useNavigate} from "react-router-dom";
import CustomerInformationComponent from "../components/customerInformationComponent";

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
    const navigate = useNavigate();
    const generatedText = `This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed. This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed.This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed. This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed. This is an example of a generated policy text. The text can be multiline and scrollable. Add more details here as needed.`;
    const [formData, setFormData] = useState({
        first_name: "", last_name: "", infix: "", date: "", address: "", email: "", phone: "",
    });
    const onCorrect = () => {
        return 0
    };
    const onApprove = () => {
        navigate("/approve");
    };
    const onCreateSeparately = () => {
        return 0
    };

    return (<div className='pageClass-home-employee'>
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-customer">
                <Navbar/>
                <div className="customer-validation">
                    <div className="customer-info-container-validation">
                        <CustomerInformationComponent personalInfoDTO={dataObject} />
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
                </div>
            </div>
        </div>
    )
}

export default EmployeeNewCustomerValidation;