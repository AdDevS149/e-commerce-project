import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const DataContext = createContext();





export const DataContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const cartCountTotal = cart.reduce((total, product) => total + product.qty, 0);
  const cartTotal = cart.reduce((total, product) => total + product.price * product.qty, 0);

  useEffect(() => {
    axios
      .get('http://localhost:5005/api/products')
      .then((res) => {
    
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    console.log('adding to cart')
    const inCart = cart.find((item) => item._id === product._id);
    if (inCart) {
      setCart(cart.map((item) => (item._id === product._id ? { ...inCart, qty: inCart.qty + 1 } : item)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

 
  // const increaseCartQty = (product) => {
  //   // May have to use _id
  //   setCart((product) => cart.map((item) => (item._id === product._id ? { ...item, qty: item.qty + (item.qty < 25 ? 1 : 0) } : item)));
  // };

  const decreaseCartQty = (product) => {
    // May have to use _id
    setCart((cart) => cart.map((item) => (product._id === item._id ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) } : item)));
  };


 const removeFromCart = (product) => {
    // May have to use _id
    const newCart = cart.filter((item) => item._id !== product._id);
    setCart([...newCart]);
  };



  // const productTax = productPrice x (state tax)
  // const productShippingCost = ()

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addToCart: addToCart,
    cartCountTotal: cartCountTotal,
    removeFromCart: removeFromCart,
    // increaseCartQty: increaseCartQty,
    decreaseCartQty: decreaseCartQty,
    cartTotal: cartTotal,
  };
// console.log('cart', cart)
// console.log('cartCountTotal', cartCountTotal)
// console.log('increaseCartQty', increaseCartQty)
  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
