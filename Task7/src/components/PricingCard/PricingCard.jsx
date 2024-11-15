import './PricingCard.css'
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import cloud from './../../assets/Images/pricingIcon1_1.svg'
import { QuestionIcon } from '../Data/QuestionIcon';
export default function PricingCard({HeadColor , ButtonColor}) {
  return (
    <div className='pricing-card'>
        <div className={HeadColor? 'card-head' : 'card-head2'}>
            <div>
               <h4>Regular Plans</h4>
              <p>$49<span>/Month</span></p>
            </div>
            <div>
             <img src={cloud}  alt='an cloud'/> 
            </div>
        </div>
        <div className='list text-color'>
            <ul>
                <li> <GiCheckMark className='text-color2'/> 100GB SSD Storage</li>
                <li> <GiCheckMark className='text-color2'/> Weekly Backups</li>
                <li> <GiCheckMark className='text-color2'/> Unlimited Free SSL</li>
                <li> <GiCheckMark className='text-color2'/> 24/7 System Monitoring</li>
                <li> <GiCheckMark className='text-color2'/> Free Domain($9.99 Value)</li>
                <li> <AiOutlineClose className='color-red' /> Frame 164236</li>
                <li> <AiOutlineClose className='color-red' /> 20 + Payment Methods</li>
            </ul>
            <div className='icon-size text-color'>
            {
             QuestionIcon.map((item , index)=>{
                return(
                     <p>{item.mark}</p>  
                )
             })
             
        }
            </div>
        </div>
        <div className={ButtonColor ? 'large-btn' : 'large-btn2'}>
            <button className='text-color'>GET STARTED NOW <HiArrowLongRight /> </button>
        </div>
    </div>
  )
}

