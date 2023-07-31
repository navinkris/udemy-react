import { createBrowserRouter, 
  //createRoutesFromElements, 
  RouterProvider, 
  //Route 
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { index:true, element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> }
    ],
    errorElement: <ErrorPage />
  }, 
  
]);

// const router = createBrowserRouter(routeDefinitions);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
