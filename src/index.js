import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails';
import Cart from './Pages/Cart/Cart';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart/>} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <h1>Under Construction!</h1>
            </main>
          }
        />
      </Route>
  
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


 