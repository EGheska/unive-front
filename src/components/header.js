import React from 'react'
import "../styles/header.css"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src="./univelogo.svg" alt="unive" className="univelogo"/>
            </div>
            <a href="/sign" className="logout" style={{textDecoration:"none"}}>
                <img src="./exit-svgrepo-com 1.svg" alt="logout"></img> Log out
            </a>

        </div>
    )
}

export default Header;