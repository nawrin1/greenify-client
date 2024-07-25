import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
// import Products from '../pages/Products/Products';
import AllProducts from '../pages/AllProducts/AllProducts';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import Checkout from '../pages/Checkout/Checkout'
import Manage from '../pages/Manage/Manage';


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
        {
            path:'/checkout',
            element:<Checkout></Checkout>
        },
        {
            path:'/manage',
            element:<Manage></Manage>
        },

    ]
  },

]);

export default router;