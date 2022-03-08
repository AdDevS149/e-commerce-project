import { useParams } from 'react-router-dom';
import { getProducts } from '../data';

export default function ProductDetails() {
  let params = useParams();
  let products = getProducts(params.productId);

  const details = products.find((product) => (  
  product.urlName === params.productId))

  return (  
    <div key={details.id}>
      <div className='product-details' >
        <img src={details.image} alt={products.urlName} />
        <h2>{details.item}</h2>
        <p>{details.price}</p>
        <p>{details.description}</p>
        <button className='add-to'>ADD TO CART</button>
        <br />
        <br />
        <button className='checkout'>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  )




}
