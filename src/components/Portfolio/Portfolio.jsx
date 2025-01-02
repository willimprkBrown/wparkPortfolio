import React, { useState } from 'react'
import Menu from './Menu'
import './Portfolio.css'

const Portfolio = () => {
  const [items, setItems] = useState(Menu)
  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Projects</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, tech } = elem
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__tech">{tech}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
