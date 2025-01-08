import React, {useState} from 'react'
import Navbar from "../components/navbar";
import Header from "../components/header";
import CustomerSearchComponent from "../components/customerSearchComponent";
import "../styles/employeeCustomerLibrary.css"

const EmployeeCustomerLibrary = () => {
    const [isCustomerSelected, setIsCustomerSelected] = useState(false);

    const handleCustomerSelection = (selected) => {
        setIsCustomerSelected(selected);
    }
    return (
        <div className="pageClass-customerLibrary">
            <Header />
            <div className="header-container">
                <p className="homepage-header-p">Customer Library</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container-customer-library">
                <Navbar className="nav"/>
                <CustomerSearchComponent onCustomerSelected={handleCustomerSelection}/>
                {isCustomerSelected && (
                    <div>
                        asdf
                    </div>
                )}
            </div>
        </div>
    )
}

export default EmployeeCustomerLibrary;