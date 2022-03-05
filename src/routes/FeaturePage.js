import React from 'react';

import products from '../data';

const FeaturePage = () => {
  const featuredList = products
    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <div key={filteredProduct.id}>
        <div className='featured-collection__container'>
          <div className='featured-collection__card'>
            <img src={filteredProduct.url} alt={filteredProduct.item} />
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
    <div>
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div>{featuredList}</div>
    </div>
  );
};

export default FeaturePage;
