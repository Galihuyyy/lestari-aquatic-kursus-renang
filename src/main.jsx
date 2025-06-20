import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'

import router from './utils/router'
import tailwindcss from '@tailwindcss/vite'
=======
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import router from './utils/router.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
>>>>>>> kerjaan-aman

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
