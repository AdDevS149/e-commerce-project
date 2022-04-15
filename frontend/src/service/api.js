import axios from 'axios';

const productUrl = 'http://localhost:5005/api/products';

export const getProducts = async (_id) => {
  _id = _id || '';
  return await axios.get(`${productUrl}/${_id}`);
};

export const editProduct = async (id, product) => {
  return await axios.put(`${productUrl}/${id}`, product);
};


export const deleteProduct = async (_id) => {
  return await axios.delete(`${productUrl}/${_id}`);
};


