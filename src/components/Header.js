// src/components/Header.js
import React from 'react';
import { ReactTyped as Typed } from 'react-typed'; // Correct import
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://cdn.pixabay.com/video/2020/11/30/57904-486852810_tiny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        <h1>
          <Typed
            strings={[
              "We Provide Software & Website",
              "We Create Amazing Solutions",
              "We Build Your Digital Dreams",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>
      </div>
    </div>
  );
};

export default Header;
