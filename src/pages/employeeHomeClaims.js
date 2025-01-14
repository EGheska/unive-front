import React, {useState} from "react";
import Navbar from "../components/navbar";
import "../styles/employeeHomeClaims.css"

const EmployeeHomeClaims = () => {
    const [isAttached, setAttached] = useState(false);
    const handleAttachedClick = () => {
        setAttached(!isAttached);
    }

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">Customer Claims</p>
                <p className="homepage-header-empty-space"></p>
            </div>
            <div className="main-container-new-policy">
                <Navbar/>
                <div className="customer-claims-container-main">
                    {/* Claim Header */}
                    <div className="customer-claims">
                        <h1>Customer Claims</h1>
                        <span className="claim-number">YP65038241</span>
                    </div>
                    <hr></hr>
                    {/* Case Description */}
                    <div className="customer-claims-description">
                        <h2>Case</h2>
                        <p className="claim-text">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis urna sed fringilla pharetra. Phasellus tempus vulputate velit, nec finibus lacus egestas vitae. Aenean laoreet facilisis pretium. Nam consequat, nibh id viverra aliquet, orci tortor mollis diam, in luctus turpis odio eu eros. Aenean accumsan vestibulum diam, non fringilla elit imperdiet vel. Sed nec metus euismod, porttitor ligula sit amet, mollis metus. Sed lacus metus, suscipit et mauris ac, elementum varius odio. Etiam ut sollicitudin ipsum.\n" +
                            "\n" +
                            "Sed nec pulvinar arcu. In hac habitasse platea dictumst. Nullam non felis enim. Morbi blandit aliquam erat, eget bibendum ex ultrices ac. Aliquam sed venenatis est. Donec malesuada dolor eget euismod placerat. Donec non auctor nisi. Nunc a mi viverra, aliquam leo nec, vestibulum elit. Ut ut diam erat. Duis vel nisi sit amet arcu blandit consectetur sit amet quis nunc. Nunc a aliquam turpis. Vestibulum ullamcorper egestas tellus, sed varius ante tempus et."}</p>
                    </div>

                    {/* Claim Details Section */}
                    <div className="payment-detailed-container-home-claim">
                        <div className="payment-detailed-container-inner">
                            <div className="payment-detailed-table">
                                <table className="payment-detailed-table">
                                    <tr>
                                        <td>Payment reference</td>
                                        {/*<td>{selectedPolicy.name}</td>*/}
                                    </tr>
                                    <tr>
                                        <td>Start date</td>
                                        {/*<td>{selectedPolicy.date}</td>*/}
                                    </tr>
                                    <tr>
                                        <td>End date</td>
                                        {/*<td>{selectedPolicy.date}</td>*/}
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        {/*<td>{selectedPolicy.status}</td>*/}
                                    </tr>
                                </table>
                            </div>
                            <div className="policy-detailed-buttons">
                                <button className="view-button">
                                    View
                                </button>
                                <button className="view-button">
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className="payment-detailed-pdf">
                            <img className="pdf-image-policy" src="/image%208.png"></img>
                        </div>
                    </div>
                    <button className="view-attached-button" onClick={handleAttachedClick}>
                        View attached documents
                    </button>
                    {/*/!* Attached Documents *!/*/}
                    {isAttached && (
                        <div className="customer-claims-attached">
                            <h3>Attached documents</h3>
                            <div className="attached-docs">
                                <div className="doc-placeholder"></div>
                                <div className="doc-placeholder"></div>
                                <div className="doc-placeholder"></div>
                                <div className="doc-placeholder"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="empty-space-app"></div>
        </div>
    )
}

export default EmployeeHomeClaims