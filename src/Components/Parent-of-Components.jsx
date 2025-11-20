import React from 'react'
import Hero from './Hero'
import Items from './Items'
import { WhyChooseUs } from './ChooseUs'
import Footer from './Footer'
const ParentOfComponents = () => {
  return (
    <>
      <Hero/>
      <Items/>
      <WhyChooseUs/>
      <Footer/>
    </>
  )
}

export default ParentOfComponents
