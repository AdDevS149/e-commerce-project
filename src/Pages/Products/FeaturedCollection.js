import { Link } from 'react-router-dom';
import { getProducts } from '../../data';
import './FeaturedCollection.css';

import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

const FeaturedCollection = () => {
  let products = getProducts();
  const { increaseCount } = useContext(CounterContext);

  const featuredList = products
    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <>
        <div className='featured-collection__card'>
          <main>
            <Link to={`/products/${filteredProduct.urlName}`} key={filteredProduct.urlName}>
              <img src={filteredProduct.image} alt={filteredProduct.item} />
            </Link>
            <ul>
              <li>{filteredProduct.item}</li>
              <li>
                <span>${filteredProduct.price}</span>
              </li>
            </ul>
            <button className='featured-btn' onClick={increaseCount}>
              ADD TO CART
            </button>
          </main>
        </div>
      </>
    ));

  return (
    <>
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div className='featured-collection__container'>{featuredList}</div>
    </>
  );
};

export default FeaturedCollection;
