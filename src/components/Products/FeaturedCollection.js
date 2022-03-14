import { Link } from 'react-router-dom';
import '../../styles/FeaturedCollection.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const FeaturedCollection = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;

  const featuredList = products
    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <>
        <div className='featured-collection__card' key={filteredProduct.id}>
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
            <button onClick={() => addToCart(filteredProduct.id)} className='featured-btn'>
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
