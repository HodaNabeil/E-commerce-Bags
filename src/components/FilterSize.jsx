import { useSelector } from "react-redux";




function FilterSize({size,setSize}) {
  const products = useSelector((state) => state.products.products);
  const onChangeSizes= (e) => {
    setSize(e.target.id);
  };


  return (
    <div className="filter-category">

      <div className="form-group">
        <input
          type="radio"
          name="filter-size"
          id="small"

          onChange={onChangeSizes}
        />
        <label htmlFor="small">small</label>
      </div>
      

      <div className="form-group">
        <input
          type="radio"
          name="filter-size"
          id="medium"
          onChange={onChangeSizes}
        />
        <label htmlFor="medium">medium</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter-size"
          id="large"
          onChange={onChangeSizes}
        />
        <label htmlFor="large">large</label>
      </div>
    </div>
  );
}

export default FilterSize
