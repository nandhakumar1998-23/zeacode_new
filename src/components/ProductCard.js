// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <>
    <span className='flex'>
      
    <div className="product-card fade-in">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
    </span>
    </>
  );
};

export default ProductCard;
