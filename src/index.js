import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Products from './routes/Products';
import ProductDetails from './routes/ProductDetails';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<ProductDetails />} />
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


 