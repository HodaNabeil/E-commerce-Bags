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
  const [color, setColor] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let updatedProducts = products;

    if (category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (color !== "") {
      updatedProducts = updatedProducts.filter(
        (product) => product.color === color
      );
    }

    setFilteredProducts(updatedProducts);
  }, [category, color, products]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div className="shopping-page">
      <Header />
      <div className="bg-light">
        <div className="container container-shopping-page">
          <ProductSidebar
            filteredProducts={filteredProducts}
            setColor={setColor}
            setCategory={setCategory}
            color={color}
          />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
