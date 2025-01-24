import React from "react";
import Navbar from "../components/navbar";

const EmployeeHomePolicy = () => {
    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <div className="homepage-header-p">Customer Policy</div>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container-new-policy">
                <Navbar/>
                <div className="customer-claims-container-main">
                    <div className="customer-claims">
                        <h1>Customer policy</h1>
                        <span className="claim-number">YP65038241</span>
                    </div>
                    <hr></hr>
                    <div className="customer-claims-description">
                        <h2>Policy overview</h2>
                        <p className="claim-text">{
                            "Policy Coverage Summary\n" +
                            "General Liability Insurance\n" +
                            "\n" +
                            "Coverage Limit: $1,000,000 per occurrence / $2,000,000 aggregate\n" +
                            "Description: Protects against claims of bodily injury, property damage, or personal injury arising from your business operations.\n" +
                            "Commercial Property Insurance\n" +
                            "\n" +
                            "Coverage Limit: $500,000 building / $250,000 contents\n" +
                            "Description: Covers physical assets, such as buildings, equipment, inventory, and furniture, against risks like fire, theft, and natural disasters.\n" +
                            "Business Interruption Insurance\n" +
                            "\n" +
                            "Coverage Limit: $100,000\n" +
                            "Description: Reimburses lost income and operating expenses if your business is temporarily unable to operate due to a covered event.\n" +
                            "Workers’ Compensation Insurance (if applicable)\n" +
                            "\n" +
                            "Coverage Limit: As required by state law\n" +
                            "Description: Provides medical benefits and wage replacement to employees injured on the job.\n" +
                            "Professional Liability Insurance (Optional)\n" +
                            "\n" +
                            "Coverage Limit: $1,000,000 per claim\n" +
                            "Description: Covers errors, omissions, or negligence in professional services provided by your business.\n" +
                            "Cyber Liability Insurance (Optional)\n" +
                            "\n" +
                            "Coverage Limit: $500,000\n" +
                            "Description: Protects against losses from cyberattacks, data breaches, and other digital threats."
                        }</p>
                    </div>
                    <div className="payment-detailed-container-home-claim">
                        <div className="payment-detailed-container-inner">
                            <div className="payment-detailed-table">
                                <table className="payment-detailed-table">
                                    <tr>
                                        <td>Policy no</td>
                                        {/*<td>{selectedPolicy.name}</td>*/}
                                    </tr>
                                    <tr>
                                        <td>Start date</td>
                                        {/*<td>{selectedPolicy.date}</td>*/}
                                    </tr>
                                    <tr>
                                        <td>End date</td>
                                        {/*<td>{selectedPolicy.date}</td>*/}
                                    </tr>
                                </table>
                            </div>
                            <div className="policy-detailed-buttons">
                                <button className="view-button">
                                    View
                                </button>
                                <button className="view-button">
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className="payment-detailed-pdf">
                            <img className="pdf-image-policy" src="/image%208.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeHomePolicy