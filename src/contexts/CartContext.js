import { useParams} from 'react-router-dom';

import { getProducts } from '../data';
import { useState, createContext } from 'react';




 
// const initialCart = {
//     products: []
// }

// export const CartContext = createContext();

// export function useCartState(id) {
//     const [cart, updateCart ] = useState(initialCart);
    
//     let params = useParams()
//     let products = getProducts(params.productId);

    

//     cartItems = products.find((product) => product.id === id);

// }

// console.log(useCartState)

// export const CounterContext = createContext();

// function CounterContextProvider(props) {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   function decreaseCount() {
//     setCount(count - 1);
//   }

//   const value = { count, increaseCount, decreaseCount };

//   return <CounterContext.Provider value={value}>{props.children}</CounterContext.Provider>;
// }

// export default CounterContextProvider;
