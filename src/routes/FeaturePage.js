import React from 'react';

import data from '../data';
console.log(data);
export default function FeaturePage() {
  return (
    <div>
      <h2 className='featured-collection__text'>Featured Collection</h2>
      <div className='featured-collection__container' key={data.products.id}>
        {data.products
          .filter((product) => product.featured === true)
          .map((filteredProduct) => (
            <div className='featured-collection__card' key={filteredProduct.id}>
              <div>
                <img src={filteredProduct.url} alt='black backpack' />
                <ul>
                  <li>{filteredProduct.item}</li>
                  <li>
                    <span>${filteredProduct.price}</span>
                  </li>
                </ul>
                <button className='featured-btn'>ADD TO CART</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
