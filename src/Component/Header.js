// import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // import the search icon
// import { Button } from 'bootstrap';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Styles/Header.css';
import { Button } from 'react-bootstrap';

function Header() {
    const quantity = localStorage.getItem('quantity');

    return (
        <div className="Header">
            <div className="logo">
                <img
                    src="http://gdcn.toilamwebdao.com/wp-content/uploads/2022/12/123-1024x366.jpg"
                    alt="Technology Logo"
                />
            </div>
            <div className="search">
                <input type="text" placeholder="Search" className="searchInput" />
                <FaSearch className="searchIcon" />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Link to="/cart" className="cart">
                <Button className="cart">
                    <p className="cartText">Giỏ hàng</p>
                    <FaShoppingCart />
                    <span className="cartCount">{quantity}</span>
                </Button>
            </Link>
        </div>
    );
}

export default Header;
