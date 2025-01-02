import React from 'react'
import './Home.css'
import Me from '../../assets/avatar-1.svg'
import Socials from './Socials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name"> William Park</h1>
        <span className="home__education">I'm a Software Engineer</span>

        <Socials />
        <a href="#contact" className="btn">
          Contact Me
        </a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home
