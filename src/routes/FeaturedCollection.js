import { Link } from 'react-router-dom';

import { getProducts } from '../data';
import '../styles/FeaturedCollection.css';

const FeaturedCollection = () => {
  let products = getProducts();
  const featuredList = products

    // console.log(products)
    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <>
        <div className='featured-collection__card' key={filteredProduct.id}>
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
            <button className='featured-btn'>ADD TO CART</button>
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
