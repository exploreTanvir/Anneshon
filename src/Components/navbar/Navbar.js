import anneshon from "../../assets/anneshon.png";
import { Menu } from "../Menu";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
        <nav className="navbar">
            <div className="anneshon d-flex align-items-center ">
        <img src={anneshon} alt="" className='logo me-2' />
            <h4 className="fw-bold">ANNESHON</h4>
            </div>
            <ul className="navMenu">
                {Menu.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a href={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</a>
                            </li>
                    )
                })}
                     
            </ul>
        </nav>
    </div>
  )
}

export default Navbar