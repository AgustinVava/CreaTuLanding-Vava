
import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ products, addToCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "200px", height: "200px", objectFit: "cover" }}
      />
      <p>Precio: ${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
