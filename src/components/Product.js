import React from "react";
import "../styles/products.css";
import ProductItem from "./ProductItem";
import productList from "./ProductList";

function Product() {
  return (
    <div>
      <h1>Products</h1>
      <div className="row">
        {productList.map((product) => {
          return (
            <div className="col-md-3" key={product.id}>
              <ProductItem
                imageUrl={product.image}
                title={product.name}
                description={product.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
