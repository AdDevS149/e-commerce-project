import React from 'react';

// import {Outlet} from 'react-router'
import { Routes, Route /*Navigate*/ } from 'react-router-dom';

import { DataContextProvider } from './contexts/DataContext';

import Navbar from './components/layouts/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart/Cart';

import { NoMatch } from './components/layouts/NoMatch';

// Admin Imports
import AllProducts from './components/Admin/AllProducts';
import Create from './components/Admin/Create';
import EditProduct from './components/Admin/EditProduct';
import DeleteProduct from './components/Admin/DeleteProduct';

// Auth Imports
// import Login from './components/Auth/Login';

// import Header from './components/layouts/Header';
// import Content from './components/layouts/Content';
import FooterNew from './components/layouts/FooterNew'

const App = () => {
  return (
    <div className='App'>
      <DataContextProvider>
          <Navbar />
        {/* <Header />
        <Content /> */}
        <FooterNew/>
    
        {/* <Login/> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='*' element={<NoMatch />} />

          {/* Admin Routes */}
          {/* <Route path='/admin' element={<Update />} /> */}
          <Route path='/create' element={<Create />} />
          <Route path='/all'   element={<AllProducts />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/products/delete/:id' element={<DeleteProduct />} />

          {/* Auth Routes */}

          {/* <Route path='/delete' element={<Delete />} /> */}
        </Routes>
      </DataContextProvider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
