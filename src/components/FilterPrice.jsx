function FilterPrice({ minPrice, setMinPrice, setMaxPrice, maxPrice }) {
  function handleChangePrice(e) {
    const value = e.target.value;
    setMinPrice(value);
  }

  console.log(minPrice)
  return (
    <div className="form-group">
      <input
        type="range"
        name="filter-price"
        id="price"
        min={0} 
        max={maxPrice} 
        value={minPrice}
        onChange={handleChangePrice}
      />
      <label className="block pt-[10px]" htmlFor="price">Min Price</label>
    </div>
  );
}

export default FilterPrice;
