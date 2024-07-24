
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        width: "200px",
        margin: "10px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          marginBottom: "8px",
        }}
      />
      <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>
        {product.name}
      </h3>
      <p
        style={{ fontSize: "1rem", color: "#555", marginBottom: "16px" }}
      >{`$${product.price.toFixed(2)}`}</p>
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
      <Link
        to={`/product/${product.id}`}
        style={{
          display: "block",
          marginTop: "10px",
          color: "#007bff",
          textDecoration: "none",
        }}
      >
        Ver Detalles
      </Link>
    </div>
  );
};

export default ProductCard;
