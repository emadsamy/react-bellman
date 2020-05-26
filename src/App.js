import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Carousel />
        <Categories title="Categories" />
        <Products title="Products" />
      </div>
    );
  }
}

export default App;
