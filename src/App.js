import React, { useState, useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isVisible={isLoading} />
      <div className={!isLoading ? 'content visible' : 'content'}>
        <Sidebar />
        <main className="main">
          <Home />
          <About />
          <Resume />
          <Portfolio />
          {/* <Contact /> */}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
