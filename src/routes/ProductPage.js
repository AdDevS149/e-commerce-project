import './ProductPage.css';
import data from '../data';

const Shop = () => {
  return (
    <div>
      <h2 className='collection-card__text'>Shop</h2>
      <div className='collection-card__container'>
        {data.products.map((product) => (
          <div className='collection-card'>
            <img src={product.url} alt='' />
            <ul>
              <li>{product.item}</li>
              <li>
                <span>${product.price}</span>
              </li>
            </ul>
            <button className='collection-btn'>ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
