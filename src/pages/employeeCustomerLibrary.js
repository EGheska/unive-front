import React, {useState} from 'react'
import Navbar from "../components/navbar";
import CustomerSearchComponent from "../components/customerSearchComponent";
import "../styles/employeeCustomerLibrary.css"
import CustomerInformationComponent from "../components/customerInformationComponent";
import CustomerPoliciesForm from "../components/customerPoliciesForm";


const personalInfoDTO = {
    CustomerNo: "CUST110293847",
    firstName: "Dima",
    infix: "—",
    surname: "Taras",
    dateOfBirth: "11.04.2002",
    address: "Haverstraatpassage 12B , 7511EW , ENSCHEDE",
    email: "unknown@who.knows.email",
    phoneNumber: "+12 3 45 67 89 00",
}

const dataObj = [
    {type: "policy", number: "YP65038241", status: "Ongoing", date: "10/31/2025"},
    {type: "policy", number: "XP93028476", status: "Expired", date: "10/31/2024"},
    {type: "claims", number: "YP65038241", status: "Solved"},
    {type: "claims", number: "XP93028476", status: "Ongoing"},
    {type: "payments", number: "YP65038241", status: "Paid", date: "09/15/2024"},
    {type: "payments", number: "XP93028476", status: "Not Paid", date: "10/31/2025"}
]


const EmployeeCustomerLibrary = () => {
    const [isCustomerSelected, setIsCustomerSelected] = useState(false);

    const handleCustomerSelection = (selected) => {
        setIsCustomerSelected(selected);
    }
    return (
        <div className="pageClass-customerLibrary">
            {/*<Header/>*/}
            <div className="header-container">
                <p className="homepage-header-p">Customer Library</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container-customer-library">
                <Navbar className="nav"/>
                <div className="content-container-employee">
                    <CustomerSearchComponent onCustomerSelected={handleCustomerSelection}/>
                    {isCustomerSelected && (
                        <div className="popup-container">
                            <CustomerInformationComponent personalInfoDTO={personalInfoDTO}/>
                            <button className="edit-button-cl">
                                Edit <span></span>
                            </button>
                            <div className="popup-detailed-information">
                                <span className="span-label">
                                    Detailed information
                                </span>
                                <span className="detailed-information-container">
                                    The detailed information about the customer will be displayed here. This information includes the type of business etc
                                </span>
                            </div>
                            <CustomerPoliciesForm dataObject={dataObj}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmployeeCustomerLibrary;