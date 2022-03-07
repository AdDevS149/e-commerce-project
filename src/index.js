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
        <Route path='home' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<ProductDetails />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>Under Construction!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<App />}>
//         <Route index element={<Home />} />
//         <Route path='/products' element={<Products />} />
//         <Route path='/product' element={<ProductDetails />} />
//         </Route>
//         {/* { <Route
//            path='*'
//           element={
//             <main>
//               <h1>Under Construction!</h1>
//             </main>
//           }
//         />  */}
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// // );
// // {
/* <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} /> */
// }

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Navigation />}>
//         <Route index element={<Home />} />
// <Route path='products' element={<Products />}>
//         <Route
//         index
//         element={
//           <main>
//             <p>Message Galore</p>
//           </main>
//         }
//         />
//           <Route path=':productId' element={<ProductDetails />} />

//         </Route>
//         <Route
//           path='*'
//           element={
//             <main>
//               <h1>Under Construction!!</h1>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>,

// export default App;

// return (
//   <div>
//     <nav className='nav-bar'>
//       <h2 className='logo'>LUX BAGS</h2>
//       <Link to='/'>Home</Link>
//       <Link to='/products'>Shop</Link>
//       <Link to='/:product/'>Temp</Link>
//       <Link to='/sign-in'>Sign In</Link>
//         <Link to='/sign-up'>Sign Up</Link>
//       <img src={CartIcon} alt='shopping cart icon' />
//     </nav>
//     <Outlet />

//     <footer>2022 © LUX BAGS Store</footer>
//   </div>
