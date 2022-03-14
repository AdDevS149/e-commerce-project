import React, { useState, createContext } from 'react';

// returns object with two components 1) Provider (data to other components)
// 2) Consumer (consuming data pass to Provider)
export const CounterContext = createContext();

function CounterContextProvider(props) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  const value = { count, increaseCount, decreaseCount };

  return <CounterContext.Provider value={value}>{props.children}</CounterContext.Provider>;
}

export default CounterContextProvider;
