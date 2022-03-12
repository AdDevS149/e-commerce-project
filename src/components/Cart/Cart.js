import { useState } from 'react';
import '../../styles/Cart.css';

import data from '../../products';
console.log(data);

const Cart = () => {
return <h1>Cart</h1>

  return (
    <>
      <section>
        <h1>Shopping Cart</h1>

        <div className='cart-items '>
          <div className='cart-items__ctn'>
            {data.map((currItem) => (
              <div className='items-info'>
                <div>
                  <img src={currItem.image} alt='blank' />
                </div>

                <div className='title'>
                  <p>{currItem.name}</p>
                </div>

                <div className='add-minus'>
                  <p>+</p>
                  <input type='text' placeholder='2' />
                  <p>-</p>
                </div>

                <div className='price'>
                  <p>{data[0].price}</p>
                </div>

                <div className='remove-item'>
                  <p>***</p>
                </div>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

// import { useContext } from 'react';
// import { CounterContext } from '../../contexts/CounterContext';

// const Cart = () => {
//   const { count, increaseCount, decreaseCount } = useContext(CounterContext);
//   return (
//     <div>
//       <h3>Cart</h3>
//       <p>Count is: {count}</p>
//       <button onClick={increaseCount}>Increase count</button>
//       <button onClick={decreaseCount}>Decrease count</button>
//     </div>
//   );
// };

// export default Cart;
