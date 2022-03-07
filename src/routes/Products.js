import { Link } from 'react-router-dom';
import { getProducts } from '../data';
import '../styles/Products.css';

const Products = () => {
  let products = getProducts();
  const productDisplay = products.map((product) => (
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

        <button className='products-btn'>ADD TO CART</button>
      </div>
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
