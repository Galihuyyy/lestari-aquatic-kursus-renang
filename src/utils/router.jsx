import { createBrowserRouter } from "react-router-dom";
import HomeSection from "../pages/HomeSection";
import Price from "../pages/Price";
import Produk from "../pages/Produk";


const router = createBrowserRouter([
    {
        path : '/',
        element : <HomeSection />
    },
    {
        path : '/#pricing',
        element : <HomeSection />
    },
    {
        path : '/produk',
        element : <Produk/>
    },
])

export default router