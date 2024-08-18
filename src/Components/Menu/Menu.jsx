import { AssignmentOutlined, HomeOutlined, HomeRepairServiceOutlined, HowToRegOutlined, InfoOutlined, MenuBookOutlined, PersonAddAltOutlined, PhoneInTalkOutlined } from '@mui/icons-material'
import React from 'react'
import "./menu.css"

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'menu '+(menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><HomeOutlined/> হোম</a>
            </li>
            
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><InfoOutlined/> আমাদের সম্পর্কে</a>
            </li>
            {/* <li onClick={()=>setMenuOpen(false)}>
                <a href='#works'><Diversity2Outlined/> Works</a>
            </li> */}
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><HomeRepairServiceOutlined/> কোর্স সমূহ</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><AssignmentOutlined/> ব্লগ</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><MenuBookOutlined/> বইপত্র</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><HowToRegOutlined/> প্রশিক্ষক নিবন্ধন</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><PersonAddAltOutlined/>    শিক্ষার্থী নিবন্ধন</a>
            </li>
            
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#'><PhoneInTalkOutlined/> যোগাযোগ</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu