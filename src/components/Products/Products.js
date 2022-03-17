import { Link, Outlet } from 'react-router-dom';
import '../../styles/Products.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  //  const [cart] = value.cart
  const addToCart = value.addToCart;

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

        <button onClick={() => addToCart(product)} className='products-btn'>
          ADD TO CART
        </button>
      </div>
      <Outlet />
    </div>
  ));

  // console.log('product', cart)

  return (
    <div>
      <h2 className='products-card__text'>Shop</h2>
      <nav className='products-card__container'>{productDisplay}</nav>
    </div>
  );
};
export default Products;

