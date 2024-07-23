
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ({ title, logo, cartItems, removeFromCart }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#333",
        color: "#fff",
      }}
    >
      <img src={logo} alt="Logo" style={{ height: "50px" }} />
      <h1>{title}</h1>
      <div>
        <Link
          to="/"
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Todos
        </Link>
        <Link
          to="/category/A"
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Categoría A
        </Link>
        <Link
          to="/category/B"
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Categoría B
        </Link>
        <Link
          to="/category/C"
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Categoría C
        </Link>
      </div>
      <CartWidget cartItems={cartItems} removeFromCart={removeFromCart} />
    </nav>
  );
};

export default NavBar;
