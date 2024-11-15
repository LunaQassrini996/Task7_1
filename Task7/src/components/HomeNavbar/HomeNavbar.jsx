import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import './HomeNavbar.css'
import LqButton from '../LqButton/LqButton';
export default function HomeNavbar({Logo}) {
    const[Toogle , setToogle] = useState(false)
    const [isSecroll , setScroll] = useState(false)

    const scrollEvent = () => {
      setScroll(window.scrollY >50)
    }
    useEffect (() =>{
      window.addEventListener('scroll' , scrollEvent)
      return () =>{ removeEventListener('scroll' , scrollEvent)};
    },[]);
  return (
    <>
      <nav className={`Home_nav ${isSecroll ? 'Secrol' :''}`}>
        <div className="Image">
          <img src={Logo} alt="Logo" />
        </div>
        <div className={Toogle? 'links' : 'links2'}>
          <ul>
            <li>
              <Link className="list-home" to="/">
                Home <IoIosArrowDown />
              </Link>
              <ul className="dropdown">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Plans</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="#" className="list-home">
                Services <IoIosArrowDown />
              </Link>
              <ul className="dropdown">
                <li>
                  <a href="#">IT services</a>
                </li>
                <li>
                  <a href="#">UI/UX Designer</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="list-home">
                Pages <IoIosArrowDown />
              </Link>
              <ul className="dropdown">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="list-home">
                Blog <IoIosArrowDown />
              </Link>
              <ul className="dropdown">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <button className='close-btn' onClick={() => setToogle(false)}>Close</button>
          </ul>
        </div>
        <div className="Icon">
          <IoSearchOutline />
          <FaShoppingCart />
           <LqButton color={true} title="GET A QUOTE" />
        </div>
        <div className='ToggleNav'>
          <IoSearchOutline />
           <FaShoppingCart />
           <button onClick={() => setToogle(true)}><FaBars /></button>
          
       </div>
      </nav>
    </>
  );
}
