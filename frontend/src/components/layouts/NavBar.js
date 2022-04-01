import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useContext } from 'react';

// import { DataContext } from '../../contexts/DataContext';

const Navbar = () => {
  // const value = useContext(DataContext);
  // const cartCountTotal = value.cartCountTotal;

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    };
  };

  return (
    <>
      <nav>
        <NavLink style={navLinkStyles} to='/'>
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to='/products'>
          SHOP
        </NavLink>
        <NavLink style={navLinkStyles} to='/sign-in'>
          SIGN IN
        </NavLink>
    
        <NavLink style={navLinkStyles} to='/cart'>
        <img src={'/images/shopping-bag.png'} alt='cart-icon' width='33' height='33' />
          SIGN IN
        </NavLink>
      </nav>
    </>



    // <div className='App'>
    //   <header>
    //     <div fluid='md'>
    //       <div sticky='top' bg='light' variant='light' expand='lg'>
    //         <div className='text-uppercase' as={Link} to='/'>
    //           lux bags
    //         </div>
    //         <div aria-controls='basic-div-nav' />
    //         <div id='basic-div-nav'>
    //           <div className='me-auto'>
    //             <div className='ms-5' as={Link} to='/'>
    //               HOME
    //             </div>
    //             <div as={Link} to='/products'>
    //               SHOP
    //             </div>
    //             <div as={Link} to='/sign-in'>
    //               SIGN IN
    //             </div>
    //             <div as={Link} to='/sign-up'>
    //               SIGN UP
    //             </div>
    //           </div>
    //           <div>
    //             <div as={Link} to='/cart' className='cart'>
    //               <div>
    //                 <div className='bg-transparent'>
    //                   <img src={'/images/shopping-bag.png'} alt='cart-icon' width='33' height='33' />
    //                   <span className='position-relative top-50 start-0translate-start badge bg-danger rounded-pill'>{cartCountTotal}</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   <Outlet />
    // </div>
  );
};

export default Navbar;
