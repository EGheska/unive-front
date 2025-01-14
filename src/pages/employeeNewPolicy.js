import React, {useState} from "react"
import Navbar from "../components/navbar";
import "../styles/employeeNewPolicy.css";
import TextAreaComponent from "../components/textAreaComponent";
import {useNavigate} from "react-router-dom";

const policies = [
    {
        id: 1,
        title: "General Liability Insurance",
        description:
            "Protects your business from claims involving bodily injuries and property damage resulting from your products, services, or operations.",
    },
    {
        id: 2,
        title: "Commercial Property Insurance",
        description:
            "Covers damages to your business property caused by fire, theft, natural disasters, and other perils.",
    },
    {
        id: 3,
        title: "Business Interruption Insurance",
        description:
            "Compensates for lost income during periods when your business cannot operate due to covered events like fires or natural disasters.",
    },
    {
        id: 4,
        title: "Professional Liability Insurance",
        description:
            "Also known as Errors and Omissions (E&O) Insurance, this covers claims of negligence or mistakes in professional services.",
    },
    {
        id: 5,
        title: "Workers' Compensation Insurance",
        description:
            "Provides wage replacement and medical benefits to employees injured on the job, ensuring compliance with local labor laws.",
    },
    {
        id: 6,
        title: "Cyber Liability Insurance",
        description:
            "Protects your business from the costs associated with data breaches and cyberattacks, including legal fees and customer notifications.",
    },
    {
        id: 7,
        title: "Product Liability Insurance",
        description:
            "Covers your business against claims of injury or damage caused by products you manufacture, distribute, or sell.",
    },
];

const EmployeeNewPolicy = () => {
    const navigate = useNavigate();
    const [selectedPolicies, setSelectedPolicies] = useState([]);
    const handleButtonClick = () => {
        navigate("/new-customer/validation");
    }
    const handleSubmitClick = () => {
        navigate("/approve");
    }
    const handleCheckboxChange = (policyId) => {
        setSelectedPolicies((prevSelected) =>
            prevSelected.includes(policyId)
                ? prevSelected.filter((id) => id !== policyId) // Deselect if already selected
                : [...prevSelected, policyId] // Add if not already selected
        );
    };

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-policy">
                <Navbar />
                <div className="containers">
                    <div className="customer-additional-info-container">
                        <div className="info-container">
                            <h2>Enter a additional information</h2>
                            <TextAreaComponent placeholder="Enter description of the situation"/>
                        </div>
                        <button
                            className="next-button"
                            onClick={handleButtonClick}
                        >
                            Next
                        </button>
                    </div>
                    <div className="customer-additional-info-container">
                        <div className="policies-list">
                            <h2>Insurance Policies for Businesses</h2>
                            <ul>
                                {policies.map((policy) => (
                                    <li key={policy.id} style={{marginBottom: "15px"}}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={policy.id}
                                                checked={selectedPolicies.includes(policy.id)}
                                                onChange={() => handleCheckboxChange(policy.id)}
                                                style={{marginRight: "10px"}}
                                            />
                                            <strong>{policy.title}</strong>
                                        </label>
                                        <p>{policy.description}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3>Selected Policies:</h3>
                            <ul>
                                {selectedPolicies.map((id) => {
                                    const selectedPolicy = policies.find((policy) => policy.id === id);
                                    return <li key={id}>{selectedPolicy?.title}</li>;
                                })}
                            </ul>
                        </div>
                        <button className="next-button" onClick={handleSubmitClick}>Next</button>
                    </div>
                    <div className="empty-space-app"></div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeNewPolicy;