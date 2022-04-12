import React, { useState, useEffect} from 'react';
import { deleteProduct, getProducts} from '../../service/api'
// import axios from 'axios';

import { Link } from 'react-router-dom';


// const getAllProductsHandler = async() => {
//   return await axios.get('http://localhost:5005/api/products').then((res)=> res.products)
  
//   }


const AllProducts = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
  getAllProducts();
    }, []);

    const deleteProductHandler = async (_id) => {
      await deleteProduct(_id);
      getAllProducts();
    }

    const getAllProducts = async () => {
      let response = await getProducts();
      setProducts(response.data.products)
      console.log(response.data)
    }
  return (
    <div>
    <h1>All Products ppPage</h1>
      {/* <button
        type='button'
        className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        <div>
          <Link to='/create' className='btn btn-primary'>
            CREATE PRODUCT
          </Link>
        </div>

        <div>
          <Link to='/edit-product' className='btn btn-primary'>
            EDIT/UPDATE PRODUCT
          </Link>
        </div>
      </button> */}

      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((item) => (
       
         
          <li key={item._id} className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
            <div className='flex-1 flex flex-col p-8'>
              <img className='w-32 h-32 flex-shrink-0 mx-auto rounded-full' src={item.image} alt='' />
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{item.item}</h3>
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{item._id}</h3>
            </div>
            <div>
              <div className='-mt-px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <Link to={`/edit/${item._id}`}>
                    <button
                      type='button'
                      className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      // onClick={() => setData(item._id)}
                    >
                      EDIT
                    </button>
                  </Link>
                </div>

                <div className='-ml-px w-0 flex-1 flex'>
                  <Link to='/delete'>
                    <button
                      type='button'
                      className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      onClick={() => deleteProductHandler(item._id)}
                    >
                      DELETE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;
