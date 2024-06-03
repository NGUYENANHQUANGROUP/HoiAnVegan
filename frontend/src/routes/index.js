import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AdminManager from '../pages/AdminManager'
import CategoryProduct from '../pages/CategoryProduct'
import ProductDetails from '../pages/ProductDetails'
import SearchProduct from '../pages/SearchProduct'
import Cart from '../pages/Cart'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "admin-manager",
                element: <AdminManager/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
        ]

    }
])

export default router