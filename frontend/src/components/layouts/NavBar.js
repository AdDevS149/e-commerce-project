import React from 'react';

import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';

const NavBar = () => {
  const value = useContext(DataContext);
  const cartCountTotal = value.cartCountTotal;

  return (
    <div className='App'>
      <header>
        <Container fluid='md'>
          <Navbar sticky='top' bg='light' variant='light' expand='lg'>
            <Navbar.Brand className='text-uppercase' as={Link} to='/'>
              lux bags
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link className='ms-5' as={Link} to='/'>
                  HOME
                </Nav.Link>
                <Nav.Link as={Link} to='/products'>
                  SHOP
                </Nav.Link>
                <Nav.Link as={Link} to='/sign-in'>
                  SIGN IN
                </Nav.Link>
                <Nav.Link as={Link} to='/sign-up'>
                  SIGN UP
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to='/cart' className='cart'>
                  <div>
                    <Badge className='bg-transparent'>
                      <img src={'/images/shopping-bag.png'} alt='cart-icon' width='33' height='33' />
                      <span className='position-relative top-50 start-0translate-start badge bg-danger rounded-pill'>{cartCountTotal}</span>
                    </Badge>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
