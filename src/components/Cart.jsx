import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
            
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "4px",
                marginRight: "10px",
              }}
            />
            <span>{item.name}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "transparent",
                color: "#007bff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
