import { Outlet, Link } from 'react-router-dom';
import CartIcon from './images/shopping-bag.png';
// import './App.css';

const App = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <h2 className='logo'>LUX BAGS</h2>
        <Link to='/'>Home</Link>
        <Link to='/products'>Shop</Link>
        <Link to='/sign-in'>Sign In</Link>
          <Link to='/sign-up'>Sign Up</Link>
        {/* <img src={CartIcon} alt='shopping cart icon' /> */}
      </nav>
      <Outlet />

      <footer>2022 © LUX BAGS Store</footer>
    </div>
  );
};

export default App;
