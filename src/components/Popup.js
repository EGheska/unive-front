import React from "react";
import "../styles/Popup.css";

const Popup = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div className="popup-header">
                    <h2>{title}</h2>
                    <button className="popup-close-btn" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="popup-content">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
