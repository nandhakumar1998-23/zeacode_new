// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css'

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'Web Application Development',
      price: 9999,
      image: 'https://cdn.pixabay.com/photo/2016/11/23/14/45/code-1853305_1280.jpg', // Relevant image for web applications
    },
    {
      id: 2,
      title: 'Software Solutions',
      price: 9999,
      image: 'https://margcompusoft.com/m/wp-content/uploads/2024/05/1_tqY07IY4fJF1YOayxFEcFQ.jpg', // Relevant image for software
    },
    {
      id: 3,
      title: 'Online Class Platform',
      price: 9999,
      image: 'https://edtech4beginners.com/wp-content/uploads/2021/01/7-must-have-features-for-online-learning-platforms-1.jpg', // Relevant image for online classes
    },
    {
      id: 4,
      title: 'SEO Optimization Services',
      price: 9999,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJPZdCsvpUWs-W2oE-HsID4Hjn1qQyH_rXtWcHm8mcakmx0F84kcxj-Vlc1O4Y6s5KHs&usqp=CAU', // Relevant image for SEO
    },
    {
      id: 5,
      title: 'Live Project Training',
      price: 9999,
      image: 'https://nuyew.academy/wp-content/uploads/2018/06/AdobeStock_210408896-e1540988137320.jpeg', // Relevant image for SEO
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
