import { createBrowserRouter } from "react-router-dom";
import { BasketPage } from "~pages/basket";
import { LayoutPage } from "~pages/layouts";
import { MainPage } from "~pages/main";
import { ProductPage } from "~pages/product";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/product/:productId',
        element: <ProductPage />,
    },
    {
        path: '/basket',
        element: <LayoutPage />,
        children: [
            { index: true, element: <BasketPage /> }
        ]
    },
])

export default router