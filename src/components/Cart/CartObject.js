// src/components/Cart/CartObject.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/action.js';

const CartObject = () => {
  const cart = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {Object.keys(cart).length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <ul>
          {Object.keys(cart).map((productId) => (
            <li key={productId}>
              <p>{cart[productId].title}</p>
              <p>Price: {cart[productId].price.value}</p>
              <p>Quantity: {cart[productId].quantity}</p>
              <button onClick={() => dispatch(removeFromCart(cart[productId]))}>-</button>
              <button onClick={() => dispatch(addToCart(cart[productId]))}>+</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartObject;
