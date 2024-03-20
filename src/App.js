import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      
      <Header/>
      
     

      <Routes>
        
        <Route path='/' element={<Home/>}/>

        <Route path ='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/services' element={<Services/>}/>

        <Route path='/reviews' element={<Reviews/>}/>

        <Route path='/blog' element={<Blog/>}/>






      </Routes>
     
      <About/>
      <Services/>
      <Reviews/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
