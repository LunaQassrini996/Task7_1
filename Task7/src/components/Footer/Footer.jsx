import './Footer.css'
import { HiArrowLongRight } from "react-icons/hi2";
import { HiMiniChevronDoubleRight } from "react-icons/hi2"
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineCropSquare } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import pic from './../../assets/Images/ctaShape2_1.webp'
import pic2 from './../../assets/Images/ctaThumb.webp'
import pic3 from './../../assets/Images/testimonialShape3_1.webp'
import logo2 from './../../assets/Images/vectorpaint(14).svg'
import footThumb1 from './../../assets/Images/footerThumb1_1.webp'
import footThumb2 from './../../assets/Images/footerThumb1_2.webp'
import { SocialIcon } from '../Data/FooterIcon';
import { Link } from 'react-router-dom';
export default function Footer({PartOne , PartTwo , foot , dimension}) {
  return (
    <section className={foot? 'footer' : 'footer2'}>
      <div className= {dimension? 'main-footer' : 'main-footer2'}>
         <div className="top-section"  style={{display : (PartOne)? 'block' : 'none'}}>
          <div className="up-section bg-color2">
            <div>
              <img className="designe-1" src={pic} />
              <img className="image-foot" src={pic2} />
            </div>
            <h2>Stay Connected With Cutting Edge IT</h2>
            <div className="foot-btn">
              <img className="pic3" src={pic3} />
              <button>
                TALK TO A SPECIALIST <HiArrowLongRight />
              </button>
            </div>
          </div>
        </div> 
        <div className='section'
         style={{display : (PartTwo)? 'flex' : 'none'}}>
          <div className='circ-txt'>
          <div className='circle'><IoLocationSharp /></div>
          <div className='txt'>
          <span>Address</span>
          <p>4648 Rocky Road Philadelphia PA</p>
          </div>
          </div>
          <div className='circ-txt'>
          <div className='circle'><MdMarkEmailRead /> </div>
          <div className='txt'>
          <span>Send Email</span>
          <p>info@example.com</p>
          </div>
          </div>
          <div className='circ-txt'>
          <div className='circle'><BsFillTelephoneOutboundFill /> </div>
          <div className='txt'>
          <span>Call Emergency</span>
          <p>+88 0123 654 99</p>
          </div>
          </div>
        </div>
        <div className='info-and-links'>
          <div className='col-1'>
            <div className='log'>
              <img src={logo2} />
            </div>
            <div>
              <p>Extech is a Phasellus ultricies allquam volutpat ullamcorper
              laoreet neque,a lacinia curabitur lacinia mollis</p>
              <div className="father-icon">
              {SocialIcon.map((item, index) => {
                return (
                  <div className="social-icon">
                    <a href="#">{item.social}</a>
                  </div>
                );
              })}
            </div>
            </div>
          </div>
          <div className='col-two'>
            <h5 className='sub'>Quick Links</h5>
             <Link className='link' to={'/about'} > <HiMiniChevronDoubleRight />Extech About</Link> 
             <Link className='link' > <HiMiniChevronDoubleRight />Our Services</Link> 
             <Link className='link' > <HiMiniChevronDoubleRight />Our Blogs</Link> 
             <Link className='link' > <HiMiniChevronDoubleRight />FAQ'S</Link> 
             <Link className='link' to={'/contact'} > <HiMiniChevronDoubleRight />Contact Us</Link> 
          </div>
          <div>
          <h5 className='sub'>Recent Posts</h5>
          <div>
          <div className='post'>
          <div className='post-image'>
                <img src={footThumb1} />
              </div>
                <div className='post-text'>
                  <span><CgCalendarDates /> 15th April,2024</span>
                  <p>Top 5 Most Famous</p>
                  <p>Tecnology Trend in 2024</p>
                </div>
           </div>
           <div className='post'>
          <div className='post-image'>
                <img src={footThumb2} />
              </div>
                <div className='post-text'>
                  <span><CgCalendarDates /> 20th june,2024</span>
                  <p className='text'>The surfing Man will Blow Your Mind</p>
                </div>
           </div>
          </div>
          </div>
          <div>
          <h5 className='sub'>Contact Us</h5>
          <span className='link'><MdEmail className='mail' /> info@example.com</span>
          <span className='link'><BsTelephoneFill className='mail' /> +208-6666-0112</span>
          <div className='feild'>
            <input type='email' placeholder='Your email address' />
            <button><HiArrowLongRight /></button>
          </div>
          <div className='check'>
            <MdOutlineCropSquare />
            <p>I agree for <span>PrivacyPolicy</span></p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
