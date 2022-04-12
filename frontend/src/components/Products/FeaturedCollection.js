import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const FeaturedCollection = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;

  const featuredList = products
    .filter((product) => product.featured === true)
    .map((filteredProduct) => (
      <div key={filteredProduct._id} className='group relative p-4 border-r border-b border-gray-200 sm:p-6'>
      <div className='rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75'>
        <Link to={`/products/${filteredProduct.urlName}`}>
          <img src={filteredProduct.image} alt={filteredProduct.item} className='w-full h-full object-center object-cover' />
        </Link>
      </div>
      <div className='pt-10 pb-4 text-center'>
        <h3 className='text-sm font-medium text-gray-900'>
          {/* <span aria-hidden='true' className='absolute inset-0' /> */}
          {filteredProduct.item}
        </h3>
        <p className='mt-4 text-base font-medium text-gray-900'>${filteredProduct.price}</p>
 </div>
        <button onClick={() => addToCart(filteredProduct)} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">ADD TO CART</button>

    </div>
    ));

  return (
    <div className='bg-white'>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-bold'>Featured Collection</h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>{featuredList}</div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
