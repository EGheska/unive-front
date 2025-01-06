import React from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";

import "../styles/clientNotificationPageStyle.css"


const messages = [
    {id: 1, type: "Payment due coming", date: "15/12/2024"},
    {id: 2, type: "New insurance", date: "16/12/2024"},
    {id: 3, type: "Payment due coming", date: "15/12/2024"},
    {id: 4, type: "New insurance", date: "16/12/2024"},
    {id: 5, type: "Payment due coming", date: "15/12/2024"},
    {id: 6, type: "New insurance", date: "16/12/2024"},
];

const ClientNotificationPage = () => {
    return (
        <div className="pageClass-home-notifications">
            <Header/>
            <div className="header-container">
                <p className="homepage-header-p">My Notifications</p>
                <div className="homepage-header-empty-space"></div>
                {/*<div className="space-between"></div>*/}
            </div>
            <div className="main-container">
            <Navbar className="nav"/>
                <div className="messages-container">
                    <div className="messages-header">
                        <h2>Messages</h2>
                        <div className="messages-actions">
                            <button className="icon-button">
                                <img src="/read-icon.png"></img>
                            </button>
                            <button className="icon-button">
                                <img src="/delete-icon.png"></img>
                            </button>
                        </div>
                    </div>
                    <table className="messages-table">
                        <thead>
                        <tr>
                            <th>Incoming</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages.map((message) => (
                            <tr key={message.id}>
                                <td>
                                    <input type="checkbox"/> {message.type}
                                </td>
                                <td>{message.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default ClientNotificationPage;