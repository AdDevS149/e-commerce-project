import React from 'react';
// import { LicenseInfo } from '@mui/x-license-pro';

// import {Outlet} from 'react-router'
import { Routes, Route /*Navigate*/ } from 'react-router-dom';


import { DataContextProvider } from './contexts/DataContext';

// import Header from './components/layouts/Header';

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

// Routing
// import PrivateRoute from './components/routing/PrivateRoute';

// Screens

// import PrivateScreen from './components/screens/PrivateScreen';
import SignInScreen from './components/screens/SignInScreen';
import SignUpScreen from './components/screens/SignUpScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';


const App = () => {
  return (
    <div className='App'>
      <DataContextProvider>
        {/* <Header/> */}
        <Navbar />
      

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

      

          <Route path='login' element={<SignInScreen />} />
          <Route path='register' element={<SignUpScreen  />} />
          <Route path='/forgotpassword' element={<ForgotPasswordScreen />} />
          <Route path='/passwordreset/:resetToken' element={<ResetPasswordScreen />} />

          {/* <Route path='/delete' element={<Delete />} /> */}
        </Routes>


      </DataContextProvider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
