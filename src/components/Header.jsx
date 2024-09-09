import React from "react";
import "../../public/header.css";
import isroLogo from "../../public/logo.png"; // Path to your logo image
import carImage from "../../public/car.png"; // Path to your car image

const Header = () => {
  return (
    <header className="header">
      {/* Logo section */}
      <div className="logo">
        <a href="#home">
          <img src={isroLogo} alt="ISRO Logo" />
        </a>
      </div>

      {/* Navigation menu */}
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#algorithm">Algorithm</a>
        <a href="#demo">Demo</a>
        <a href="#performance">Performance</a>
        <a href="#usecases">Use Cases</a>
        <a href="#documentation">Documentation</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Call-to-action button */}
      <button className="cta-button">Request a Demo</button>
    </header>
  );
};

export default Header;
