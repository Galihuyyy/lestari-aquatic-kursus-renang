import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

import HomeSection from './pages/HomeSection'
import Price from './pages/Price'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/produk" element={<h1>produk</h1>} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
