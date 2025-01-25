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
              Hi, my name is William Park, and I am a junior at Brown University
              studying Computer Science. I have completed internships at
              Lockheed Martin and NASA as a software engineer, where I developed
              live video-recording software for unmanned underwater vehicles
              (UUVs) and conducted data parsing and statistical analysis for
              electrified aircraft systems. At Brown, I am actively involved in
              coding clubs, including Full Stack at Brown, where I collaborate
              with a team to develop full-stack applications for real-world
              clients. I am also a member of igniteCS, where I have the
              opportunity to teach computer science to students at local
              schools, fostering their interest in technology. Outside of
              academics and work, I enjoy outdoor activities like hiking and
              rock climbing, which help me stay balanced and inspired. I am
              currently seeking opportunities to grow as an engineer and problem
              solver, gain exposure to new technologies, and collaborate with
              other talented professionals.
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
