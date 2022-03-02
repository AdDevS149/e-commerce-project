import React from 'react';

import BlackStudioBag from './images/blackstudiobag.jpeg';
import CumulusBag from './images/cumulus-olive.png';
import DanceNylon from './images/dance-nylon.png';
import Stratus from './images/stratus-backpack.png';
import Cirrus from './images/cirrus1.jpeg';
import MiniCircle from './images/mini-circle.png';
import StudioVaqueta from './images/studio-bag-vaqueta.jpeg';
import Sling from './images/sling.png';

import './Shop.css';

const Shop = () => {
  return (
    <div>
      <div>
        <h2 className='shop-heading__text'>Shop</h2>
        <div className='featured-collection__container'>
          <div className='featured-collection__card'>
            <div>
              <img src={BlackStudioBag} alt='black backpack' />

              <ul>
                <li>Studio Bag</li>
                <li>
                  <span>$15</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={CumulusBag} alt='olive cumulus bag' />
              <ul>
                <li>Cumulus</li>
                <li>
                  <span>$28</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={DanceNylon} alt='dance nylon' />
              <ul>
                <li>Dance Bag Nylon</li>
                <li>
                  <span>$35</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={Stratus} alt='stratus backpack' />
              <ul>
                <li>Stratus Backpack</li>
                <li>
                  <span>$30</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={Cirrus} alt='cirrus' />
              <ul>
                <li>Cirrus</li>
                <li>
                  <span>$65</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={MiniCircle} alt='mini circle' />
              <ul>
                <li>Mini Circle</li>
                <li>
                  <span>$40</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={StudioVaqueta} alt='studio vaqueta' />
              <ul>
                <li>Studio Bag Vaqueta</li>
                <li>
                  <span>$75</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>

          <div className='featured-collection__card'>
            <div>
              <img src={Sling} alt='sling' />
              <ul>
                <li>Sling</li>
                <li>
                  <span>$25</span>
                </li>
              </ul>
              <button className='featured-btn'>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
