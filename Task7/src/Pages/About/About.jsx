import LqNavbar from '../../components/LqNavbar/LqNavbar'
import HeroTwo from '../../components/HeroTwo/HeroTwo'
import AboutSectionTwo from '../../components/AboutSectionTwo/AboutSectionTwo'
import TeamSection from '../../components/TeamSection/TeamSection'
import LqBrandSection from '../../components/LqBrandSection/LqBrandSection'
import { EnvatoLogo } from '../../components/Data/EnvatoLogo'
import{motion} from 'framer-motion'
import {fadeIn} from '../../Animate'
import Footer from './../../components/Footer/Footer'
export default function About() {
  return (
    <>
      <LqNavbar />
      <HeroTwo heading='About Us' phrase='About Us' />
      <AboutSectionTwo />
      <TeamSection />
      <motion.div
        variants={fadeIn("up",0.2)}
        initial="hide"
        whileInView={"show"}
        viewport={{once:false , amount:0.7}} 
      >
      <LqBrandSection BrandContent={EnvatoLogo} />
      </motion.div>
      <Footer PartOne={false} PartTwo={true} foot={false} dimension={false}  />
    </>
  )
}
