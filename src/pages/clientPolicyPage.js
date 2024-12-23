import React from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";
import "../styles/clientPolicyPage.css"


const policies = [
    {name: "XP93028476", status: "expired", date: "09/15/2024" },
    {name: "YP51456178", status: "ongoing", date: "10/31/2025" },
]

const clientPolicyPage = () => {
    return (
        <div className="pageClass-policy">
            <Header />
            <div className="header-container">
                <p className="homepage-header-p">My Policies</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
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
                        {policies.map((policy) =>(
                            <tr key={policy.name}>
                                <td>{policy.name}</td>
                                <td>{policy.status}</td>
                                <td>{policy.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default clientPolicyPage;