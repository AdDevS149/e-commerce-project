import { Outlet } from 'react-router-dom';
// import CartIcon from './Assets/Images/shopping-bag.png'
import Header from './Pages/Home/Header';
import CounterContextProvider from './contexts/CounterContext';
import './styles/App.css';

const App = () => {
  return (
    <CounterContextProvider>
      <div>
        <Header />

        <Outlet />
        <footer>2022 © LUX BAGS Store</footer>
      </div>
    </CounterContextProvider>
  );
};

export default App;
