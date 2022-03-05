import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Products from './routes/Products';
import Product from './routes/Product';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path='products' element={<Products />}>
          <Route
            index
            element={
              <main>
                <p>Select a product</p>
              </main>
            }
          />
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route
          path='*'
          element={
            <main>
              <h1>This page is under construction!</h1>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);

//         {{<Route path=':productId' element={<Product />} />
//         </Route> }
//         <Route
//           path='*'
//           element={
//             <main>
//               <h1>This page is under construction!</h1>
//             </main>
//           }
//         />
//       { </Route> } }

//  {
// //   // /* <Route path='sign-in' element={<SignIn />} />
// //   //       <Route path='sign-up' element={<SignUp />} />  */
//  }
