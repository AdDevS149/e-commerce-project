import React from 'react';

import './ProductDetail.css';

import BlackStudioBag from './images/blackstudiobag.jpeg';

const ProductDetail = () => {
  return (
    <div class='product-detail__container'>
      <div class='product-details'>
        <div className='product-details'>
          <img src={BlackStudioBag} alt='black studio bag' />
        </div>
      </div>
      <div class='product-details'>
        <h2>Studio Bag</h2>
        <p>$15</p>
        <button className='add-to'>ADD TO CART</button>
        <br />
        <br />
        <button className='checkout'>PROCEED TO CHECKOUT</button>
        <p>
          "The Studio Bag is identical to its predecessor plus a few more inches to love. Transition if from satchel to backpack to crossbody simply by changing straps. Carry it wherever you go - it
          will be ready to adapt to your needs and keep up with your style."
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
