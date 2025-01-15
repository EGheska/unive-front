import React from "react";
import Navbar from "../components/navbar";

const EmployeeHomePolicy = () => {
    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <div className="homepage-header-p">Customer Policy</div>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container-new-policy">
                <Navbar/>
                <div className="customer-claims-container-main">
                    <div className="customer-claims">
                        <h1>Customer policy</h1>
                        <span className="claim-number">YP65038241</span>
                    </div>
                    <hr></hr>
                    <div className="customer-claims-description">
                        <h2>Policy overview</h2>
                        <p className="claim-text">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis urna sed fringilla pharetra. Phasellus tempus vulputate velit, nec finibus lacus egestas vitae. Aenean laoreet facilisis pretium. Nam consequat, nibh id viverra aliquet, orci tortor mollis diam, in luctus turpis odio eu eros. Aenean accumsan vestibulum diam, non fringilla elit imperdiet vel. Sed nec metus euismod, porttitor ligula sit amet, mollis metus. Sed lacus metus, suscipit et mauris ac, elementum varius odio. Etiam ut sollicitudin ipsum.\n" +
                            "\n" +
                            "Sed nec pulvinar arcu. In hac habitasse platea dictumst. Nullam non felis enim. Morbi blandit aliquam erat, eget bibendum ex ultrices ac. Aliquam sed venenatis est. Donec malesuada dolor eget euismod placerat. Donec non auctor nisi. Nunc a mi viverra, aliquam leo nec, vestibulum elit. Ut ut diam erat. Duis vel nisi sit amet arcu blandit consectetur sit amet quis nunc. Nunc a aliquam turpis. Vestibulum ullamcorper egestas tellus, sed varius ante tempus et."}</p>
                    </div>
                    <div className="payment-detailed-container-home-claim">
                        <div className="payment-detailed-container-inner">
                            <div className="payment-detailed-table">
                                <table className="payment-detailed-table">
                                    <tr>
                                        <td>Policy no</td>
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
                </div>
            </div>
        </div>
    )
}

export default EmployeeHomePolicy