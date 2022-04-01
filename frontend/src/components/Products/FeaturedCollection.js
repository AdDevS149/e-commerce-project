import { Link } from 'react-router-dom';
// import '../../styles/FeaturedCollection.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
// import { div } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import { Button } from 'bootstrap';
// import { div } from 'react-bootstrap';

const FeaturedCollection = () => {
  const value = useContext(DataContext);
  const [products] = value.products;

  const addToCart = value.addToCart;

  const featuredList = products

    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <div key={filteredProduct.id}>
        <div xs={1} md={2} className='g-4'>
          <div>
            <div style={{ width: '15rem' }}>
              <Link to={`/products/${filteredProduct.urlName}`}>
                <img className='small' variant='top' src={filteredProduct.image} alt={filteredProduct.item} />
              </Link>
              <div>
                <div>{filteredProduct.item}</div>
                <div>${filteredProduct.price}</div>

                <button onClick={() => addToCart(filteredProduct)}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div>{featuredList}</div>
    </>
  );
};

export default FeaturedCollection;
