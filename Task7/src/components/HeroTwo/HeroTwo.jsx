import './HeroTwo.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import format from './../../assets/Images/line-element.webp'
import element from './../../assets/Images/element.webp'
export default function HeroTwo({heading , phrase }) {
  return (
    <section className='hero'>
        <div className='hero-text'>
        <h1>{heading}</h1>
        <span>Home <MdOutlineKeyboardArrowRight /> {phrase} </span>
        </div>
        <img src={format} alt=' Group of lines'/>
        <div className='photo-2'>
            <img src={ element}/>
        </div>
    </section>
  )
}
