import './OurServiceSection.css'
import {motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ServiceCard from '../ServiceCard/ServiceCard';
import icon1 from './../../assets/Images/serviceIcon1_2.svg';
import icon2 from './../../assets/Images/serviceIcon1_3.svg';
import icon3 from './../../assets/Images/serviceIcon1_4.svg';
import icon4 from './../../assets/Images/serviceIcon1_1.svg';
export default function OurServiceSection({ SubTitle,ServiceTitle}) {
  return (
    <>
       <section className='service-section '>
           <motion.div 
           variants={fadeIn("up",0.2)}
           initial="hide"
           whileInView={"show"}
           viewport={{once:false , amount:0.7}}
           className='part1 LQ-margin'>
           <div>
                <span className='service-span'>
                <HiOutlineArrowLongLeft />
                    {SubTitle}
                    <HiOutlineArrowLongRight />
                    </span>
                  <h2 className='service-title'>{ServiceTitle}</h2>  
            </div>
            <div className='Buttons'>
                <button className='button-arrow'> <HiOutlineArrowLongLeft /></button>
                <button className='button-arrow2'> <HiOutlineArrowLongRight /></button>
            </div>
           </motion.div>
           <motion.div 
            variants={fadeIn("up",0.2)}
            initial="hide"
            whileInView={"show"}
            viewport={{once:false , amount:0.5}}
           className='sec-cards'>
            <div className='one'>
            <ServiceCard Title='Woo Commerce' icon ={icon1} />
            </div>
            <div className='two'>
            <ServiceCard Title='CRM Solutions' icon ={icon2} />
            </div>
            <div>
            <ServiceCard Title='Web Design' icon ={icon3} />
            </div>
            <div className='four'>
            <ServiceCard Title='Data Guard Sentinel' icon ={icon4} />
            </div>     
           </motion.div>
        </section> 
    </>
  )
}
