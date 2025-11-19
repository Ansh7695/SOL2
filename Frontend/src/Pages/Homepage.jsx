import React from 'react'
import Banner1 from '../Components/Banner1'
import Banner2 from '../Components/Banner2'
import Banner3 from '../Components/Banner3'
import Projects from '../Components/Projects'
import Dashboard from '../Components/Dashboard'
import Publications from '../Components/Publications'
import EventsBlogs from '../Components/EventsBlogs'
import CareersHero from '../Components/CareersHero'
import Footer from '../Components/Footer'

const Homepage = () => {
  return (
    <>
    <Banner1/>
    <Banner2/>
    <Banner3/>
    <Projects/>
    <Dashboard/>
    <Publications/>
    <EventsBlogs/>
    <CareersHero/>
    <Footer/>
    </>
  )
}

export default Homepage