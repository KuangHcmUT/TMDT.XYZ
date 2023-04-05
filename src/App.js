import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Modal, Button } from 'bootstrap';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './Component/Header';
import Footer from './Component/Footer';

import Home from './Pages/Home';
import Product from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
// import ProductList from './Component/ProductList';

// const products = [
//     { id: 1, name: 'Product 1', price: 10.99 },
//     { id: 2, name: 'Product 2', price: 19.99 },
//     { id: 3, name: 'Product 3', price: 7.99 },
//     { id: 4, name: 'Product 4', price: 5.99 },
//     { id: 5, name: 'Product 5', price: 9.99 },
//     { id: 6, name: 'Product 6', price: 11.99 },
//     { id: 7, name: 'Product 7', price: 12.99 },
//     { id: 8, name: 'Product 8', price: 13.99 },
//     { id: 9, name: 'Product 9', price: 14.99 },
//     { id: 10, name: 'Product 10', price: 15.99 },
//     { id: 11, name: 'Product 11', price: 16.99 },
//     { id: 12, name: 'Product 12', price: 17.99 },
//     { id: 13, name: 'Product 13', price: 18.99 },
//     { id: 14, name: 'Product 14', price: 19.99 },
//     { id: 15, name: 'Product 15', price: 20.99 },
//     { id: 16, name: 'Product 16', price: 21.99 },
//     { id: 17, name: 'Product 17', price: 22.99 },
//     { id: 18, name: 'Product 18', price: 23.99 },
//     { id: 19, name: 'Product 19', price: 24.99 },
//     { id: 20, name: 'Product 20', price: 25.99 },
// ];

function App() {
    const bodyStyle = {
        minHeight: '500px',
    };

    return (
        <div className="App">
            <Header />
            <body style={bodyStyle}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/product" element={<ProductList products={products} />} /> */}
                </Routes>
            </body>
            {/* <Cart /> */}
            <Footer />
        </div>
    );
}

export default App;
