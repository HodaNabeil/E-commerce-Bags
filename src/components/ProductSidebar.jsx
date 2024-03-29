import FilterCategory from "./FilterCategory"
import FilterColor from "./FilterColor"



function ProductSidebar({setCategory,category ,filteredProducts ,setcolor}) {
  return (
    <div className="products-sidebar bg-[#ddc2ab52] p-[10px] ">
        <h3 className="mb-[10px] ml-[10px] text-dark">Filter</h3>
        <FilterCategory 
        category={category}
        setCategory={setCategory}
        filteredProducts={filteredProducts}
x
      />

      <h3  className=" text-dark p[10px] my-[10px]">Color</h3>
      <FilterColor  setcolor={setcolor} />
    </div>
  )
}

export default ProductSidebar
