import './FeedBackCard.css'
import { Stars } from '../Data/StarsArray'
import { RiDoubleQuotesR } from "react-icons/ri";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
export default function FeedBackCard({ClientName , picture , feedback}) {
  return (
    <>
    <div className="feedback-card">
      <div className="feedback">
        {Stars.map((item, index) => {
          return <p>{item.star}</p>;
        })}
      </div>
      <p>{feedback}</p>
      <div className="person-details">
          <img src={picture} />
         <div> 
          <h5>Kristin Weston</h5>
          <p>Web Designer</p>
        </div>
        <div>
         <RiDoubleQuotesR className='quotation' />
        </div>
      </div>
    </div>
    </>
  );
}
