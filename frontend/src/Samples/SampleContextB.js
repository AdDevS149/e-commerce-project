import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

const SampleContextB = () => {
  const { count, increaseCount } = useContext(CounterContext);

  return (
    <div style={{ backgroundColor: 'red' }}>
      <button onClick={increaseCount}>IncreaseCount</button>
      Count: {count}
    </div>
  );
};

// export default SampleContextB;
