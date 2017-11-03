import * as React from "react";

import "components/navbar/Navbar.less";
import Tab from "components/tab/Tab";

const Navbar = () => {
    return (<div>
        <ul id="sideNavParent">
            <li className="user-profile">
                <i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
                <br />
                <div className="user-info-box">
                <Tab />
                </div>
            </li>
        </ul>
        <div className="navbar-bottom-fixed-logo">
            <img className="user-picture" src="/assets/icons/Logo-white.png"/>
        </div>
    </div>);
};

export default Navbar;