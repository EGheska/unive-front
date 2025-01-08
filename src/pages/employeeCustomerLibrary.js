import React, {useState} from 'react'
import Navbar from "../components/navbar";
import Header from "../components/header";
import CustomerSearchComponent from "../components/customerSearchComponent";
import "../styles/employeeCustomerLibrary.css"
import CustomerInformationComponent from "../components/customerInformationComponent";


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


const EmployeeCustomerLibrary = () => {
    const [isCustomerSelected, setIsCustomerSelected] = useState(false);

    const handleCustomerSelection = (selected) => {
        setIsCustomerSelected(selected);
    }
    return (
        <div className="pageClass-customerLibrary">
            <Header/>
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

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmployeeCustomerLibrary;