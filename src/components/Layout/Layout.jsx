import React from "react";
import SideNav from "../SideNav/SideNav";
import SideBar from "../SideBar/SideBar";
import Main from "../Main/Main";

import "./Layout.css";

const Layout = () => {
    return (
        <div className="app--container">
            <SideNav />
            <SideBar />
            <Main />
        </div>
    );
};

export default Layout;
