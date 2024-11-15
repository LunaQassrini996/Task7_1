import React from 'react'
import HomeNavbar from '../../components/HomeNavbar/HomeNavbar'
import Brand from '../../assets/Images/logo.svg'
import HeroHome from '../../components/HeroHome/HeroHome'
import LqBrandSection from '../../components/LqBrandSection/LqBrandSection'
import { Brands } from '../../components/Data/Brands'
import OurServiceSection from '../../components/OurServiceSection/OurServiceSection'
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2'
import OurPricingSection from '../../components/OurPricingSection/OurPricingSection'
import ContactUsSection from '../../components/ContactUsSection/ContactUsSection'
import BlogsAndNews from '../../components/BlogsAndNews/BlogsAndNews'
import Footer from '../../components/Footer/Footer'
export default function Home() {
  return (
    <>
     <HomeNavbar Logo={Brand} />
     <HeroHome />
       <LqBrandSection BrandContent ={Brands} />
     <OurServiceSection SubTitle='OUR SERVICE' ServiceTitle='Elevating Businesses With IT Ingenuity' />
     <ServiceSection2 />
     <OurPricingSection />
     <ContactUsSection SmallTitle='CONTACT US' ContactTitle='24/7 Expert Hosting Support Our Customers love' MainTitle='Our Latest Clients Feedback'
      SmallTitle2='TESTIMONIALS'
     />
     <BlogsAndNews MiniTitle='BLOG & NEWS' BlogTitle='Featured News And Insights'/>
     <Footer PartOne={true} PartTwo={false} foot={true} dimension={true}  />
    </>
  )
}
