import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Plans from './components/Plans'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useScrollReveal()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    document.documentElement.classList.toggle('light', !darkMode)
    document.body.style.backgroundColor = darkMode ? '#080808' : '#111111'
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
