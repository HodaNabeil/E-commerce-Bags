import React from "react";
import "../style/shoppingpage.css";

function FilterColor({ setColor, color }) {

  const handleChangeColor = (selectedColor) => {
    setColor(selectedColor);
  };

  const colors = ["white", "black", "beige"];

  return (
    <div className="filter-color flex gap-x-[10px]">
      {colors.map((col) => (
        <div
          key={col}
          onClick={() => handleChangeColor(col)}
          className={`btn-color ${col} ${color === col && "active"}`}
        ></div>
      ))}
    </div>
  );
}

export default FilterColor;
