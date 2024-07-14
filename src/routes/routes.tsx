import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
// import Products from '../pages/Products/Products';
import AllProducts from '../pages/AllProducts/AllProducts';
import SingleProduct from '../pages/SingleProduct/SingleProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/products',
            element:<AllProducts></AllProducts>
        },
        {
            path:'/products/:productName',
            element:<SingleProduct></SingleProduct>
        },

    ]
  },

]);

export default router;