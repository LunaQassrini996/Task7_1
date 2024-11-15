import React from 'react'
import './LqButton.css'
import { FaArrowRightLong } from "react-icons/fa6";
export default function LqButton({title , color}) {
  return (
    <button className={color? 'HomeButton':'HeroButton'}> {title} <FaArrowRightLong className='btn-icon' /> </button>
  )
}
