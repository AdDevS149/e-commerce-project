import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FeaturedCollection from '../Products/FeaturedCollection';
import '../../styles/Home.css';



const Home = () => {

  const navigate = useNavigate()
  return (
    <>
 {/* Replace(replace history(clear history go back to beginning) to go back programatically  */}
    <button onClick={() => navigate('cart', /*{replace: true}*/)}>Add To Cart/Place Order</button>
      <div>

        <div>
          <figure className='position-relative'>
            <img width='100%' height='700px' className='img-fluid' src={'/images/ben-white-unsplash.jpeg'} alt='man modeling a shoulder bag' />

            <figcaption>Bags reimagined for modern life.</figcaption>

            <figcaption>
              <Link to={'/products'}>
                <button className='btn'>SHOW NOW</button>
              </Link>
            </figcaption>
          </figure>
          <div sm={12}></div>
        </div>

        <div className='px-1 my-2'>
          <div sm={5}></div>
        </div>

        <div className='px-4 my-5'>
          <div sm={4}>
            <img src={'/images/studio-bag.png'}  alt="soon to come" className='' />
          </div>

          <div sm={4}>
            <h4 className='font-weight-light'>Designed for fashion. Crafted for sport.</h4>
            <p>
              {' '}
              We make
              <Link to={'/products'}>
                <span> products </span>
              </Link>
              that effortlessly transition from day to night. From the board room to the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance
              of form and function.
            </p>
            <button>STUDIO BAG</button>
          </div>
          <div sm={4}></div>
        </div>
      </div>
      <FeaturedCollection />
    </>
  );
};

export default Home;
