import './ServiceSection2.css'
 import media from '../../assets/Images/video.mp4'
import NumberdCards from '../NumberdCards/NumberdCards'
export default function ServiceSection2() {
  return (
    <section className='section2'>
      <div className='vdAndCards'>
      <div className='vd'>
      <iframe  src="https://www.youtube.com/embed/n_UhsBZNADM?si=jVTZjOYRRgyrgYHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
       </div>
      
              <div className='Lq-number'>
               <NumberdCards NumColor={true} Num='01' CardTitle='Requirement' Content='There are many variations of Lorem ipsum dolor sit amet consectetur adipisicing elit.  alias eius magnam.'/>
               <NumberdCards NumColor={false} Num='02' CardTitle='UI/UX Design' Content='There are many variations of Lorem ipsum dolor sit amet consectetur adipisicing elit.  alias eius magnam.'/>
               <NumberdCards NumColor={true} Num='03' CardTitle='Prototype' Content='There are many variations of Lorem ipsum dolor sit amet consectetur adipisicing elit.  alias eius magnam.'/>
               <NumberdCards NumColor={true} Num='04' CardTitle='Development' Content='There are many variations of Lorem ipsum dolor sit amet consectetur adipisicing elit.  alias eius magnam.'/>
            </div>
      </div>
    </section>
  )
}

