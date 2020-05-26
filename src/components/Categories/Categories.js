import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import Clothes from '../../assets/img/clothes.jpg';
import Cars from '../../assets/img/cars.jpeg';
import Tablets from '../../assets/img/tablets.jpg';
import Phones from '../../assets/img/phones.jpeg';

const category = (props) => {
    return (
        <div className="categories">
            <div className="container">
                <h2>{props.title}</h2>
                <div className="row">
                    <div className="col-lg-3">
                        <Link to="/" className="categoreis-box">
                            <div className="categories-image" style={{ backgroundImage: `url(${Clothes})` }}>
                                <div className="overlay">
                                    <div className="categories-name">Clothes</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3">
                        <Link to="/" className="categoreis-box">
                            <div className="categories-image" style={{ backgroundImage: `url(${Cars})` }}>
                                <div className="overlay">
                                    <div className="categories-name">Cars</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3">
                        <Link to="/" className="categoreis-box">
                            <div className="categories-image" style={{ backgroundImage: `url(${Tablets})` }}>
                                <div className="overlay">
                                    <div className="categories-name">Tablets</div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3">
                        <Link to="/" className="categoreis-box">
                            <div className="categories-image" style={{ backgroundImage: `url(${Phones})` }}>
                                <div className="overlay">
                                    <div className="categories-name">Phones</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default category;