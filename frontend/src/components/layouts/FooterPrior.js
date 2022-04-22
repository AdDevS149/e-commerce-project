import React from 'react';

import footerNavigation from '../../data/footer';
const today = new Date();

const FooterNew = () => {
  return (
    <footer aria-labelledby='footer-heading' className='bg-white'>
      <p>Copyright &copy; {today.getFullYear()}</p>
      {/* <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-20 xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Shop</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.shop.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Company</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.company.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Account</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.account.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Connect</h3>
                <ul className='mt-6 space-y-6'>
                  {footerNavigation.connect.map((item) => (
                    <li key={item.name} className='text-sm'>
                      <a href={item.href} className='text-gray-500 hover:text-gray-600'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-16 md:mt-16 xl:mt-0'>
            <h3 className='text-sm font-medium text-gray-900'>Sign up for our newsletter</h3>
            <p className='mt-6 text-sm text-gray-500'>The latest deals and savings, sent to your inbox weekly.</p>
            <form className='mt-2 flex sm:max-w-md'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                type='text'
                // autoComplete='email'
                required
                className='appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-indigo-500 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
              />
              <div className='ml-4 flex-shrink-0'>
                <button
                  type='submit'
                  className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='border-t border-gray-200 py-10'>
          <p className='text-sm text-gray-500'>Copyright &copy; {today.getFullYear()} 2022 LUX BAGS STORE</p>
        </div>
      </div> */}
    </footer>
  );
};

// export default FooterNew;
