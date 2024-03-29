import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList";
import ProductSidebar from "../components/ProductSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/ProductSlice/productsSlice";
import "../style/shoppingpage.css";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState("all");


  const [color,setcolor] =useState("")

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
    if(color === "black") {

      setFilteredProducts(products.filter((product)=>product.color === color))
    }
  }, [category, products ,color]) ;

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };


  console.log(filteredProducts)
  return (
    <div className="shopping-page">
      <Header />
      <div className="bg-light">
        <div className="container container-shopping-page">
          <ProductSidebar  filteredProducts={filteredProducts}  setcolor={setcolor}   setCategory={setCategory} />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
