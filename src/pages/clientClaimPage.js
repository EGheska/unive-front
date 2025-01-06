import React, {useState} from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";
import '../styles/clientClaimPage.css';

const policies = [
    {name: "XP93028476", status: "expired", date: "09/15/2024", progress: "100%"},
    {name: "YP51456178", status: "ongoing", date: "10/31/2025", progress: "75%"},
    {name: "QT46517894", status: "ongoing", date: "10/31/2025", progress: "50%"},
]


const ClientClaimPage = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(null);

    const handleRowClick = (policy) => {
        setSelectedPolicy(policy.name === selectedPolicy?.name ? null : policy);
        console.log("selected policy: ", selectedPolicy);
    };
    return (
        <div className="pageClass-home-claims">
            <Header/>
            <div className="header-container">
                <p className="homepage-header-p">Claims</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="policy-container-main">
                    <div className="claims-container">
                        <table className="claims-table">
                            <thead>
                            <tr>
                                <th>Claim number</th>
                                <th>Status</th>
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
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button">
                            New Claim  <span>→</span>
                        </button>
                    </div>
                    {selectedPolicy && (
                        <div className="claims-detailed-container">
                            <div className="claims-detailed-container-inner">
                                <div className="claims-detailed-table">
                                    <table className="claims-detailed-table">
                                        <tr>
                                            <td>Claim number</td>
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
                                <div className="claim-status-bar-container">
                                    <div className="status-bar">
                                        <div
                                            className="progress"
                                            style={{
                                                width: selectedPolicy.progress,
                                            }}
                                        ></div>
                                        <div
                                            className="marker"
                                            style={{
                                                left: selectedPolicy.progress,
                                            }}
                                        ></div>
                                        <div
                                            className="label"
                                            style={{
                                                left: selectedPolicy.progress,
                                            }}
                                        >
                                        </div>
                                    </div>
                                </div>
                                <div className="claims-detailed-buttons">
                                    <button className="view-button">
                                        View
                                    </button>
                                    <button className="view-button">
                                        Download
                                    </button>
                                </div>
                            </div>
                            <div className="claims-detailed-pdf">
                                <img className="pdf-image-policy" src="/image%208.png"></img>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ClientClaimPage;