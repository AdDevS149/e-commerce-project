import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from './images/shopping-bag.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <div> 
    <header>
      <nav className='nav-bar'>
        <h2 className='logo'>LUX BAGS</h2>
        <Link to='/home'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/sign-in'>Sign In</Link>
        <Link to='/sign-up'>Sign Up</Link>
        <img src={CartIcon} alt='shopping cart icon' />
      </nav>
      <Outlet />
    </header>    
    <footer>2022 © LUX BAGS Store</footer> 
</div>

  );
};

export default Navigation;
