import './ServiceCard.css'
import { RxDoubleArrowRight } from "react-icons/rx";
export default function ServiceCard({Title , icon}) {
  return (
    <>
      <div className='serv-card'>
      <div className='icon-service'>
        <img src={icon} />
      </div> 
      <h4>{Title}</h4>
      <p className='LQ-paraghraph'>Collaboratively formoulate principle capital.Progressively evolve user revolutionary hosting services</p>
       <button className='card-btn'>Read more <RxDoubleArrowRight /></button>
        </div> 
    </>
  )
}
