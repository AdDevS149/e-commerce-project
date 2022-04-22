import React from 'react';
// import { LicenseInfo } from '@mui/x-license-pro';

// import {Outlet} from 'react-router'
import { Routes, Route /*Navigate*/ } from 'react-router-dom';

import { DataContextProvider } from './contexts/DataContext';

// import Header from './components/layouts/Header';

import Navbar from './components/layouts/Navbar';
import Home from './components/Home/Home';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
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



// import FooterNew from './components/layouts/FooterNew'
// import TestGrounds from './TestGrounds';

// LicenseInfo.setLicenseKey(
//   '7cf3d3a2872dff3853b98cba8888a691T1JERVI6NDIwMzQsRVhQSVJZPTE2ODE4NjQ5NzIwMDAsS0VZVkVSU0lPTj0x',
// );





const App = () => {
  return (
    <div className='App'>
      <DataContextProvider>
      {/* <Header/> */}
          <Navbar />
          {/* <SignUp/> */}
          {/* <Home/> */}
          {/* <TestGrounds/> */}
 
      
        {/* <FooterNew/> */}
    
        {/* <Login/> */}

        <Routes>
          <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/sign-up' element={<SignUp />} /> 
        <Route path='/sign-in' element={<SignIn />} /> 
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