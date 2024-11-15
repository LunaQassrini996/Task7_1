import './ContactUsSection.css'
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import ctashape from './../../assets/Images/ctaShape1_1.webp'
import thumb from './../../assets/Images/ctaThumb1_1.webp'
import per1 from './../../assets/Images/testiThumb3_1.webp'
import per2 from './../../assets/Images/testiThumb3_2.webp'
import per3 from './../../assets/Images/testiThumb3_3.webp'
import FeedBackCard from '../FeedBackCard/FeedBackCard';
export default function ContactUsSection({SmallTitle,ContactTitle ,MainTitle ,SmallTitle2}) {
  return (
    <section className="customer">
      <div className="testimonails">
        <div className=" up-sec">
          <motion.div 
           variants={fadeIn("up",0.2)}
           initial="hide"
           whileInView={"show"}
           viewport={{once:false , amount:0.7}}
          className="Top-section bg-color2 ">
            <div>
              <img src={thumb} alt="an girl picture" />
            </div>
            <div className="contact-title">
              <span>
                <HiOutlineArrowLongLeft />
                {SmallTitle}
                <HiOutlineArrowLongRight />
              </span>
              <h2>{ContactTitle}</h2>
            </div>
            <div className="contact-button">
              <img src={ctashape} />
              <button>
                TALK TO A SPECIALIST <HiArrowLongRight />{" "}
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hide"
        whileInView={"show"}
        viewport={{once:false , amount:0.7}}
        className="title-and-cards">
          <div className="an-title">
            <span>
              <HiOutlineArrowLongLeft />
              {SmallTitle2}
              <HiOutlineArrowLongRight />
            </span>
            <h2>{MainTitle}</h2>
          </div>
          <div className="rating-card">
            <div className='card1'>
              <FeedBackCard
                ClientName="Kristin Weston"
                picture={per1}
                feedback='"Extech has completely transformed our process.The user-friendly
        interface and powerful featurs maintaining our website.Highly
        recommended for all"'
              />
            </div>
            <div>
              <FeedBackCard
                ClientName="Theresa Webb"
                picture={per2}
                feedback='"Extech has completely transformed our process.The user-friendly
        interface and powerful featurs maintaining our website.Highly"'
              />
            </div>
            <div className='card2'>
              <FeedBackCard
                ClientName="Ronald Richards"
                picture={per3}
                feedback='"Extech has completely transformed our process.The user-friendly
        interface and powerful featurs maintaining our website.Highly"'
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
