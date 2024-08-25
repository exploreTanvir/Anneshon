import { Email, Person } from '@mui/icons-material';
import React from 'react';
import anneshon from "../../assets/anneshon.png";
import "./topBar.css";

const TopBar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className={"topbar "+(menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left col-8 ps-3 ms-5'>
          <a href='https://anneshon.org'>        
            <img src={anneshon} alt="" className='anneshon' />
          </a>
          <div className='item'>
            <Person className="icon"/>
            <span>+8801818301681</span>
          </div>
          <div className='item'>
            <Email className="icon"/>
            <span className='ms-1'>anneshon@gmail.com</span>
          </div> 

          
        </div>
        <div className='right col-4 d-flex justify-content-center gap-5'>
        <div>
            <div className='py-1 px-3 fw-bold rounded-1 login_reg '><button className="btn1">লগ ইন</button> / <button className="btn2">সাইন আপ</button></div>
          </div>
          <div className='dropDown' onClick={()=>setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div> 
        </div>
      </div>
    </div>
        </div>
      </div>
  )
}

export default TopBar