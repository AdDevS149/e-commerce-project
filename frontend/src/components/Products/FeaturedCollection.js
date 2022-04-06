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
      <div key={filteredProduct._id} className='group'>
        <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
          <Link to={`/products/${filteredProduct.urlName}`}>
            <img src={filteredProduct.image} alt={filteredProduct.item} className='w-full h-full object-center object-cover group-hover:opacity-75' />
          </Link>
        </div>
        <h3 className='mt-4 text-sm text-gray-700'>{filteredProduct.item}</h3>
        <p className='mt-1 text-lg font-medium text-gray-900'>${filteredProduct.price}</p>
        <button onClick={() => addToCart(filteredProduct)}>ADD TO CART</button>
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
