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
                            <div className="popup-information">
                                <img src="a" alt={"Client"}/>
                                <table>

                                </table>
                            </div>
                            <button>
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