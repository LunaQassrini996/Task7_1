import React from 'react'
import './HeroHome.css'
import { GoPulse } from "react-icons/go";
import { GiCheckMark } from "react-icons/gi";
import LqButton from '../LqButton/LqButton';
import { VscStarHalf } from "react-icons/vsc";
import { GoStarFill } from "react-icons/go";
import { TiLocationArrow } from "react-icons/ti";
import { TfiLocationArrow } from "react-icons/tfi";
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import shap1 from '../../assets/Images/heroShape1_2.webp'
import shap2 from '../../assets/Images/heroShape1_1.webp'
import picture from '../../assets/Images/heroShape1_3.webp'
import boy from '../../assets/Images/heroThumb1_1.webp'

import Profile from '../../assets/Images/profileShape1_1.webp'
export default function HeroHome() {
  return (
    <>
      <section className="hero-home">
        <img className="shape1" src={shap1} alt="an shape" />
        <img className="shape2" src={shap2} alt="an shape" />
        <div className="Responsive">
          <div className="hero-span">
            <GoPulse />
            <span>Everything You Need To Creat A Website</span>
          </div>
          <h1 className="hero-title">
            Business Innovation with IT Services Expertise
          </h1>
          <div className="checked">
            <div>
              <p>
                <GiCheckMark /> Deployment and Support
              </p>
              <p>
                <GiCheckMark /> Discovery and Analysis
              </p>
            </div>
            <div>
              <p>
                <GiCheckMark /> Flexibility and Adaptability
              </p>
              <p>
                <GiCheckMark /> Competitive Advantage
              </p>
            </div>
          </div>
          <LqButton color={false} title="GET STARTED" />
          <div className="details-div">
            <div className="first-ditales">
              <h3 className="green">
                <GoStarFill /> Trustipilot
              </h3>
              <div className="Lq-profile">
                <img src={Profile} alt="profiles" />
                <div>
                  <VscStarHalf className="stars-color" />
                  <VscStarHalf className="stars-color" />
                  <VscStarHalf className="stars-color" />
                  <p>450+reviews</p>
                </div>
              </div>
            </div>
            <div className="second-ditales">
              <h3>Google</h3>
              <div className="Lq-profile">
                <img src={Profile} alt="profiles" />
                <div>
                  <VscStarHalf className="stars-color" />
                  <VscStarHalf className="stars-color" />
                  <VscStarHalf className="stars-color" />
                  <p>450+reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Hero-image">
          <img className="Boy" src={boy} alt="an boy" />
        </div>
        <div className="pictures">
          <img className="shape2" src={shap2} alt="an shape" />
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="design1"
          >
            Solation <TiLocationArrow className="arrow1" />
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hide"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="design2"
          >
            Technology <TfiLocationArrow className="arrow2" />
          </motion.p>
        </div>
        <img className="shape1" src={shap1} alt="an shape" />
        <div className="design3">
          <img src={picture} alt="an picture" />
        </div>
      </section>
    </>
  );
}
