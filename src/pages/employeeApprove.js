import React from 'react';
import Navbar from "../components/navbar";
import CustomerInformationComponent from "../components/customerInformationComponent";
import "../styles/employeeApprove.css"

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

const EmployeeApprove = () => {
    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">New Customer</p>
                <p className="homepage-header-sub-p">Policy confirmation</p>
            </div>
            <div className="main-container-new-customer">
                <Navbar/>
                <div className="customer-info-container-validation">
                    <CustomerInformationComponent personalInfoDTO={dataObject}/>
                </div>
            </div>
            <div className="policy-detailed-container-validation">
                <div className="policy-detailed-container-inner-validation">
                    <div className="policy-detailed-validation">
                        <table className="policy-detailed-table-validation">
                            <tr>
                                <td>Policy number</td>
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
                    <div className="policy-detailed-buttons-validation">
                        <button className="view-button-validation">
                            View
                        </button>
                        <button className="view-button-validation">
                            Download
                        </button>
                        <button className="view-button-validation">Approve!</button>
                    </div>
                </div>
                <div className="policy-detailed-pdf-validation">
                    <img className="pdf-image-policy-validation" src="/image%208.png"></img>
                </div>
            </div>

        </div>
    )
}
export default EmployeeApprove;