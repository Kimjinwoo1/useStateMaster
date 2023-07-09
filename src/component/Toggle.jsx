import React from "react";
import { useState } from "react";

function Toggle() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} value={selectedOption}>
        <option value="">선택하세요.</option>
        <option value="검은색 바지">검은색 바지</option>
        <option value="파란색 바지">파란색 바지</option>
        <option value="빨간색 바지">빨간색 바지</option>
      </select>
      <p>{selectedOption}</p>
    </div>
  );
}

export default Toggle;
