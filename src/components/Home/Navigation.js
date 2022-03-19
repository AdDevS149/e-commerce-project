import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

import '../../styles/Navigation.css';

const Navigation = () => {
  // const { count } = useContext(CounterContext);
  const value = useContext(DataContext);
  const [cartItems] = value.cart;
  // const addToCart = value.addToCart;

  return (
    <>
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
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
