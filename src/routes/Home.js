import React from 'react';

import ShoulderBag from './images/ben-white-unsplash.jpeg';
import StudioBag from './images/studio-bag.png';
import BlackStudioBag from './images/blackstudiobag.jpeg';
import CumulusBag from './images/cumulus-olive.png';
import DanceNylon from './images/dance-nylon.png';
import Stratus from './images/stratus-backpack.png';

import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='feature-collection'>
        <div className='home-page__image'>
          {/* <img src={require('./images/ben-white-unsplash.jpeg')} /> */}
          <img src={ShoulderBag} alt='man modeling a shoulder bag' />
          <br />
          <div className='main-text'>Bags reimagined for modern life.</div>
          <div>
            <button className='shop-btn'>SHOP NOW</button>
          </div>
          <div className='featured-item'>
            <img className='featured-item__button' src={StudioBag} alt='studio bag' />
            <h3>Designed for fashion. Crafted for sport.</h3>
            <p>
              We make{' '}
              <span>
                <a href='/'>products</a>
              </span>{' '}
              that effortlessly transition from day to night. From the board room to the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance
              of form and function.
            </p>
            <button className='featured-item__btn'>STUDIO BAG</button>
          </div>
        </div>

        <h2 className='featured-collection__text'>Featured Collection</h2>

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
        </div>
        <div>
          <footer>
            <p>2022 © LUX BAGS Store</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
