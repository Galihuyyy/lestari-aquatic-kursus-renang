import { createBrowserRouter } from "react-router-dom";
import HomeSection from "../pages/HomeSection";
import Price from "../pages/Price";


const router = createBrowserRouter([
    {
        path : '/',
        element : <HomeSection />
    },
    {
        path : '/pricing',
        element : <Price />
    },
    {
        path : '/produk',
        element : <h1>produk</h1>
    },
])

export default router