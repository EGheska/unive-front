import React from "react";
import "../styles/customerInformationComponent.css"


const CustomerInformationComponent = ({personalInfoDTO}) => {
    return (
        <div className="popup-information">
            <img src="/me.png" alt={"Client"} className="customer-image"/>
            <table className="customer-info-table">
                <thead>
                <tr>
                    <th>Customer Information</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(personalInfoDTO).map(([key, value]) => (
                    <tr key={key}>
                        <td>
                            {key.replace(/([a-z])([A-Z])/g, '$1 $2')}
                        </td>
                        <td className="field-value">{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerInformationComponent;