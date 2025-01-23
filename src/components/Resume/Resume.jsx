import React, { useState } from 'react'
import './Resume.css'
import Data from './Data'
import Card from './Card'

const Resume = () => {
  const [items, setItems] = useState(Data)
  const filterItem = (categoryItem) => {
    if (categoryItem !== 'everything') {
      const updatedItems = Data.filter((curElem) => {
        return curElem.category === categoryItem
      })
      console.log(updatedItems)
      setItems(updatedItems)
    } else {
      setItems(Data)
    }
  }
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__filter">
        <span className="resume__item" onClick={() => filterItem('everything')}>
          Everything
        </span>
        <span className="resume__item" onClick={() => filterItem('education')}>
          Education
        </span>
        <span className="resume__item" onClick={() => filterItem('experience')}>
          Work Experience
        </span>
      </div>
      <div className="resume__container grid">
        {items.some((item) => item.category === 'education') && (
          <div className="timeline grid">
            {items
              .filter((val) => val.category === 'education')
              .map((val, id) => (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              ))}
          </div>
        )}

        {items.some((item) => item.category === 'experience') && (
          <div className="timeline grid">
            {items
              .filter((val) => val.category === 'experience')
              .map((val, index) => (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Resume
