import React from 'react'
import Home from '../Hero/Hero'
import Service from '../service/Service'
import Reason from '../Reason/Reason'
import Customer from '../Customer/Customer'
import Solve from '../Solve/Solve'
import Contact from '../Contact/Contact'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../Footer/Footer'

const HomePage = () => {
  return (
    <div>
      
      <Home/>
      <Service/>
      <Reason/>
      <Customer/>
      <Solve/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default HomePage