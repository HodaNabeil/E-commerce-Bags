import React from "react";

function FilterCategory({ setCategory}) {
  const onChangeCategory = (e) => {
    setCategory(e.target.id);
  };

  return (
    <div className="filter-category">
      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="all"
      
          onChange={onChangeCategory}
        />
        <label htmlFor="all">all</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="handbag"

          onChange={onChangeCategory}
        />
        <label htmlFor="handbag">handbag</label>
      </div>
      

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="dufflebag"
          onChange={onChangeCategory}
        />
        <label htmlFor="dufflebag">dufflebag</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="backbag"
          onChange={onChangeCategory}
        />
        <label htmlFor="backbag">backbag</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter"
          id="laptop"
          onChange={onChangeCategory}
        />
        <label htmlFor="laptop">laptop</label>
      </div>
    </div>
  );
}

export default FilterCategory;
