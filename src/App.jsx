import React, { useState } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import logo from "./assets/logo.png"; // Asegúrate de tener tu logo en la carpeta de assets

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const products = [
    {
      id: 1,
      name: "Producto ",
      image: "",
      price: 28,
    },
    {
      id: 2,
      name: "Producto ",
      image: "",
      price: 24.99,
    },
    {
      id: 3,
      name: "Producto ",
      image: "",
      price: 48.99,
    },
    {
      id: 4,
      name: "Producto ",
      image: "",
      price: 69.99,
    },
    {
      id: 5,
      name: "Producto ",
      image: "",
      price: 39,
    },
    {
      id: 6,
      name: "Producto ",
      image: "",
      price: 43,
    },
  ];

  return (
    <div>
      <NavBar
        title="Club Bikes"
        logo={logo}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <ItemListContainer
        message="Explora nuestros productos destacados"
        products={products}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default App;
