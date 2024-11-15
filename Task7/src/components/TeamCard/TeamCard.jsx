import './TeamCard.css'
import { PiShareNetworkBold } from "react-icons/pi";
export default function TeamCard({Member , name , position}) {
  return (
    <div className='teamcard'>
        <img src={Member} alt='member photo' />
        <div className='txt-card bg-color'>
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
        <div className='share-icon bg-color2'>
         <PiShareNetworkBold />
        </div>
    </div>
  )
}
