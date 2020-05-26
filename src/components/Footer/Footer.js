import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footer = (props) => {
    return (
        <footer>
            <div className="container text-center">
                <div className="footer-top">
                    <ul className="list-unstyled links d-flex justify-content-center">
                        <li><Link href="">Home</Link></li>
                        <li><Link href="">Pricing</Link></li>
                        <li><Link href="">Contact</Link></li>
                    </ul>
                </div>
                <div className="divider"></div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-lg-12 text-center"><p>© Bellman All Rights Reserved.</p></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;