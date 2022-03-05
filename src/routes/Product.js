import { useParams } from 'react-router-dom';
import { getProduct } from '../data';

export default function Product() {
  let params = useParams();
  let product = getProduct(parseInt(params.productId, 10));
  return (
    <div className='product-detail__container'>
      <div className='product-details'>
        <div className='product-details'>
          <img src={product.url} alt={product.item} />
        </div>
      </div>

      <div className='product-details'>
        <h2>{product.item}</h2>

        <p>{product.price}</p>

        <button className='add-to'>ADD TO CART</button>

        <br />

        <br />

        <button className='checkout'>PROCEED TO CHECKOUT</button>

        <p>{product.description}</p>
      </div>
    </div>
  );
}
