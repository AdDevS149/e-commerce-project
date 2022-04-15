import React, { useState, useEffect } from 'react';
// import { deleteProduct, getProduct } from '../../service/api';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      const { data: res } = await axios.get('http://localhost:5005/api/products');
      setProducts(res.products);
    };
    getProducts();
  }, []);

  const deleteProductHandler = (id) => {
    console.log(id);
    // e.preventDefault();
    axios
      .delete(`http://localhost:5005/api/products/${id}`)
      .then(() => console.log('Deleted!', id))
      .catch((err) => console.log(err));

    navigate(`/products/delete/${id}`);
  };

  return (
    <div>
      <h1>There are {products.length} products in the database</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table> */}
      <button
        // onClick={addProduct}
        type='button'
        className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        <div>
          <Link to='/create' className='btn btn-primary'>
            CREATE PRODUCT
          </Link>
        </div>
      </button>
      {/* <div>
          <Link to='/edit-product' className='btn btn-primary'>
            EDIT/UPDATE PRODUCT
          </Link>
        </div> */}

      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((item) => (
          <li key={item._id} className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
            <div className='flex-1 flex flex-col p-8'>
              <img className='w-32 h-32 flex-shrink-0 mx-auto rounded-full' src={item.image} alt='' />
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{item.item}</h3>
              <h3 className='mt-6 text-gray-900 text-sm font-medium'>{item.description}</h3>
            </div>
            <div>
              <div className='-mt-px flex divide-x divide-gray-200'>
                <div className='w-0 flex-1 flex'>
                  <Link to={`/edit/${item._id}`}>
                    <button
                      type='button'
                      className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      // onClick={deleteProductHandler}
                    >
                      EDIT
                    </button>
                  </Link>
                </div>

                <div className='-ml-px w-0 flex-1 flex'>
                  <button
                    type='button'
                    className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={() => deleteProductHandler(item._id)}
                  >
                    DELETE
                  </button>
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
