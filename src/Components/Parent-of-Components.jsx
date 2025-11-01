import React from 'react'
import Nav from './Navbar'
import Hero from './Hero'
import Items from './Items'
import { WhyChooseUs } from './ChooseUs'
import Footer from './Footer'
const ParentOfComponents = () => {
  return (
    <>
      <Nav/>
      <Hero/>
      <Items/>
      <WhyChooseUs/>
      <Footer/>
    </>
  )
}

export default ParentOfComponents
