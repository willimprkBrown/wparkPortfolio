import React from 'react'
import Socials from './Socials'
import Sitemap from './Sitemap'
import './Footer.css'

const Footer = () => {
  return (
    <section className="footer container section" id="footer">
      <h2 className="section__title">Navigation</h2>
      <div className="footer__container grid">
        <Sitemap />
        <Socials />
      </div>
    </section>
  )
}

export default Footer
