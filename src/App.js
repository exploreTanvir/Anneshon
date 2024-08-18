import React, { useEffect, useState } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Customer from './Components/Customer/Customer';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Menu from './Components/Menu/Menu';
import Reason from './Components/Reason/Reason';
import Service from './Components/service/Service';
import Solve from './Components/Solve/Solve';
import TopBar from './Components/Topbar/Topbar';
import Contact from './Components/Contact/Contact';
// import Navbar from './Components/navbar/Navbar';
import Newsletter from './Components/newsletter/Newsletter';

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
       {/* <Navbar/> */}

       <Hero/>
      <Service/>
      <Reason/>
      <Customer/>
      <Solve/>
      <Contact/>
      <Newsletter/>
       <Footer/>
      
       
       {showScrollButton && (
        <div className='topArrow' onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></div>
      )}
    </div>
  )
}

export default App