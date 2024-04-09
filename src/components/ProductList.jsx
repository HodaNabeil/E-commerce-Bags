import CardItem from "./CardItem";

function ProductList({ products }) {
  return (
    <div className="product-list  grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3     gap-[20px]">
      {products.map((product, index) => {
        return (
            <CardItem product={product}  key={index}/>
        );
      })}
    </div>
  );
}

export default ProductList;
