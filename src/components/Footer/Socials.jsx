import React from 'react'

const Socials = () => {
  return (
    <ul className="link__list grid">
      <li className="sitemap__socials">
        <a
          href="https://www.instagram.com/willimprk/?__d=1%2F"
          className="sitemap__socials-link"
          target="_blank"
          rel="noreferrer"
        >
          Instagram <i class="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li className="sitemap__socials">
        <a
          href="https://www.linkedin.com/in/william-park-009428238/"
          className="sitemap__socials-link"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <i class="fa-brands fa-linkedin"></i>
        </a>
      </li>

      <li className="sitemap__socials">
        <a
          href="https://github.com/willimprkBrown"
          className="sitemap__socials-link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <i class="fa-brands fa-github"></i>
        </a>
      </li>
    </ul>
  )
}

export default Socials
