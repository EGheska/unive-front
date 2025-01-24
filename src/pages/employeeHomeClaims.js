import React, {useState} from "react";
import Navbar from "../components/navbar";
import "../styles/employeeHomeClaims.css"
import {useNavigate} from "react-router-dom";

const EmployeeHomeClaims = () => {
    const navigate = useNavigate();
    const [isAttached, setAttached] = useState(false);
    const handleAttachedClick = () => {
        setAttached(!isAttached);
    }
    const handleNextButtonClick = () => {
        navigate("/home/claims/:claimId/claim-advice");
    }

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">Customer Claims</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-policy">
                <Navbar/>
                <div className="customer-claims-container-main">
                    {/* Claim Header */}
                    <div className="customer-claims">
                        <h1>Customer Claims</h1>
                        <span className="claim-number">YP65038241</span>
                    </div>
                    <hr></hr>
                    {/* Case Description */}
                    <div className="customer-claims-description">
                        <h2>Case</h2>
                        <p className="claim-text">{
                            "Subject: Insurance Claim Submission for YP123546\n" +
                            "\n" +
                            "Dear Unive,\n" +
                            "\n" +
                            "I am writing to formally submit a claim under my business insurance policy for an incident that occurred on 29.01.2025. Below are the details of the claim:\n" +
                            "\n" +
                            "Policy Information\n" +
                            "Policyholder Name: SomeBusiness INC\n" +
                            "Policy Number: YP123456\n" +
                            "Incident Details\n" +
                            "Date of Incident: 29.01.2025\n" +
                            "Location: Enschede\n" +
                            "Description of Incident: A fire damaged our office premises"
                        }</p>
                    </div>

                    {/* Claim Details Section */}
                    <div className="payment-detailed-container-home-claim">
                        <div className="payment-detailed-container-inner">
                            <div className="payment-detailed-table">
                                <table className="payment-detailed-table">
                                    <tr>
                                        <td>Payment reference</td>
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
                                    <tr>
                                        <td>Status</td>
                                        {/*<td>{selectedPolicy.status}</td>*/}
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
                    <button className="view-attached-button" onClick={handleAttachedClick}>
                        View attached documents
                    </button>
                    <button className="view-attached-button-next" onClick={handleNextButtonClick}>Next page</button>
                    {/*/!* Attached Documents *!/*/}
                    {isAttached && (
                        <div className="customer-claims-attached">
                            <h3>Attached documents</h3>
                            <div className="attached-docs">
                                <div className="doc-placeholder"></div>
                                <div className="doc-placeholder"></div>
                                <div className="doc-placeholder"></div>
                                <div className="doc-placeholder"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="empty-space-app"></div>
        </div>
    )
}

export default EmployeeHomeClaims