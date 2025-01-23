import React from 'react'
import './About.css'
import Image from '../../assets/avatar-2.svg'
import ResumeDoc from '../../assets/William Park CV.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi my name is William Park and I am a junior at brown university
              studying computer science. I've completed internships at Lockheed
              Martin and NASA as a software engineer, creating live
              video-recording software for UUV and doing data parsing and
              statistical analysis on electrified aircraft. Outside of work I am
              part of coding clubs at my school, including full stack at brown,
              where I am on a team that works with a client to create a full
              stack application. I am also part of igniteCS, where I get to
              teach computer science at local schools. And I also really enjoy
              doing activities outdoors such as hiking and rock climbing.
              Currently, I am looking for new experiences to help me grow as a
              engineer and problem solver and getting more exposure to different
              technologies and working with other talented engineers.
            </p>
          </div>

          <a
            href={ResumeDoc}
            download="William Park CV"
            className="btn align__right"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
