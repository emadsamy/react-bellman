import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const category = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 col-md-6">
            <Link to="/" className="categoreis-box">
                <div className="categories-image" style={{ backgroundImage: `url(${props.image})` }}>
                    <div className="overlay">
                        <div className="categories-name">{props.category}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default category;