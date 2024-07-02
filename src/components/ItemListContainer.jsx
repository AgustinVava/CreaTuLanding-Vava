import React from "react";
import ProductCard from "./ProductCard";

const ItemListContainer = ({ message, products, onAddToCart }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Bienvenido a nuestra tienda</h2>
      <p>{message}</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
