import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

const Cart = () => {
  const { count, increaseCount, decreaseCount } = useContext(CounterContext);
  return (
    <div>
      <h3>Cart</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
    </div>
  );
};

export default Cart;
