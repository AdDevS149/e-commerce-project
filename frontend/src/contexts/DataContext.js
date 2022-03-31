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
      .get('http://localhost:5005/api/products/')
      .then((res) => {
        setProducts(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      setCart(cart.map((item) => (item.id === product.id ? { ...inCart, qty: inCart.qty + 1 } : item)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    // Filtering un-targeted items into a new Array
    // Return the new array
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart([...newCart]);
  };

  const increaseCartQty = (product) => {
    setCart((cart) => cart.map((item) => (product.id === item.id ? { ...item, qty: item.qty + (item.qty < 25 ? 1 : 0) } : item)));
  };

  const decreaseCartQty = (product) => {
    setCart((cart) => cart.map((item) => (product.id === item.id ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) } : item)));
  };

  // const productTax = productPrice x (state tax)
  // const productShippingCost = ()

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addToCart: addToCart,
    cartCountTotal: cartCountTotal,
    removeFromCart: removeFromCart,
    increaseCartQty: increaseCartQty,
    decreaseCartQty: decreaseCartQty,
    cartTotal: cartTotal,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
