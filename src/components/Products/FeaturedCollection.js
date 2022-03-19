import { Link } from 'react-router-dom';
import '../../styles/FeaturedCollection.css';
// import {getProducts} from '../../data'

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const FeaturedCollection = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  const addToCart = value.addToCart;

  const featuredList = products
    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <div key={filteredProduct.id}>
        <div className='featured-collection__card'>
          <main>
            <Link to={`/products/${filteredProduct.urlName}`} key={filteredProduct.id}>
              <img src={filteredProduct.image} alt={filteredProduct.item} />
            </Link>
            <ul>
              <li>{filteredProduct.item}</li>
              <li>
                <span>${filteredProduct.price}</span>
              </li>
            </ul>
            {/* <button onClick={() => addToCart(filteredProduct.id)} className='featured-btn'> */}
            <button onClick={() => addToCart(filteredProduct)} className='featured-btn'>
              ADD TO CART
            </button>
          </main>
        </div>
      </div>
    ));

  return (
    <>
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div className='featured-collection__container'>{featuredList}</div>
    </>
  );
};

export default FeaturedCollection;
