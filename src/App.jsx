
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import logo from "./assets/logo.png";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular una llamada a una API para obtener productos
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: "Producto 1",
              image: "https://via.placeholder.com/100",
              price: 19.99,
              category: "A",
            },
            {
              id: 2,
              name: "Producto 2",
              image: "https://via.placeholder.com/100",
              price: 24.99,
              category: "B",
            },
            {
              id: 3,
              name: "Producto 3",
              image: "https://via.placeholder.com/100",
              price: 14.99,
              category: "A",
            },
            {
              id: 4,
              name: "Producto 4",
              image: "https://via.placeholder.com/100",
              price: 29.99,
              category: "C",
            },
            {
              id: 5,
              name: "Producto 5",
              image: "https://via.placeholder.com/100",
              price: 39.99,
              category: "B",
            },
            {
              id: 6,
              name: "Producto 6",
              image: "https://via.placeholder.com/100",
              price: 49.99,
              category: "C",
            },
          ]);
        }, 1000);
      });
    };

    fetchProducts().then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <NavBar
        title="Mi Tienda Online"
        logo={logo}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      <Switch>
        <Route exact path="/">
          <ItemListContainer products={products} addToCart={addToCart} />
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer products={products} addToCart={addToCart} />
        </Route>
        <Route path="/product/:productId">
          <ItemDetailContainer products={products} addToCart={addToCart} />
        </Route>
        <Route path="*">
          <div>404 - Página no encontrada</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
