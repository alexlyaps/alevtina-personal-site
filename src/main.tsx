import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import './normalize.css'
import App from './App.tsx'
import About from './about/About.tsx'
import SnowLeopards from './snow-leopards/SnowLeopadrs.tsx'
import {PATHS, ELEMENTS} from '@components/navigation.tsx';

const ROUTES = PATHS.map((path, index) => {
  return <Route path={'/' + path} element={ELEMENTS[index]} />
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* {ROUTES} */}
      <Route path='/' element={<App />} />
      <Route path='/page' element={<About />} />
      <Route path='/snow-leopards' element={<SnowLeopards />} />
    </Routes>
  </BrowserRouter>
)

