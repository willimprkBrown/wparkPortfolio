import React, { useState, useEffect } from 'react'
import './Loader.scss'

const Loader = ({ isVisible }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 1700)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className={`loader-wrapper ${!isVisible ? 'hidden' : ''}`}>
      <div className="LoaderBalls">
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
        <div className="LoaderBalls__item"></div>
      </div>
    </div>
  )
}

export default Loader
