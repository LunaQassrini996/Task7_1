import './OurPricingSection.css'
import {motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import hand from './../../assets/Images/pricingShape1_1.webp'
import ArrowIcon from './../../assets/Images/pricingIcon1_2.svg'
import diamond from './../../assets/Images/pricingShape1_2.webp'
import PricingCard from '../PricingCard/PricingCard';
export default function OurPricingSection() {
  return (
    <section className='pricing-serv'>
        <motion.div
         variants={fadeIn("up",0.2)}
         initial="hide"
         whileInView={"show"}
         viewport={{once:false , amount:0.7}}
        className='title-part'>
        <img className='diamond-shape' src={diamond} />
          <div>
              <span className='small-title'>
                <HiOutlineArrowLongLeft />
                    OUR SERVICE
                    <HiOutlineArrowLongRight />
                    </span>
                  <h2>Our Awesome Pricing Plans</h2>
            </div> 
                  <div className='designs'>
                   <div className='design-btn'>
                    <button>Monthly</button>
                    <button> Yearly</button>
                   </div> 
                   <img className='arrow-img' src={ArrowIcon} alt='an arrow icon' />
                   <span>Save 25%</span>
                  </div>
            </motion.div>
            <motion.div 
             variants={fadeIn("up",0.3)}
             initial="hide"
             whileInView={"show"}
             viewport={{once:false , amount:0.7}}
            className=' price-card'>
              <PricingCard HeadColor={true} ButtonColor={true} />
              <PricingCard HeadColor={false} ButtonColor={false} />
              <PricingCard HeadColor={true} ButtonColor={true} />
            </motion.div>
            <img className='Hand' src={hand} />
    </section>
  )
}
