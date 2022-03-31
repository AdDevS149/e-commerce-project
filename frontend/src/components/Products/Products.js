import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/Products.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { Container } from 'react-bootstrap';

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;

  const productDisplay = products.map((product) => (
    <Container key={product.id}>
      <div>
        <div className='products-card'>
          <Link to={`/products/${product.urlName}`} key={product.urlName}>
            <img src={product.image} alt={product.item} />
          </Link>
          <ul>
            <li>{product.item}</li>
            <li>
              <span>${product.price}</span>
            </li>
          </ul>

          <button onClick={() => addToCart(product)} className='products-btn'>
            ADD TO CART
          </button>
        </div>
        <Outlet />
      </div>
    </Container>
  ));

  return (
    <div>
      <h2 className='products-card__text'>Shop</h2>
      <nav className='products-card__container'>{productDisplay}</nav>
    </div>
  );
};
export default Products;
