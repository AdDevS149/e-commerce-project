import { useParams } from 'react-router-dom';
import { getProducts } from '../data';
import '../styles/ProductDetails.css';

export default function ProductDetails() {
  let params = useParams();
  let products = getProducts(params.productId);

  const details = products.find((product) => product.urlName === params.productId);

  return (
    <>
      <div className='details-container'>
        <div className='details-img'>
          <img src={details.image} alt={details.item} />
        </div>
        <div className='detail-items__description'>
          <p className='item'>{details.item}</p>
          <p className='price'>${details.price}</p>
          <button className="add-btn">ADD TO CART</button>
          <br />
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          <p className='description'>{details.description}</p>
        </div>
      </div>
    </>
  );
}
