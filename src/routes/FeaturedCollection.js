import { Link } from 'react-router-dom';

import { getProducts } from '../data';
// import '../styles/FeaturedCollection.css';
import '../index.css';

const FeaturedCollection = () => {
  let products = getProducts();
  const featuredList = products

    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <div>
        <div key={filteredProduct.id}>
          <div className='featured-collection__card'>
            <Link to={`/products/${filteredProduct.urlName}`} key={filteredProduct.urlName}>
              <img src={filteredProduct.image} alt={filteredProduct.item} />
            </Link>
            <ul>
              <li>{filteredProduct.item}</li>
              <li>
                <span>${filteredProduct.price}</span>
              </li>
            </ul>
            <button className='featured-btn'>ADD TO CART</button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="collection">
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div>
        <div className='featured-collection__container'>{featuredList}</div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
