import React, { useState, createContext } from 'react';
// import {getProducts} from '../data'
import Products from '../data';
// Bringing in product array of items

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  // Initial state with all products available in array from data(future database)
  const [products, setProducts] = useState([...Products]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Initial cart state to be used in cart component(and or other components), with all products available
    // Products will be filtered through with methods in the components
    setCart([...cart, product]);
  };

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addToCart: addToCart,
  };

  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
