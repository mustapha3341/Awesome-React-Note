import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <nav className="main--nav">
                <ul className="nav--items">
                    <li className="nav--item">
                        <button className="btn edit--note-btn">
                            <span className="material-icons nav--icon">create</span>
                        </button>
                    </li>
                    <li className="nav--item">
                        <button className="btn delete--note-btn">
                            <span className="material-icons nav--icon">delete</span>
                        </button>
                    </li>
                    <li className="nav--item">
                        <button className="btn add--note-btn">
                            <span className="material-icons nav--icon">add</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;