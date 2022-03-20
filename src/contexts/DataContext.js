import React, { useState, createContext } from 'react';
import Products from '../data';

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [products, setProducts] = useState([...Products]);
  const [cart, setCart] = useState([]);

  const cartCountTotal = cart.reduce((total, product) => total + product.qty, 0);

  const cartTotal = cart.reduce((total, product) => total + product.price * product.qty, 0);

  const addToCart = (product) => {
    // setCart([...cart, product]);
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
    const inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      setCart(cart.map((item) => (item.id === product.id ? { ...inCart, qty: inCart.qty + 1 } : item)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const decreaseCartQty = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(cart.map((item) => (item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item)));
    }
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
