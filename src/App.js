import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from './Components/Menu/Menu';
import TopBar from './Components/Topbar/Topbar';
import HomePage from './Components/pages/HomePage';
// import Navbar from './Components/navbar/Navbar';

const App = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Show button when scrolled 200px down
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='app'>
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <HomePage/>
                  
       
       {showScrollButton && (
        <div className='topArrow' onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></div>
      )}
    </div>
  )
}

export default App