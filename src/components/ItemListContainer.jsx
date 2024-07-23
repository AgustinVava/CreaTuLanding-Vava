
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ItemListContainer = ({ products, addToCart }) => {
  const { categoryId } = useParams();
  const filteredProducts = categoryId
    ? products.filter((p) => p.category === categoryId)
    : products;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Catálogo de Productos</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
