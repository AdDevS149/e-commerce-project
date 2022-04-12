import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
// import useHistory from 'use-history'
import { getProducts, editProduct } from '../../service/api';

const initialValue = {
  urlName: '',
  item: '',
  image: '',
  price: '',
  description: '',
  featured: '',
  qty: '',
  productInStock: '',
};

const EditProduct = () => {
  const [product, setProduct] = useState(initialValue);
  const { urlName, item, image, price, description, featured, qty, productInStock } = product;
  const { _id } = useParams();
  // let history = useHistory();

useEffect(() => {
showProductDetails()

}, []);

  const showProductDetails = async () => {
    const response = await getProducts(_id);
    setProduct(response.data);
  };

  const editProductDetailsHandler = async () => {
    const res = await editProduct(_id, product);
  //  history.push('all');
  };

  const onValueChangeHandler = (e) => {
    console.log(e.target.value);
    setProduct({...product, [e.target.name]: e.target.value})
  }

  // const [urlName, setUrlName] = useState('');
  // const [item, setItem] = useState('');
  // const [image, setImage] = useState('');
  // const [price, setPrice] = useState('');
  // const [description, setDescription] = useState('');
  // const [featured, setFeatured] = useState("false");
  // const [qty, setQty] = useState('');
  // const [productInStock, setProductInStock] = useState('');

  // const [ID, setID] = useState("")

  // const addProduct = () => {
  //   axios.put(`http://localhost:5005/api/products/${ID}`, {
  //   urlName,
  //   item,
  //   image,
  //   price,
  //   description,
  //   featured,
  //   qty: qty,
  //   productInStock
  //   });
  // }



  return (
    <div>
      <h1>Update/Edit Product</h1>
      <form>
        <div className='relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>UrlName</label>
          <input
          autocomplete='off'
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='urlName'
            placeholder='UrlName'
            value={urlName}
            // onChange={(event) => {
            //   setUrlName(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Item </label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='item'
            placeholder='Item'
            value={item}
            // onChange={(event) => {
            //   setItem(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Image</label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='image'
            placeholder='Image'
            value={image}
            // onChange={(event) => {
            //   setImage(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Price</label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='price'
            placeholder='Price'
            value={price}
            // onChange={(event) => {
            //   setPrice(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Description</label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='description'
            placeholder='Description'
            value={description}
            // onChange={(event) => {
            //   setDescription(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Featured</label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='featured'
            placeholder='Featured'
            value={featured}
            // onChange={(event) => {
            //   setFeatured(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Quantity</label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='qty'
            placeholder='Quantity'
            value={qty}
            // onChange={(event) => {
            //   setQty(event.target.value);
            // }}
          />
        </div>

        <div className='relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600'>
          <label htmlFor="item-input" className='block text-xs font-medium text-gray-900'>Quantity In Stock</label>
          <input
            className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
            onChange={(e) => onValueChangeHandler(e)}
            name='productInStock'
            placeholder='Quantity In Stock'
            value={productInStock}
            // onChange={(event) => {
            //   setProductInStock(event.target.value);
            // }}
          />
        </div>
        <button onClick={() => editProductDetailsHandler ()} type='submit'>Edit</button>
      </form>
    </div>
  );
};

export default EditProduct;
