import React from 'react'
import Banner1 from '../Components/Banner1'
import Banner2 from '../Components/Banner2'
import Banner3 from '../Components/Banner3'
import CareersHero from '../Components/CareersHero'
import FocusAreas from '../Components/FocusAreas'
import WhyWorkMatters from '../Components/WhyWorkMatters'
import ProgramApproach from '../Components/ProgramApproach'

const Homepage = () => {
  return (
    <>
      <Banner1 />
      <Banner2 />
      <FocusAreas />
      <WhyWorkMatters />
      <ProgramApproach />
      <Banner3 />
      <CareersHero />
    </>
  )
}

export default Homepage