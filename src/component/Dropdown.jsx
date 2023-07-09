import React, { useState, useEffect } from "react";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div onClick={handleClick}>드롭다운</div>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        {options.map((option) => (
          <li key={option} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
