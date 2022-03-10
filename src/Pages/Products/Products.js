import { Link, Outlet } from 'react-router-dom';
import { getProducts } from '../../data';
import './Products.css';

import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

const Products = () => {
  let products = getProducts();
  const { increaseCount } = useContext(CounterContext);

  const productDisplay = products.map((product) => (
    <div key={product.id}>
      <div className='products-card'>
        <Link to={`/products/${product.urlName}`} key={product.id}>
          <img src={product.image} alt={product.item} />
        </Link>
        <ul>
          <li>{product.item}</li>
          <li>
            <span>${product.price}</span>
          </li>
        </ul>

        <button className='products-btn' onClick={increaseCount}>
          ADD TO CART
        </button>
      </div>
      <Outlet />
    </div>
  ));

  return (
    <div>
      <h2 className='products-card__text'>Shop</h2>
      <nav className='products-card__container'>{productDisplay}</nav>
    </div>
  );
};
export default Products;
