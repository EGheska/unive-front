import React from 'react'
import "../styles/customerPoliciesForm.css"



const CustomerPoliciesForm = ({dataObject}) => {

    const groupedData = dataObject.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div className="customer-form-container">
            {Object.entries(groupedData).map(([type, items]) => (
                <div key={type}>
                    <h3>
                        {type.charAt(0).toUpperCase() + type.slice(1)} Data
                    </h3>
                    <table>
                        <thead>
                        <tr>
                            {Object.keys(items[0]).map((key) => (
                                <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, idx) => (
                                    <td key={idx}>{value}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button className="form-button">New {type.charAt(0).toUpperCase() + type.slice(1)}</button>
                </div>
            ))}
        </div>
    )
}

export default CustomerPoliciesForm;