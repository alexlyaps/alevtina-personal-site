import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import './normalize.css'
import App from './App.tsx'
import About from './about/About.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/page' element={<About />} />
    </Routes>
  </BrowserRouter>
)

