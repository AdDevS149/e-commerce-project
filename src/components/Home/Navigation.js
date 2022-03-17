import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

import '../../styles/Navigation.css';

const Navigation = () => {
  // const { count } = useContext(CounterContext);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  return (
    <>
  {/* <nav className='navbar navbar-expand-lg navbar-dark bg-dark navbar-style'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/#'>
              lux bags
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='/#'>
                    Luz Bags
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

      <nav className='nav-bar'>
        <div>
          <h1>
            <Link to='/' className='logo'>
              Lux bags
            </Link>
          </h1>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/products'>Products</Link>
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

          <Link to='/cart' className='cart'>
            <div className='cart-icon__ctn'>
              <img src={'/images/shopping-bag.png'} alt='cart-icon' />
              <span>{cart.length}</span>
            </div>
          </Link>
        </div>
      </nav>
      
    </>
  );
};

export default Navigation;
