import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { franchiseId , franchiseName} = useParams();
  console.log(franchiseId);

  const productHandler = async () => {
    try {
      const response = await fetch(
        `${API_URL}/product/${franchiseId}/products`
      );
      const data = await response.json();
      setProducts(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products);
  useEffect(() => {
    productHandler();
  }, []);
  return (
    <>
      <NavBar />
      <section className="productMenu">
        <h2>{franchiseName}</h2>
        {products.map((product) => {
          return (
            <div className="productBox">
              <div className="producDetails">
                <div className="productName">{product.productName}</div>
                <div className="productPrice">₹{product.productPrice}</div>
                <div className="description">{product.productDescription}</div>
              </div>
              <div className="ProductImage">
                <img
                  src={`${API_URL}/uploads/${product.productImage}`}
                  alt=""
                />
                <div className="AddProductbtn">ADD</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
