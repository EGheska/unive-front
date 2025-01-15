import React, {useState} from 'react'
import Navbar from "../components/navbar";
import "../styles/employeeHomeClaimAdivce.css"
import Popup from "../components/Popup";

const EmployeeHomeClaimAdvice = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => setPopupOpen(true);
    const handleClosePopup = () => setPopupOpen(false);

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">Customer Claims</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-policy">
                <Navbar/>
                <div className="customer-claims-container-main">
                    <div className="customer-claims">
                        <h1>Customer Claims</h1>
                        <span className="claim-number">YP65038241</span>
                    </div>
                    <hr></hr>
                    <div className="customer-claims-description">
                        <h2>AI generated report about claim</h2>
                        <p className="claim-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis urna sed
                            fringilla pharetra. Phasellus tempus vulputate velit, nec finibus lacus egestas vitae.
                            Aenean laoreet facilisis pretium. Nam consequat, nibh id viverra aliquet, orci tortor mollis
                            diam, in luctus turpis odio eu eros. Aenean accumsan vestibulum diam, non fringilla elit
                            imperdiet vel. Sed nec metus euismod, porttitor ligula sit amet, mollis metus. Sed lacus
                            metus, suscipit et mauris ac, elementum varius odio. Etiam ut sollicitudin ipsum.\n" +
                            "\n" +
                            "Sed nec pulvinar arcu. In hac habitasse platea dictumst. Nullam non felis enim. Morbi
                            blandit aliquam erat, eget bibendum ex ultrices ac. Aliquam sed venenatis est. Donec
                            malesuada dolor eget euismod placerat. Donec non auctor nisi. Nunc a mi viverra, aliquam leo
                            nec, vestibulum elit. Ut ut diam erat. Duis vel nisi sit amet arcu blandit consectetur sit
                            amet quis nunc. Nunc a aliquam turpis. Vestibulum ullamcorper egestas tellus, sed varius
                            ante tempus et."
                        </p>
                        <div className="buttons-container">
                            <button className="download-button">Download policy</button>
                            <button className="download-button">Download add. docs.</button>
                        </div>
                    </div>
                    <div className="claim-amount">
                        <hr></hr>
                        <div className="amount-span">
                            Claim amount based on the policy
                            <span> 1000 euros</span>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="suggested-decision-claims">
                        <h2>Suggested decision</h2>
                        <p className="claim-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis urna sed
                            fringilla pharetra. Phasellus tempus vulputate velit, nec finibus lacus egestas vitae.
                            Aenean laoreet facilisis pretium. Nam consequat, nibh id viverra aliquet, orci tortor mollis
                            diam, in luctus turpis odio eu eros. Aenean accumsan vestibulum diam, non fringilla elit
                        </p>
                    </div>
                    <div className="controls">
                        <button className='view-attached-button'>Approve</button>
                        <button className="view-attached-button" onClick={handleOpenPopup}>Update the status</button>
                        <button className="view-attached-button">Deny</button>
                    </div>
                    <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title="Update the status">
                        <p>Select the status of a claim</p>
                        <label className="popup-labels">
                            <input type="checkbox"/>
                            Approved
                        </label>
                        <label className="popup-labels">
                            <input type="checkbox"/>
                            On hold/in progress
                        </label>
                        <label className="popup-labels">
                            <input type="checkbox"/>
                            Deny
                        </label>
                        <button className="popup-button" onClick={handleClosePopup}>Save</button>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default EmployeeHomeClaimAdvice;