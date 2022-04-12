import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ShoppingBagIcon } from '@heroicons/react/outline';

import { DataContext } from '../../contexts/DataContext';

const Navbar = () => {
  const value = useContext(DataContext);
  const cartCountTotal = value.cartCountTotal
  


  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };
  
  return (
  
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>

        <NavLink to='/' className='flex items-center'>
          {/* <img src='/docs/images/logo.svg' className='mr-3 h-6 sm:h-9' alt='Flowbite Logo' /> */}
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>LUX BAGS</span>
        </NavLink>

        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          <svg className='hidden w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>

        <div className='hidden w-full md:block md:w-auto' id='mobile-menu'>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>

            <li>
              <NavLink style={navLinkStyles} to='/' className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current='page'>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                style={navLinkStyles}
                to='/products'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                style={navLinkStyles}
                to='/sign-in'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Sign In
              </NavLink>
            </li>


            <li>
              <NavLink
                style={navLinkStyles}
                to='/sign-out'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Sign Up
              </NavLink>
            </li>

            <li>
              <NavLink
                style={navLinkStyles}
                to='/all'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Admin
              </NavLink>
            </li>


            <div className='ml-4 flow-root lg:ml-6'>

              <Link to='/cart' className='group -m-2 p-2 flex items-center'>
                <ShoppingBagIcon className='flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500' aria-hidden='true' />
                
                <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>{cartCountTotal}</span>
              </Link>


            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
