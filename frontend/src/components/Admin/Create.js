import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [urlName, setUrlName] = useState('');
  const [item, setItem] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [featured, setFeatured] = useState('');
  const [qty, setQty] = useState('');
  const [productInStock, setProductInStock] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const addProduct = () => {
    axios.post('http://localhost:5005/api/products', {
      urlName: urlName,
      item: item,
      image: image,
      price: price,
      description: description,
      featured: featured,
      qty: qty,
      productInStock: productInStock,
    });
  };

  return (
    <div>
      <h1>Create New New Product</h1>
      <form onSubmit={onSubmit}>
        <div className='relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='urlName' className='block text-xs font-medium text-gray-900'>
            UrlName
          </label>
          <input
          autoComplete="off"
            type='text'
             value={urlName}
            id='urlName'
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            placeholder='UrlName'
            name='urlName'
           
            onChange={(e) => {
              setUrlName(e.target.value)
            }}
          />
          <p>{urlName}</p>
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='item' className='block text-xs font-medium text-gray-900'>
            Item{' '}
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='text'
            id='item'
            placeholder='Item'
            name='item'
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='image' className='block text-xs font-medium text-gray-900'>
            Image
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='text'
            id='image'
            placeholder='Image'
            name='image'
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='price' className='block text-xs font-medium text-gray-900'>
            Price
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='number'
            id='price'
            placeholder='Price'
            name='price'
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='description' className='block text-xs font-medium text-gray-900'>
            Description
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='text'
            id='description'
            placeholder='Description'
            name='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='featured' className='block text-xs font-medium text-gray-900'>
            Featured
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='boolean'
            id='featured'
            placeholder='Featured'
            name='featured'
            value={featured}
            onChange={(e) => {
              setFeatured(e.target.value);
            }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='qty' className='block text-xs font-medium text-gray-900'>
            Quantity
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='number'
            id='qty'
            placeholder='Quantity'
            name='qty'
            value={qty}
            onChange={(e) => {
              setQty(e.target.value);
            }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor='productInStock' className='block text-xs font-medium text-gray-900'>
            In Stock
          </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            type='number'
            id='productInStock'
            placeholder='Quantity In Stock'
            name='productInStock'
            value={productInStock}
            onChange={(e) => {
              setProductInStock(e.target.value);
            }}
          />
        </div>
        <button type='submit' onClick={addProduct}>
          Add Product
        </button>
        {/* <button onClick={postData} type='submit'>
          Add Product
        </button> */}
      </form>
    </div>
  );
};

export default Create;
