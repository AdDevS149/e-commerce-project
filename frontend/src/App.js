import React from 'react';

// import {Outlet} from 'react-router'
import { Routes, Route /*Navigate*/ } from 'react-router-dom';

import { DataContextProvider } from './contexts/DataContext';
import Navbar from './components/layouts/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import CartItems from './components/Cart/Cart';
import { NoMatch } from './components/layouts/NoMatch';
import Example from './components/Products/TestGround';




const App = () => {
  return (
    <>
    <Navbar />
    {/* <Tester/> */}
      <DataContextProvider>
    
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<CartItems />} />
          <Route path='/test' element={<Example />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
        {/* <Footer /> */}
      </DataContextProvider>
    </>
  );
};

export default App;
