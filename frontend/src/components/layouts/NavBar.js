
import React from 'react';

import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';



const NavBar = () => {
  const value = useContext(DataContext);
  const cartCountTotal = value.cartCountTotal;

  return (
    <>
  <Navbar  sticky="top" variant='light' expand="lg">
  <Container fluid="md">
    <Navbar.Brand className="logo" as={Link} to='/'>Luz Bags</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link class="fs-1" as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/products'>Shop</Nav.Link>
        <Nav.Link as={Link} to='/sign-in'>Sign In</Nav.Link>
        <Nav.Link as={Link} to='/sign-up'>Sign Up</Nav.Link>
        <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
        <button type="button" class="btn btn-primary position-relative">

  <span class="position-absolute top-0 start-1000 translate-middle badge rounded-pill bg-danger">
  {cartCountTotal}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<section>
  <Outlet/>
</section>
<Outlet/>

     
    </>
  );
};


export default NavBar;








//       <nav className='nav-bar' >
//         <div>
//           <h1>
//             <Link to='/' className='logo'>
//               Lux bags
//             </Link>
//           </h1>
//         </div>
//         <div className='nav-links'>
//           <ul>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/products'>Products</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/sign-in'>Sign In</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/sign-up'>Sign Up</Link>
//             </li>
//           </ul>

//           <Link to='/cart' className='cart'>
//             <div className='cart-icon__ctn'>
//               <img src={'/images/shopping-bag.png'} alt='cart-icon' />

//               <span>{cartCountTotal}</span>
//             </div>
//           </Link>
//         </div>
//       </nav> 


// export default NavBar;























// import { Link } from 'react-router-dom';

// import { useContext } from 'react';
// import { DataContext } from '../../contexts/DataContext';

// import '../../styles/Navigation.css';

// const Navigation = () => {
//   // const { count } = useContext(CounterContext);
//   const value = useContext(DataContext);
//   const [cart] = value.cart;
//   const cartCountTotal = value.cartCountTotal;
 
// console.log('navigation', cart.length)
//   return (
//     <>
//       <nav className='nav-bar' >
//         <div>
//           <h1>
//             <Link to='/' className='logo'>
//               Lux bags
//             </Link>
//           </h1>
//         </div>
//         <div className='nav-links'>
//           <ul>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/products'>Products</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/sign-in'>Sign In</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/sign-up'>Sign Up</Link>
//             </li>
//           </ul>

//           <Link to='/cart' className='cart'>
//             <div className='cart-icon__ctn'>
//               <img src={'/images/shopping-bag.png'} alt='cart-icon' />

//               <span>{cartCountTotal}</span>
//             </div>
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navigation;
