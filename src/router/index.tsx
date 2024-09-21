import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <ProductList /> },
            { path: '/basket', element: <Basket /> },
        ]
    }
])

export default router