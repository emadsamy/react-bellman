import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const product = (props) => {
    return (
        <div className="col-lg-4">
            <div className="product">
                <div className="product-image">
                    <div className="overlay">
                        <div className="category-name">{props.category}</div>
                    </div>
                </div>
                <div className="product-body">
                    <div className="product-name">{props.name}</div>
                    <div className="product-date">{props.date}</div>
                </div>
            </div>
        </div>
    );
}

export default product;