import './ContactInformationSection.css'
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import video from './../../assets/Images/video.webp'
import LqButton from '../LqButton/LqButton';
export default function ContactInformationSection() {
  return (
    <section className="contact-information">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hide"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="sub-1"
      >
        <div className="side">
          <div className="side-1 bg-color2">
            <div className="contact1">
              <div className="icon-c">
                <BsFillTelephoneOutboundFill />
              </div>
              <div className="text-info">
                <span>Call Us 7/24</span>
                <p>+208-555-0112</p>
              </div>
            </div>
            <div className="contact2">
              <div className="icon-c">
                <MdMarkEmailRead />
              </div>
              <div className="text-info">
                <span>Make a Quote</span>
                <p>Infotech@gmail.com</p>
              </div>
            </div>
            <div className="contact3">
              <div className="icon-c">
                <IoLocationSharp />
              </div>
              <div className="text-info">
                <span>Location</span>
                <p>4517 Washington ave.</p>
              </div>
            </div>
          </div>
          <img src={video} alt="an video" />
        </div>
        <div className="side-2">
          <div>
            <h2>Ready to Get Started?</h2>
            <p>
              Nullam varius,erat quis iaculis dictum,eros urna eros, ut blandit
              felis odio in turpis.Quisque rhoncus,eros in auctor ultrices
            </p>
          </div>
          <div className="forms">
            <div className="form">
              <label for="name">Your Name*</label>
              <input type="text" id="name" />
            </div>
            <div className="form">
              <label for="mail">Your Email*</label>
              <input type="email" id="mail" />
            </div>
          </div>
          <div className="form2">
            <label for="message">Write Message*</label>
            <input type="text" id="message" />
          </div>
          <LqButton color={true} title="Send Message" />
        </div>
      </motion.div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.6847534552235!2d144.9734060443102!3d-37.81660668012894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato%20Pty%20Ltd!5e0!3m2!1sar!2s!4v1731543946342!5m2!1sar!2s"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
