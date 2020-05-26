import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import './Categories.css';
import Clothes from '../../assets/img/clothes.jpg';
import Cars from '../../assets/img/cars.jpeg';
import Tablets from '../../assets/img/tablets.jpg';
import Phones from '../../assets/img/phones.jpeg';

class Categories extends Component {
    state = {
        categories : [
            { id: 1, category_name: "Clothes", category_logo: Clothes },
            { id: 2, category_name: "Cars", category_logo: Cars },
            { id: 3, category_name: "Tablets", category_logo: Tablets },
            { id: 4, category_name: "Phones", category_logo: Phones }
        ]
    }
    render() {
        return (
            <div className="categories">
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <div className="row">
                        {this.state.categories.map(category => {
                            return <Category 
                                        category={category.category_name} 
                                        image={category.category_logo}
                                    />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;