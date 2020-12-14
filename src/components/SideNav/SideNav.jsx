import React from "react";
import "./SideNav.css";

const SideNav = (props) => {
    return (
        <div className="side--nav">
            <button className="toggle--nav-btn">
                <span className="material-icons">menu</span>
            </button>
        </div>
    );
}

export default SideNav;