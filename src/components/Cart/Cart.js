import React, { useContext } from 'react';
// import Products from '../../data';
import { DataContext } from '../../contexts/DataContext';
import '../../styles/Cart.css';

const Cart = () => {
  const value = useContext(DataContext);
  // const [products] = value.products;
  const [cart] = value.cart;

  const cartItems = cart.map((item) => (
    <div class='items'>
      <span>X</span>
      <img src={item.image} alt='Empty' />
      <h3>{item.item}</h3>
      <h3>{item.price}</h3>

      <span>+</span>
      <span>{cart.length}</span>
      <span>-</span>
      <h3 className="cart-total">$20.00</h3>
    </div>
  ));
  return (
    <div class='flex-container'>
      <div class='cart-item__headings'>
        <h1>Products</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
      </div>
      <hr/>
      <div>{cartItems}</div>
      <h3 className="cart-basket">
        Basket Total: <span>$40.00</span>
      </h3>
      <button className="cart-checkout__btn">Start Checkout</button>
    </div>
  );
};

export default Cart;
