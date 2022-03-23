import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';
import ComponentB from './SampleContextB';

const SampleContextA = () => {
  const { count } = useContext(CounterContext);
  return (
    <div style={{ backgroundColor: 'wheat' }}>
      <p>Count: {count}</p>
      <ComponentB />
    </div>
  );
};

// export default SampleContextA
