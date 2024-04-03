import React from "react";
import { useDispatch, useSelector } from "react-redux";

function FilterCategory({ setCategory}) {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
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
        <label htmlFor="all">all   <span>{products.length}</span></label>
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
