import './AboutSectionTwo.css'
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import p1 from './../../assets/Images/asterisk.svg';
import { StarsAndPargraph } from '../Data/StarAndPargraph';
export default function AboutSectionTwo() {
  return (
    <motion.section 
    variants={fadeIn("up",0.2)}
    initial="hide"
    whileInView={"show"}
    viewport={{once:false , amount:0.7}}
    className="about-sec2">
      {StarsAndPargraph.map((item, index) => {
        return (
          <div className="star-title" key={index}>
            <img src={item.i} />
            <p>{item.phrase1}</p>
          </div>
        );
      })}
      <div className='style-2'>
      <img src={p1} />
        <p className='paragraph'>Cyber Security</p>
        <img src={p1} />
      </div>
    </motion.section>
  );
}
