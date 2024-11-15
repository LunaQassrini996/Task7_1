import './TeamSection.css'
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import member1 from './../../assets/Images/04.webp'
import member2 from './../../assets/Images/05.webp'
import member3 from './../../assets/Images/06.webp'
import member4 from './../../assets/Images/07.webp'
import LqButton from '../LqButton/LqButton';
import TeamCard from '../TeamCard/TeamCard';
export default function TeamSection() {
  return (
    <section className='team-sec'>
        <motion.div 
         variants={fadeIn("up",0.2)}
         initial="hide"
         whileInView={"show"}
         viewport={{once:false , amount:0.7}}
        className='title-sec'>
           <div>
                <span className='team-span'>
                <HiOutlineArrowLongLeft />
                    TEAM MEMBERS
                    <HiOutlineArrowLongRight />
                    </span>
                  <h2>Our Dedicated Team Members</h2>  
            </div>
            <div className='carousel-btn'>
                <LqButton color={true} title='All Members' />
            </div>
        </motion.div>
        <motion.div
         variants={fadeIn("up",0.2)}
         initial="hide"
         whileInView={"show"}
         viewport={{once:false , amount:0.7}}
         className='Team-card'>
            <TeamCard Member={member1} name='Masirul Islam' position='Web Designer' />
            <TeamCard Member={member2} name='Jessica Mardol' position='Cyber Expert' />
            <TeamCard Member={member3} name='Arnold Hemingway' position='Web Expert' />
            <TeamCard Member={member4} name='Shikon Haque' position='Data Analyst' />
        </motion.div>
        <div className='section-3'><p>1k + Brands Trust Us</p></div>
    </section>
  )
}
