import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Home/Navigation';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import Cart from './components/Cart/Cart';



import CounterContextProvider from './contexts/CounterContext';


import './styles/App.css';

function App() {

  return (
    <div className='App'>
      <CounterContextProvider>
        <Router>
          <Navigation />
          
         

          {/* ********** Routes ********** */}
          <Routes>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>Under Construction!!</h1>}></Route>
          </Routes>
        </Router>
        
      </CounterContextProvider>
       <Footer/>
    </div>
  );
}

export default App;
