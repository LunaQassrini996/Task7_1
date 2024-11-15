import React from 'react'
import LqNavbar from '../../components/LqNavbar/LqNavbar'
import HeroTwo from '../../components/HeroTwo/HeroTwo'
import ContactInformationSection from '../../components/ContactInformationSection/ContactInformationSection'
import Footer from '../../components/Footer/Footer'

export default function Contant() {
  return (
    <>
      <LqNavbar />
      <HeroTwo heading='Contact Us' phrase='Contact Us'/>
      <ContactInformationSection />
      <Footer PartOne={false} PartTwo={true} />
    </>
  )
}
