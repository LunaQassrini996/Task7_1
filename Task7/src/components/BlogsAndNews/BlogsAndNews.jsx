import'./BlogsAndNews.css'
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import FeatureNewsCard from '../FeatureNewsCard/FeatureNewsCard';
import MiniCirc1 from './../../assets/Images/blogProfile1_2.webp'
import MiniCirc2 from './../../assets/Images/blogProfile1_3.webp'
import MiniCirc3 from './../../assets/Images/blogProfile1_1.webp'
import fig1 from './../../assets/Images/blogThumb1_2.webp'
import fig2 from './../../assets/Images/blogThumb1_3.webp'
import fig3 from './../../assets/Images/blogThumb1_1.webp'
export default function BlogsAndNews({MiniTitle , BlogTitle }) {
  return (
    <section className="blog-section">
      <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hide"
        whileInView={"show"}
        viewport={{once:false , amount:0.7}}
      className="Lq-title">
        <div>
          <span className="blog-span">
            <HiOutlineArrowLongLeft />
            {MiniTitle}
            <HiOutlineArrowLongRight />
          </span>
          <h2 className="blog-title">{BlogTitle}</h2>
        </div>
        <div className="carousel-btn">
          <button className="button-one">
            
            <HiOutlineArrowLongLeft />
          </button>
          <button className="button-two">
            
            <HiOutlineArrowLongRight />
          </button>
        </div>
      </motion.div>
      <div className="cards">
        <motion.div
            variants={fadeIn("up",0.2)}
            initial="hide"
            whileInView={"show"}
            viewport={{once:false , amount:0.7}}
         className='feaut1'>
          <FeatureNewsCard
            txtButton="Uncatigorized"
            date="MARCH 14,2024"
            postTitle="Best And Fastest Data Server Ever"
            profile={MiniCirc1}
            cardCover={fig1}
          />
        </motion.div>
        <motion.div
            variants={fadeIn("up",0.2)}
            initial="hide"
            whileInView={"show"}
            viewport={{once:false , amount:0.5}}
         className='feaut2'>
          <FeatureNewsCard
            txtButton="Technology"
            date="MARCH 29,2024"
            postTitle="Life wont One Beast Air Over Above All "
            profile={MiniCirc2}
            cardCover={fig2}
          />
        </motion.div>

        <motion.div
            variants={fadeIn("up",0.2)}
            initial="hide"
            whileInView={"show"}
            viewport={{once:false , amount:0.7}}
         className='feaut3'>
          <FeatureNewsCard
            txtButton="Shared Hosting"
            date="MARCH 24,2024"
            postTitle="Attentive Was Born In 2005 Help Sales Team"
            profile={MiniCirc3}
            cardCover={fig3}
          />
        </motion.div>
      </div>
    </section>
  );
}
