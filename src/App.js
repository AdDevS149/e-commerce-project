import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Outlet} from 'react-router'

import NavBar from './components/layouts/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Svg from './Assets/Svg';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductDetails from './components/Products/ProductDetails';

import { DataContextProvider } from './contexts/DataContext';

function App() {
  return (
    <div className='App'>
      <DataContextProvider>
        <BrowserRouter>
          <NavBar />

          <section>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:productId' element={<ProductDetails />} />
              <Route path='cart' element={<Cart />} />
              <Route path='svg' element={<Svg />} />
              <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
          </section>
          <Footer />
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
