import { useParams } from 'react-router-dom';
import '../../styles/ProductDetails.css';
// import {getProducts} from '../../data'

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

export default function ProductDetails() {
  const value = useContext(DataContext);
  const [products] = value.products;
  //  const [cart] = value.cart

  const addToCart = value.addToCart;


  let params = useParams();

  const productDetails = products
    .filter((product) => product.urlName === params.productId)
    .map((productDetail) => (
      <div className='details-container' key={productDetail.id}>
        <div className='details-img'>
          <img src={productDetail.image} alt={productDetail.item} />
        </div>
        <div className='detail-items__description'>
          <p className='item'>{productDetail.item}</p>
          <p className='price'>${productDetail.price}</p>
          <button onClick={() => addToCart(productDetail)} className='add-btn'>
            ADD TO CART
          </button>
          <br />
          <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
          <p className='description'>{productDetail.description}</p>
        </div>
      </div>
    ));

// console.log('prodDet', cart)

  return <>{productDetails}</>;
}
