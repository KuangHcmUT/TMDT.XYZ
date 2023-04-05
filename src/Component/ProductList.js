// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../Styles/Product.css';

const ProductList = ({ products }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <div className="product-card-info">
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default ProductList;
