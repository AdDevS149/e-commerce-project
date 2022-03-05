import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import { getProducts } from '../data';
import './Products.css';

const Products = () => {
  let products = getProducts();

  const displayProducts = products.map((product) => (
    // console.log(displayProducts)
    <div className='products-card__container' key={product.id}>
      <div className='products-card'>
        <img src={product.url} alt={product.item} />
        <ul>
          <li>{product.item}</li>
          <li>
            <span>${product.price}</span>
          </li>
        </ul>
        <button className='products-btn'>ADD TO CART</button>
      </div>
    </div>
  ));

  return (
    <div>
      <h2 className='products-card__text'>Shop</h2>
      <nav>
        <Link to={`/products/${products.id}`} key={products.id}>
          {displayProducts}
        </Link>
        <Outlet />
      </nav>
    </div>
  );
};

export default Products;
