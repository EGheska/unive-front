import React, {useState} from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";
import "../styles/clientPolicyPage.css"


const policies = [
    {name: "XP93028476", status: "expired", date: "09/15/2024"},
    {name: "YP51456178", status: "ongoing", date: "10/31/2025"},
    {name: "QT46517894", status: "ongoing", date: "10/31/2025"},
]

const ClientPolicyPage = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const handleRowClick = (policy) => {
        setSelectedPolicy(policy.name === selectedPolicy?.name ? null : policy);
        console.log("selected policy: ", selectedPolicy);
    };

    return (
        <div className="pageClass-policy">
            <Header/>
            <div className="header-container">
                <p className="homepage-header-p">My Policies</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="policy-container-main">
                    <div className="policy-container">
                        <table className="policy-table">
                            <thead>
                            <tr>
                                <th>Policy number</th>
                                <th>Status</th>
                                <th>Expiration date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {policies.map((policy, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(policy)}
                                    className={policy.name === selectedPolicy?.name ? "selected-row" : ""}
                                >
                                    <td>{policy.name}</td>
                                    <td>{policy.status}</td>
                                    <td>{policy.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button">
                            New insurance <span>→</span>
                        </button>
                    </div>
                    {selectedPolicy && (
                        <div className="policy-detailed-container">
                            <div className="policy-detailed-container-inner">
                                <div className="policy-detailed-table">
                                    <table className="policy-detailed-table">
                                        <tr>
                                            <td>Policy number</td>
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
                                <button className="view-button">
                                    View
                                </button>
                                <button className="view-button">
                                    Download
                                </button>
                            </div>
                            <div className="policy-detailed-pdf">
                                asd
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientPolicyPage;