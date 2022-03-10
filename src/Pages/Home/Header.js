import React from 'react';
import { Link } from 'react-router-dom';

import CartIcon from '../../Assets/Images/shopping-bag.png';
import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

import './Header.css';

const Header = () => {
  const { count } = useContext(CounterContext);

  return (
    <>
      <header className='header'>
        <div>
          <h1>
            <Link to='/' className='logo'>
              Lux bags
            </Link>
          </h1>
        </div>
        <div className='header-links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/products'>Shop</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/sign-in'>Sign In</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to='/cart' className='cart'>
                <div className='cart-icon__ctn'>
                  <img src={CartIcon} alt='cart-icon' />
                  <span>{count}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* <footer>2022 © LUX BAGS Store</footer> */}
      </header>
    </>
  );
};

export default Header;
