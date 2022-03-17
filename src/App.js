import React from 'react';
// import {Outlet} from 'react-router'

import './styles/App.css';

import Navigation from './components/Home/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Svg from './Assets/Svg';
import Cart from './components/Cart/Cart';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductDetails from './components/Products/ProductDetails';

import { DataContextProvider } from './contexts/DataContext';
// import { CartContextProvider } from './contexts/CartContext'
// import {CounterContextProvider} from './contexts/CounterContext';

function App() {
  return (
    <div className='App'>

      <DataContextProvider>
       
          <BrowserRouter>
            <Navigation />

        

            {/* ********** Routes ********** */}
            <section>
              <Routes>
                <Route index element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='products/:productId' element={<ProductDetails />} />
                <Route path='cart' element={<Cart />} />
                <Route path='svg' element={<Svg />} />
                <Route path='*' element={<h1>Under Construction!!</h1>}></Route>
              </Routes>
            </section>
            <Footer />
          </BrowserRouter>
       
      </DataContextProvider>
      
    </div>
  );
}

export default App;
