import React, { useContext } from 'react';
// import Products from '../../data';
import { DataContext } from '../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
// import products from '../../data';
import '../../styles/Cart.css';

const Cart = () => {


  const navigate = useNavigate()

  const value = useContext(DataContext);
  const [cart] = value.cart;
  // const addToCart = value.addToCart;
  const removeFromCart = value.removeFromCart;
  const increaseCartQty = value.increaseCartQty;
  const decreaseCartQty = value.decreaseCartQty;
  const cartTotal = value.cartTotal;

  // const itemPrice = products.qty * products.price;
  // console.log(itemPrice)

  const cartItems = cart.map((items) => (
    <div className='items' key={items.id}>
      <button onClick={() => removeFromCart(items)}>X</button>
      <img src={items.image} alt={items.item} />
      <h3>{items.item}</h3>
      <h3>{items.price}</h3>

      <button onClick={() => increaseCartQty(items)}>+</button>
      <span>{items.qty}</span>
      <button onClick={() => decreaseCartQty(items)}>-</button>
      <h3 className='cart-total'>${items.qty * items.price}</h3>
      <div>
        <div></div>
      </div>
    </div>
  ));

  return (
    <> 
    <div>
      <div className='flex'>
        <div className='cart-item__headings'>
          <h1>Products</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Total</h1>
        </div>
        <hr />
        <div>{cart.length === 0 && <h1>Cart Is Empty</h1>}</div>

        <div>{cartItems}</div>

        <div className='cart-basket'>Cart Total: ${cartTotal}</div>
      </div>
      <div>
        <button className='cart-checkout__btn'>Start Checkout</button>
      </div>
    </div>
  <button onClick={() => navigate(-1)}>Go Back</button>
</>

  );
};
export default Cart;
