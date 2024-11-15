import plane from './../../assets/Images/plane.webp'
import logoA from './../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { VscTriangleLeft } from "react-icons/vsc";
import { FaBars } from "react-icons/fa6";
import './LqNavbar.css'
import { useEffect, useState } from 'react';
export default function LqNavbar() {
  const[Togle , setTogle] = useState(false)
  const [isScroll , setScroll] = useState(false)
  
  const scrollEvent = () => {
    setScroll(window.scrollY>0)
  }
  useEffect (() =>{
    window.addEventListener('scroll' , scrollEvent)
    return () =>{ removeEventListener('scroll' , scrollEvent)};
  },[]);
  
  return (
    <>
      <nav className={`About-nav ${isScroll ? 'Secrol' : ''}`}>
        <div className="Images">
          <img src={plane} alt="plane" />
          <img src={logoA} alt="logo" />
        </div>
        <div className="pp">
          <div className={Togle ? "links-one" : "links-two"}>
            <ul>
              <li>
                <Link className="list-a" to="/">
                  Home <IoIosArrowDown />
                </Link>
                <ul className="Drop-down">
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
                <Link className="list-a" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="list-a" to="#">
                  Services <IoIosArrowDown />
                </Link>
                <ul className="Drop-down">
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
                <Link className="list-a" to="#">
                  Pages <IoIosArrowDown />
                </Link>
                <ul className="Drop-down">
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
                <Link className="list-a" to="#">
                  Blog <IoIosArrowDown />
                </Link>
                <ul className="Drop-down">
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
                <Link className="list-a" to="/contact">
                  Contact
                </Link>
              </li>
              <button className="togle-btn" onClick={() => setTogle(false)}>
                Close
              </button>
            </ul>
          </div>
        </div>
        <div className="search">
          <IoSearchOutline />
        </div>
        <div className="blue-part bg-color2">
          <button className="about-btn">
            {" "}
            GET A QUOTE <FaArrowRightLong className="btn-Icon" />{" "}
          </button>
          <VscTriangleLeft className="text-color2" />
        </div>
        <div className="toggle-nav">
          <div>
            <IoSearchOutline />
          </div>
          <button onClick={() => setTogle(true)}>
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
}
