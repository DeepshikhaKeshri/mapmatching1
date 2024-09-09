import React from "react";
import isroLogo from "../../public/expandable.css"; // Import the CSS file for styling

const ExpandableSection = () => {
  return (
    <div className="expandable-section">
      <div className="expandable-content">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Car"
          className="car-image"
        />
        <p className="car-text">
          This is a stylish car! Experience the luxury and performance.
        </p>
      </div>
    </div>
  );
};

export default ExpandableSection;
