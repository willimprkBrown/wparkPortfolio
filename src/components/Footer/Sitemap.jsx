import React from 'react'

const Sitemap = () => {
  return (
    <ul className="link__list grid">
      <li>
        <a href="#home" className="sitemap__socials">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="sitemap__socials">
          About
        </a>
      </li>
      <li>
        <a href="#resume" className="sitemap__socials">
          Experience
        </a>
      </li>
      <li>
        <a href="#portfolio" className="sitemap__socials">
          Portfolio
        </a>
      </li>
      <li>
        <a href="#contact" className="sitemap__socials">
          Contact
        </a>
      </li>
    </ul>
  )
}

export default Sitemap
