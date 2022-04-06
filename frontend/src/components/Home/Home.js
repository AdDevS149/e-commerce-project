import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCollection from '../Products/FeaturedCollection';

const Home = () => {
  return (
    <div className='bg-white'>
      <div className='relative bg-gray-900'>
        <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
          <img src={'/images/ben-white-unsplash.jpeg'} alt='man modeling a shoulder bag' className='w-full h-full object-center object-cover' />
        </div>
        {/* <div aria-hidden='true' className='absolute inset-0 bg-gray-900 opacity-50' /> */}

        <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-6xl'>Bags reimagined for modern life.</h1>

          <Link to={'/products'} className='mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100'>
            SHOW NOW
          </Link>
        </div>
      </div>
      <section aria-labelledby='features-heading' className='relative my-6'>
        <div className='aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16'>
          <img src={'/images/studio-bag.png'} alt='soon to come' className='h-full w-full object-center object-cover lg:h-full lg:w-full' />
        </div>
        <div className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='lg:col-start-2'>
            <p className='mt-4 text-4xl font-extrabold text-gray-900 tracking-tight'>Designed for fashion. Crafted for sport.</p>
            <p className='mt-4 text-gray-500'>
              We make
              <Link to={'/products'}>
                <span className='text-blue-400'> products </span>
              </Link>
              that effortlessly transition from day to night. From the board room to the fitness studio, and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance
              of form and function.
            </p>
          </div>
        </div>
      </section>
      <FeaturedCollection/>
    </div>
  );
};

export default Home;
