import { NavLink, Link} from 'react-router';
import './App.css'
import Footer from './components/Footer.tsx';
import Slideshow from './components/Slideshow.tsx';
import Header from './components/Header.tsx';


function App() { 
  return (
    <>
      <Header />
      <Slideshow />
      <Footer />
    </>
  )
}


export default App
