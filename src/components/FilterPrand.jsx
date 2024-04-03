import { useSelector } from "react-redux";



function FilterPrand({setPrand}) {
  const products = useSelector((state) => state.products.products);
  const onChangePrand= (e) => {
    setPrand(e.target.id);
  };


  return (
    <div className="filter-category">

      <div className="form-group">
        <input
          type="radio"
          name="filter-prand"
          id="cuyana"

          onChange={onChangePrand}
        />
        <label htmlFor="cuyana">cuyana</label>
      </div>
      

      <div className="form-group">
        <input
          type="radio"
          name="filter-prand"
          id="fendi"
          onChange={onChangePrand}
        />
        <label htmlFor="fendi">fendi</label>
      </div>

      <div className="form-group">
        <input
          type="radio"
          name="filter-prand"
          id="adidas"
          onChange={onChangePrand}
        />
        <label htmlFor="adidas">adidas</label>
      </div>
    </div>
  );
}

export default FilterPrand
