import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCollection from '../Products/FeaturedCollection';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className='home-page__image'>
      <img src={'/images/ben-white-unsplash.jpeg'} alt='man modeling a shoulder bag' />
      <br />
      <div className='main-text'>Bags reimagined for modern life.</div>
      <div>
        <Link to={'/products'}>
          <button className='shop-btn'>SHOP NOW</button>
        </Link>
      </div>
      <div className='featured-item'>
        <img className='featured-item__button' src={'/images/studio-bag.png'} alt='studio bag' />
        <h3>Designed for fashion. Crafted for sport.</h3>
        <p>
          We make
          <Link to={'/products'}>
            <span> products </span>
          </Link>
          that effortlessly transition from day to night. From the board room to the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance of
          form and function.
        </p>
        <button className='featured-item__btn'>STUDIO BAG</button>
      </div>
      <FeaturedCollection />
    </div>
  );
};

export default Home;
