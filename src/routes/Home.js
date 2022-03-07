import React from 'react';

// import styles from  "@styles/Home.css"

import FeaturedCollection from './FeaturedCollection';

import ShoulderBag from './images/ben-white-unsplash.jpeg'
import StudioBag from './images/studio-bag.png'
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home-page__image'>
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
          We make
          <span>
            <a href='/products'> products </a>
          </span>
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





































// import React from 'react';

// import FeaturePage from './FeaturePage';
// import ShoulderBag from '../images/ben-white-unsplash.jpeg';
// import StudioBag from '../images/studio-bag.png';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className='home-page__image'>
//       <img src={ShoulderBag} alt='man modeling a shoulder bag' />
//       <br />
//       <div className='main-text'>Bags reimagined for modern life.</div>
//       <div>
//         <button className='shop-btn'>SHOP NOW</button>
//       </div>
//       <div className='featured-item'>
//         <img className='featured-item__button' src={StudioBag} alt='studio bag' />
//         <h3>Designed for fashion. Crafted for sport.</h3>
//         <p>
//           We make
//           <span>
//             <a href='/products'> products </a>
//           </span>
//           that effortlessly transition from day to night. From the board room to the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance of
//           form and function.
//         </p>
//         <button className='featured-item__btn'>STUDIO BAG</button>
//       </div>
//       <FeaturePage />
//     </div>
//   );
// };

// export default Home;
