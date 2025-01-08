import React, {useState} from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";
import '../styles/clientPaymentPage.css';

const policies = [
    {name: "XP93028476", status: "expired", date: "09/15/2024", progress: "100%"},
    {name: "YP51456178", status: "ongoing", date: "10/31/2025", progress: "75%"},
    {name: "QT46517894", status: "ongoing", date: "10/31/2025", progress: "50%"},
]


const ClientPaymentPage = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const handleRowClick = (policy) => {
        setSelectedPolicy(policy.name === selectedPolicy?.name ? null : policy);
        console.log("selected policy: ", selectedPolicy);
    };
    return (
        <div className="pageClass-home-payment">
            <div className="header-container">
                <p className="homepage-header-p">My Payments</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="policy-container-main">
                    <div className="payment-container">
                        <table className="payment-table">
                            <thead>
                            <tr>
                                <th>Payment number</th>
                                <th>Status</th>
                                <th>Expiration Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {policies.map((policy, index) => (
                                <tr
                                    key={index}
                                    onClick={() => {
                                        handleRowClick(policy)
                                    }}
                                    className={policy.name === selectedPolicy?.name ? "selected-row" : ""}>
                                    <td>{policy.name}</td>
                                    <td>{policy.status}</td>
                                    <td>{policy.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button">
                            New Claim  <span>→</span>
                        </button>
                    </div>
                    {selectedPolicy && (
                        <div className="payment-detailed-container">
                            <div className="payment-detailed-container-inner">
                                <div className="payment-detailed-table">
                                    <table className="payment-detailed-table">
                                        <tr>
                                            <td>Payment reference</td>
                                            <td>{selectedPolicy.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Start date</td>
                                            <td>{selectedPolicy.date}</td>
                                        </tr>
                                        <tr>
                                            <td>End date</td>
                                            <td>{selectedPolicy.date}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td>{selectedPolicy.status}</td>
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
                    )}
                </div>
            </div>
        </div>
    )
}

export default ClientPaymentPage;