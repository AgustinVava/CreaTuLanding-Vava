import React, { useState } from 'react';
import Cart from './Cart';

const CartWidget = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleCart}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 1,
        }}
      >
        🛒 ({cartItems.length})
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: 0,
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            padding: '10px',
            zIndex: 0,
          }}
        >
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        </div>
      )}
    </div>
  );
};

export default CartWidget;
