import React from 'react';
import '../styles/homepage.css';
import Navbar from "../components/navbar";
import Header from "../components/header";
import {useNavigate} from "react-router-dom";


const personalInfoDTO = {
    firstName: "Dima",
    infix: "—",
    surname: "Taras",
    dateOfBirth: "11.04.2002",
    address: "Haverstraatpassage 12B , 7511EW , ENSCHEDE",
    email: "unknown@who.knows.email",
    phoneNumber: "+12 3 45 67 89 00",
}

const notificationsDTO = [
    {policyNumber: "XP93028476", status: "Expired", expirationDate: "09/15/2024"},
    {policyNumber: "YP65038241", status: "Ongoing", expirationDate: "10/31/2025"},
];



const HomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/notifications')
    }
    const handlePolicyClick = () => {
        navigate('/policies')
    }
    const handleClaimsClick = () => {
        navigate('/claims')
    }
    const handlePaymentClick = () => {
        navigate('/payment')
    }

    return (
        <div className="pageClass-home">
            <div className="header-container">
                <p className="homepage-header-p">My dashboard</p>
                <p className="homepage-header-sub-p">Welcome, here is an overview for you</p>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="content-container">
                    <div className="personal-info-container">
                        <h2>Personal Information</h2>
                        <table className="personal-info-table">
                            <tbody>
                            {personalInfoDTO.firstName && (
                                <tr>
                                    <td>First name</td>
                                    <td>{personalInfoDTO.firstName}</td>
                                </tr>
                            )}
                            {personalInfoDTO.infix && (
                                <tr>
                                    <td>Infix</td>
                                    <td>{personalInfoDTO.infix}</td>
                                </tr>
                            )}
                            {personalInfoDTO.surname && (
                                <tr>
                                    <td>Surname</td>
                                    <td>{personalInfoDTO.surname}</td>
                                </tr>
                            )}
                            {personalInfoDTO.dateOfBirth && (
                                <tr>
                                    <td>Date of birth</td>
                                    <td>{personalInfoDTO.dateOfBirth}</td>
                                </tr>
                            )}
                            {personalInfoDTO.address && (
                                <tr>
                                    <td>Address</td>
                                    <td>{personalInfoDTO.address}</td>
                                </tr>
                            )}
                            {personalInfoDTO.email && (
                                <tr>
                                    <td>Email</td>
                                    <td>{personalInfoDTO.email}</td>
                                </tr>
                            )}
                            {personalInfoDTO.phoneNumber && (
                                <tr>
                                    <td>Telephone number</td>
                                    <td>{personalInfoDTO.phoneNumber}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <button className="edit-button">
                            Edit <span>→</span>
                        </button>
                    </div>
                    <div className="notifications-container">
                        <h2>Notifications</h2>
                        <table className="notifications-table">
                            <thead>
                            <tr>
                                <th>Policy number</th>
                                <th>Status</th>
                                <th>Expiration date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notificationsDTO.map((notification, index) => (
                                <tr key={index}>
                                    <td>{notification.policyNumber}</td>
                                    <td>{notification.status}</td>
                                    <td>{notification.expirationDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button" onClick={handleButtonClick}>
                            All Notifications <span>→</span>
                        </button>
                    </div>
                    <div className="notifications-container">
                        <h2>Policies</h2>
                        <table className="notifications-table">
                            <thead>
                            <tr>
                                <th>Policy number</th>
                                <th>Status</th>
                                <th>Expiration date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notificationsDTO.map((notification, index) => (
                                <tr key={index}>
                                    <td>{notification.policyNumber}</td>
                                    <td>{notification.status}</td>
                                    <td>{notification.expirationDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button" onClick={handlePolicyClick}>
                            Overview Policies <span>→</span>
                        </button>
                    </div>
                    <div className="notifications-container">
                        <h2>Claims</h2>
                        <table className="notifications-table">
                            <thead>
                            <tr>
                                <th>Policy number</th>
                                <th>Status</th>
                                <th>Expiration date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notificationsDTO.map((notification, index) => (
                                <tr key={index}>
                                    <td>{notification.policyNumber}</td>
                                    <td>{notification.status}</td>
                                    <td>{notification.expirationDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button" onClick={handleClaimsClick}>
                            Overview Claims <span>→</span>
                        </button>
                    </div>
                    <div className="notifications-container">
                        <h2>Payments</h2>
                        <table className="notifications-table">
                            <thead>
                            <tr>
                                <th>Policy number</th>
                                <th>Status</th>
                                <th>Expiration date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {notificationsDTO.map((notification, index) => (
                                <tr key={index}>
                                    <td>{notification.policyNumber}</td>
                                    <td>{notification.status}</td>
                                    <td>{notification.expirationDate}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <button className="goto-button" onClick={handlePaymentClick}>
                            All Payments <span>→</span>
                        </button>
                    </div>
                    <div className="faq-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;