import { useParams } from 'react-router-dom';
import { getProducts } from '../data';

export default function ProductDetails() {
  let params = useParams();
  let products = getProducts(params.productId);


  const detailDisplay = products.map((product) => (
 <div className='product-detail__container'>
      <div className='product-details'>
        <img src={product.image} alt={products.urlName} />
      </div>

      <div className='product-details'>
        .<h2>{products.item}</h2>
        <p>{products.price}</p>
        <p>{products.description}</p>
        <button className='add-to'>ADD TO CART</button>
        <br />
        <br />
        <button className='checkout'>PROCEED TO CHECKOUT</button>
      </div>
    </div>

  ))
  return (
    <nav>
     {detailDisplay}
  </nav>


  );
}
