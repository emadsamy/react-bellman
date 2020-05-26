import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbar = (props) => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo"><Link to="/">Bellman</Link></div>
                <div className="links">
                    <ul className="list-unstyled">
                        <li><Link>Home</Link></li>
                        <li><Link>Categories</Link></li>
                        <li><Link>Products</Link></li>
                        <li><Link>About</Link></li>
                        <li className="auth"><Link>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default navbar;