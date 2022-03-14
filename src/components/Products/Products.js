import { Link, Outlet } from 'react-router-dom';
import '../../styles/Products.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
// import { CartContext } from '../../contexts/CartContext';

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;

  const productDisplay = products.map((product) => (
    <div key={product.id}>
      <div className='products-card'>
        <Link to={`/products/${product.urlName}`} key={product.id}>
          <img src={product.image} alt={product.item} />
        </Link>
        <ul>
          <li>{product.item}</li>
          <li>
            <span>${product.price}</span>
          </li>
        </ul>

        <button onClick={() => addToCart(product.id)} className='products-btn'>
          ADD TO CART
        </button>
      </div>
      <Outlet />
    </div>
  ));

  return (
    <div>
      <h2 className='products-card__text'>Shop</h2>
      <nav className='products-card__container'>{productDisplay}</nav>
    </div>
  );
};
export default Products;

// import { Link } from 'react-router-dom';
// import { getProducts } from '../../data';
// import '../../styles/Products.css';

// import { useContext } from 'react';
// import { DataContext } from '../../contexts/DataProvider';

// const Products = () => {
//   const [products] = useContext(DataContext);

//   return (
//     <div className='products'>
//       {products.map((product) => (
//         <div className='products-card' key={product.id}>
//           <Link to={`/products/${product.id}`}>
//             <img src={product.image} alt={product.title} />
//           </Link>
//           <div className='product-box'>
//             <h3 title={product.item}>
//               <Link to={`/products/${product.id}`}>{product.item}</Link>
//             </h3>
//             <h4>{product.price}</h4>
//             <p>{product.description}</p>
//             <button className='products-btn'>ADD TO CART</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Products;
