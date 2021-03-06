import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
// import { useNavigate } from 'react-router-dom';

import { /*CheckIcon, ClockIcon,*/ QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid';

const Cart = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const addToCart = value.addToCart;
  const cartTotal = value.cartTotal;

  // const navigate = useNavigate();

  const removeFromCart = value.removeFromCart;
  // const increaseCartQty = value.increaseCartQty;
  const decreaseCartQty = value.decreaseCartQty;
  // const cartTotal = value.cartTotal;

  if (cart.length === 0) return <h2 style={{ textAlign: 'center', fontSize: '5rem' }}>Cart is Empty</h2>;

  const cartItems = cart.map((product) => (
    <div key={product._id} className='flex py-6 sm:py-10'>
      <div className='flex-shrink-0'>
        <img src={product.image} alt={product.item} className='w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48' />
      </div>

      <div className='ml-4 flex-1 flex flex-col justify-between sm:ml-6'>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div>
            <div className='flex justify-between'>
              {/* <h3 className='text-sm'></h3> */}
              <h2 className='font-medium text-gray-700 hover:text-gray-800'>{product.item}</h2>
            </div>

            <div className='mt-1 flex text-sm'>
              <p className='text-gray-500'>{product.color}</p>
              {product.size ? <p className='ml-4 pl-4 border-l border-gray-200 text-gray-500'>{product.size}</p> : "null"}
            </div>
            <p className='mt-1 text-sm font-medium text-gray-900'>${product.price}</p>
          </div>

          <div className='mt-4 sm:mt-0 sm:pr-9 add'>
            <button type='button' onClick={() => addToCart(product)}>
            <svg className="w-6 h-6 dark:text-white" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
            </button>
            <span className="mx-3">{product.qty}</span>
            <button type='button' onClick={() => decreaseCartQty(product)}>
            <svg className="w-6 h-6 dark:text-white" fill="lightblue" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

            </button>
          </div>

          <div className='absolute top-0 right-0'>
            <button onClick={() => removeFromCart(product)} type='button' className='-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500'>
              <XIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </div>
        </div>
        {/* <p className='mt-4 flex text-sm text-gray-700 space-x-2'>
          {product.inStock ? <CheckIcon className='flex-shrink-0 h-5 w-5 text-green-500' aria-hidden='true' /> : <ClockIcon className='flex-shrink-0 h-5 w-5 text-gray-300' aria-hidden='true' />}

          <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
        </p> */}
      </div>
    </div>
  ));

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Shopping Cart</h1>
        <form className='mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16'>
          <section aria-labelledby='cart-heading' className='lg:col-span-7'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>

            <ul className='border-t border-b border-gray-200 divide-y divide-gray-200'>{cartItems}</ul>
          </section>

          <section aria-labelledby='summary-heading' className='mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5'>
            <h2 id='summary-heading' className='text-lg font-medium text-gray-900'>
              Order summary
            </h2>

            <dl className='mt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm text-gray-600'>Subtotal</dt>
                <dd className='text-sm font-medium text-gray-900'>$99.00</dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='flex items-center text-sm text-gray-600'>
                  <span>Shipping estimate</span>
                  <a href='/' className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className='h-5 w-5' aria-hidden='true' />
                  </a>
                </dt>
                <dd className='text-sm font-medium text-gray-900'>$5.00</dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='flex text-sm text-gray-600'>
                  <span>Tax estimate</span>
                  <a href='/' className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className='h-5 w-5' aria-hidden='true' />
                  </a>
                </dt>
                <dd className='text-sm font-medium text-gray-900'>$8.32</dd>
              </div>
              <div className='border-t border-gray-200 pt-4 flex items-center justify-between'>
                <dt className='text-base font-medium text-gray-900'>Order total</dt>
                <dd className='text-base font-medium text-gray-900'>${cartTotal}</dd>
              </div>
            </dl>

            <div className='mt-6'>
              <button
                type='submit'
                className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500'
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );

  
};

export default Cart;
