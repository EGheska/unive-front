import React, {useEffect} from "react";
import "../styles/customerInformationComponent.css"


const CustomerInformationComponent = ({personalInfoDTO}) => {
    const [isValidation, setIsValidation] = React.useState(false);


    useEffect(() => {
        if (window.location.pathname === "/new-customer/validation") {
            setIsValidation(false);
            console.log(isValidation + "CustomerInformationComponent");
        } else {
            setIsValidation(true);
            console.log(isValidation + "CustomerInformationComponent");
        }
    }, [isValidation]);


    return (
        <div className="popup-information">
            {isValidation ? (
                <img src="/me.png" alt={"Client"} className="customer-image"/>
            ): (
                <img alt={"Client"} className="customer-image"/>
            )}

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