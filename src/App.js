import './App.css';
import { useState } from 'react';
import Products from './components/Products/Products';
import CartContext from './Context/CartContext';
import Cart from './components/Cart/CartObject';

function App() {
  let [cart, setCart] = useState({});

  // Function to increase quantity of a product in the cart
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        ...product,
        quantity: 0,
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  }

  // Function to decrease quantity of a product in the cart
  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart);
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <div className="App">
        <header className="App-header">
          <h1>Shopping Cart</h1>
        </header>
        <Products />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

export default App;



// {1:{id: 1, quantity: 11}, 2:{id: 2, quantity: 10}, 3:{id: 3, quantity: 10}, 4:{id: 4, quantity: 10}}

// button
// - 1 +

// let a = {b:10, c:20};
//a.b = 30;
// let b = {...a};

// a => 1234
// a => 12

// {cart: cart, increaseQuantity: increaseQuantity}


// Global Parent
// Global state
// way to manipulate the state
// way to consume the state


//  Provider
//  Store
    // State
    // Reducer
// Action
// Dispatcher
// Selectors