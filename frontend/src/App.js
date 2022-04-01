import React from 'react';

// import {Outlet} from 'react-router'
import { Routes, Route, /*Navigate*/ } from 'react-router-dom';
// import './App.css';
import "@material-tailwind/react/tailwind.css";
import { DataContextProvider } from './contexts/DataContext';
import Navbar from './components/layouts/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { NoMatch } from './components/layouts/NoMatch';
// import WorkSpace from './components/TestArea/WorkSpace';



import ProductDetails from './components/Products/ProductDetails';




const  App = () => {
  return (
    <>  
      <DataContextProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        <Footer />
      </DataContextProvider>
</>

  );
}

export default App;
