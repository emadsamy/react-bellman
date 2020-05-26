import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbar = (props) => {
    const [toggleSidebar, setToggleSidebar] = useState("menu-bar");
    const toggleNavigationbar = () => {
        if (toggleSidebar === "menu-bar") {
            setToggleSidebar("menu-bar active");
        } else {
            setToggleSidebar("menu-bar");
        }
    }
    const backdropToggle = () => {
        if (toggleSidebar === "menu-bar") {
            setToggleSidebar("menu-bar active");
        } else {
            setToggleSidebar("menu-bar");
        }
    }
    return (
        <React.Fragment>
            <div className="navbar">
                <div className="container">
                    <div className="logo"><Link to="/">Bellman</Link></div>
                    <div className="links">
                        <ul className={toggleSidebar === "menu-bar" ? "list-unstyled list-links" : "list-unstyled list-links active"}>
                            <li><Link>Home</Link></li>
                            <li><Link>Categories</Link></li>
                            <li><Link>Products</Link></li>
                            <li><Link>About</Link></li>
                            <li className="auth"><Link>Login</Link></li>
                        </ul>
                        <div id="menuBar" className={toggleSidebar} onClick={toggleNavigationbar}>
                            <div className="child-bar-1"></div>
                            <div className="child-bar-2"></div>
                            <div className="child-bar-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={toggleSidebar === "menu-bar" ? "backdrop" : "backdrop active"} onClick={backdropToggle}></div>
        </React.Fragment>
    );
}

export default navbar;