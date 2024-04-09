import React, { useEffect, useState, useMemo } from "react";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList";
import ProductSidebar from "../components/ProductSidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/ProductSlice/productsSlice";
import "../style/shoppingpage.css";
import { Outlet } from "react-router-dom";
import SortFilter from "../components/SortFilter";

function Shop() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [category, setCategory] = useState("all");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [prand, setPrand] = useState("");
  const [sortItem, setSortItem] = useState("");

  const [minPrice, setMinPrice] = useState(0);

  const [maxPrice, setMaxPrice] = useState(500);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let updatedProducts = products;

    if (category !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    if (color !== "") {
      updatedProducts = updatedProducts.filter((product) => {
        if (Array.isArray(product.colors)) {
          return product.colors.some((item) => item === color);
        }
        return false;
      });
    }
    if (size !== "") {
      updatedProducts = updatedProducts.filter((product) => {
        return product.sizes.some((item) => item.size === size);
      });
    }

    if (prand !== "") {
      updatedProducts = updatedProducts.filter((product) => {
        if (Array.isArray(product.prand)) {
          return product.prand.some((item) => item === prand);
        }
        return false;
      });
    }

    if (minPrice !== 0 || maxPrice <= 500) {
      updatedProducts = updatedProducts.filter((product) => {
        const prices = product.sizes.map((item) => parseFloat(item.price));
        const minProductPrice = Math.min(...prices);
        const maxProductPrice = Math.max(...prices);
        return minProductPrice >= minPrice && maxProductPrice <= maxPrice;
      });
    }

    if (sortItem === "low") {
      updatedProducts.sort((a, b) =>
        parseFloat(a.sizes[0].price) - parseFloat(b.sizes[0].price)
      );
    } else if (sortItem === "high") {
      updatedProducts.sort((a, b) =>
        parseFloat(b.sizes[0].price) - parseFloat(a.sizes[0].price)
      );
    }
    return updatedProducts;
  }, [category, color, products, size, prand, minPrice, maxPrice, sortItem]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="shopping-page">
      <Header />

      <div className="bg-light">
        <div className="bg-[#f0e2d9] top-[74px] relative">
          <SortFilter sortItem={sortItem} setSortItem={setSortItem} />
        </div>

        <div className="container container-shopping-page">
          <ProductSidebar
            filteredProducts={filteredProducts}
            setColor={setColor}
            setCategory={setCategory}
            color={color}
            size={size}
            setSize={setSize}
            prand={prand}
            setPrand={setPrand}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
          />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
