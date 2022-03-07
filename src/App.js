import { Outlet, Link } from 'react-router-dom';
import CartIcon from './routes/images/shopping-bag.png';
import './App.css';

export default function App() {
  return (
    <div>
      <nav className="nav-bar">
        <h2 className='logo'>LUX BAGS</h2>
        <Link to='/home'>Home</Link>
        <Link to='/products'>Shop</Link>
        <Link to='/sign-in'>Sign In</Link>
        <Link to='/sign-up'>Sign Up</Link>
        <img src={CartIcon} alt='shopping cart icon' />
      </nav>
      <Outlet />
      <footer>2022 © LUX BAGS Store</footer>
    </div>
  );
}
