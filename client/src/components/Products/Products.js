import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;


  const productDisplay = products.map((product) => (
    <div key={product._id} className='group relative p-4 border-r border-b border-gray-200 sm:p-6'>
      <div className='rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75'>
        <Link to={`/products/${product.urlName}`}>
          <img src={product.image} alt={product.item} className='w-full h-full object-center object-cover' />
        </Link>
      </div>
      <div className='pt-10 pb-4 text-center'>
        <h3 className='text-sm font-medium text-gray-900'>
          {product.item}
        </h3>
        <p className='mt-4 text-base font-medium text-gray-900'>${product.price}</p>
            <button onClick={() => addToCart(product)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ADD TO CART</button>

    </div>
 </div>
    
  ));

  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8'>
        <h2 className='sr-only'>SHOP</h2>
        <div className='-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>{productDisplay}</div>
      </div>
    </div>
  );
};

export default Products;
