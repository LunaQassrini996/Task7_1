import './FeatureNewsCard.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
export default function FeatureNewsCard({txtButton , date , postTitle , profile , cardCover}) {
  return (
    <div className='card-box'>
        <div className='card-img'> 
            <img src={cardCover} />
        </div>
        <div className='card-text'>
            <div className='date-btn'>
              <button>{txtButton}</button>
              <span>{date}</span>
            </div>
            <h5>{postTitle}</h5>
            <div className='details-founder'>
                <div className='founder'>
                    <div>
                      <img src={profile} alt='an profile photo' />
                    </div>
                    <div className='info-career'>
                      <p>Admin</p>
                      <span>Co,Founder</span>
                    </div>
                </div>
                <button className='arow-btn'>
                  <HiOutlineArrowLongRight />
                </button>
            </div>
        </div>
    </div>
  )
}
