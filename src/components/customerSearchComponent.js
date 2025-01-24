import React, {useEffect, useState} from 'react'
import "../styles/customerSearchComponent.css";


// Data should be passed to this component
// also write some onlick function to the serach icon or enter

const customerDTO = [
    {'FisrtName': "Dmytro", 'LastName': "Taras", "date": "11.04.2002", "id": "CUST0000001"}
]

const CustomerSearchComponent = ({onCustomerSelected}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log(value)
        setSearch(value);
        if (!value) {
            setIsSelected(false);
            onCustomerSelected(false);
        } else {
            setIsSelected(true);
        }
    }

    const handleViewButton = () => {
        setIsSelected(true);
        onCustomerSelected(true);
    }

    return (
        <div className="search-container">
            <div className="search-container-inner">
                <div className="search-input">
                    <input
                        id="customer-library"
                        type="text"
                        className="input-search-prompt"
                        placeholder="search by name, phone number, customer number"
                        onChange={handleInputChange}
                    />
                    <img src="/input_icon.png" alt="Search" className="input_icon"

                    />
                </div>
                {isSelected && (
                    <div className="search-popup">
                        <img src="/me.png" alt="Customer"/>
                        <div className="info">
                            <div><span className="label">First Name:</span> Dima</div>
                            <div><span className="label">Surname:</span> Taras</div>
                            <div><span className="label">Date of birth:</span> 11.04.2002</div>
                            <div><span className="label">Customer No.:</span> CUST10293847</div>
                        </div>
                        <button className="detailed-button" onClick={handleViewButton}>
                            View <span>→</span>
                        </button>
                    </div>
                )}
            </div>
            <button className="view-btn">+ new customer</button>
        </div>
    );
};

export default CustomerSearchComponent;