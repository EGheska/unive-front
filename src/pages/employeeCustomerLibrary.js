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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis gravida sem, posuere varius libero faucibus eget. Maecenas quis finibus erat, quis feugiat magna. In est mi, efficitur at mi at, sodales iaculis elit. In placerat sapien vel lectus laoreet, id volutpat nunc sollicitudin. Sed porta sem magna, vitae posuere neque posuere nec. Integer ut accumsan massa. Fusce orci mi, euismod eu venenatis eu, egestas ut nulla. Nam eros sapien, bibendum rutrum pharetra eget, tristique sollicitudin nunc. Morbi non nunc ut mi pellentesque aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed diam nunc, pharetra ac euismod at, placerat a diam. Nam a venenatis nisi. Etiam sed accumsan dui, non blandit lectus. Vestibulum quis sapien nulla. Sed id faucibus felis. Duis hendrerit scelerisque orci ac facilisis.

                                    Praesent suscipit semper tempus. Praesent viverra ut tortor ac lacinia. Ut ac ex at purus luctus consectetur. Donec sapien mi, fringilla at lectus ac, hendrerit ultricies nisl. Duis a mattis odio. Nullam ac mauris elit. Maecenas mattis aliquet dui, feugiat aliquet diam accumsan vitae. In hac habitasse platea dictumst. Nulla eget nisi faucibus, hendrerit justo in, euismod enim. Nulla ex dui, tristique at velit non, dictum luctus arcu. Proin at eleifend quam. Donec rutrum placerat diam.

                                    Suspendisse nec sagittis libero. Mauris leo elit, tincidunt eu urna vel, rutrum iaculis sem. Etiam maximus lorem nec imperdiet tempus. Nam ut magna molestie, dignissim velit eget, vehicula sem. Nunc volutpat aliquet quam. Nullam orci nisl, sodales ac dolor ac, vestibulum gravida lacus. Sed scelerisque, mauris eget vulputate gravida, elit ipsum semper est, nec tincidunt tortor sem ut felis. Nam molestie metus a ipsum elementum, auctor gravida mi interdum.

                                    Donec nisi dui, lobortis et dictum sed, consectetur vehicula elit. Quisque dictum neque ut lorem iaculis, id viverra orci ultrices. Nulla facilisi. Etiam.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EmployeeCustomerLibrary;