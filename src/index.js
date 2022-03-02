import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation';
import Home from './routes/Home';
import Shop from './routes/Shop';
// import './index.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        {/* <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
