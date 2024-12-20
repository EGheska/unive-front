import React from 'react';
import '../styles/homepage.css';
import Navbar from "../components/navbar";
import Header from "../components/header";


const personalInfoDTO = {
    firstName: "Dima",
    infix: "—",
    surname: "Taras",
    dateOfBirth: "11.04.2002",
    address: "Haverstraatpassage 12B , 7511EW , ENSCHEDE",
    email: "unknown@who.knows.email",
    phoneNumber: "+12 3 45 67 89 00",
};

const HomePage = () => {
    return (
        <div className="pageClass-home">
            <Header />
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
                    </div>
                        <div className="notifications-container">

                        </div>
                        <div className="policies-container">

                        </div>
                        <div className="claims-container">

                        </div>
                        <div className="payment-container">

                        </div>
                        <div className="faq-container">

                        </div>
                    </div>
                </div>
            </div>
            )
            }

            export default HomePage;