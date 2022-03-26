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
        <Navbar sticky='top' bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand className='text-uppercase' href='#home'>
              lux bags
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/'>
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
            

                <Nav.Link as={Link} to='/cart' className='cart'>
                  <div className='d-inline-flex bd-highlight'>
                    <Badge className="bg-transparent">
                      <img src={'/images/shopping-bag.png'} alt='cart-icon' width='33' height='33'/>
                      <span className='position-relative bottom-0 end-50 translate-start badge rounded-pill'>{cartCountTotal}</span>
                    </Badge>
                  </div>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Outlet />
    </div>
  );
};

export default NavBar;
