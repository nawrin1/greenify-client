import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Products from '../pages/Products/Products';


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
            element:<Products></Products>
        },

    ]
  },

]);

export default router;