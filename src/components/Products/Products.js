import React, { Component } from 'react';
import Product from './Product';
import './Products';

class Products extends Component {
    state = {
        products: [
          {id: 1, name: "iPhone X", category: "Phones", date: "26-5-2020"},
          {id: 2, name: "Dell Inpiron", category: "Tablets", date: "27-5-2020"},
          {id: 3, name: "Bmw", category: "Cars", date: "28-5-2020"},
          {id: 4, name: "shoes", category: "Clothes", date: "29-5-2020"},
          {id: 5, name: "mercedes c180", category: "cars", date: "30-5-2020"},
          {id: 6, name: "iPhone 7 plus", category: "Phones", date: "31-5-2020"}
        ]
    }
    render() {
        return (
            <div className="products">
                <div className="container">
                    <h2>{this.props.title}</h2>
                    <div className="row">
                        {this.state.products.map(product => {
                            return <Product name={product.name} category={product.category} date={product.date} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;