import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/Products.css';

import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';
// import { Container } from 'react-bootstrap';

const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addToCart = value.addToCart;
console.log('Is this working well', products)

  const productDisplay = products.map((product) => (
    <div key={product.id}>
      <div>
        <div className='products-card'>
          <Link to={`/products/${product.urlName}`} key={product.urlName}>
            <img src={product.image} alt={product.item} />
          </Link>
          <ul>
            <li>{product.item}</li>
            <li>
              <span>${product.price}</span>
            </li>
          </ul>

          <button onClick={() => addToCart(product)} className='products-btn'>
            ADD TO CART
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  ));

  return (
    <div>
      <h2 className='products-card__text'>Shop</h2>
      <div className='products-card__container'>{productDisplay}</div>
    </div>
  );
};
export default Products;






// import React from 'react';

// import { Link, Outlet } from 'react-router-dom';
// import '../../styles/Products.css';
// // import products from '../../data' 


// import { DataContext } from '../../contexts/DataContext';
// import { useContext } from 'react';




// const Products = () => {
//   const value = useContext(DataContext);
//   const [products] = value.products;
//   const addToCart = value.addToCart;


//   console.log("zzzz", products)

//   const productDisplay = products.map((product) => (
//     <div key={product.id}>
//       <div>
//         <div className='products-card'>
//           <Link to={`/products/${product.urlName}`} key={product.urlName}>
//             <img src={product.image} alt={product.item} />
//           </Link>
//           <ul>
//             <li>{product.item}</li>
//             <li>
//               <span>${product.price}</span>
//             </li>
//           </ul>

//           <button onClick={() => addToCart(product)} className='products-btn'>
//             ADD TO CART
//           </button>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   ));

//   return (
//     <> 
//     <div>
//       <h2 className='products-card__text'>Shop</h2>
//       <div className='products-card'>{productDisplay}</div>
//     </div>
//     </>
//   );
// };
// export default Products;
