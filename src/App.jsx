import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { getPortfolioContent } from './data/portofolioData'
import fish1 from './assets/fish1.svg'
import fish2 from './assets/fish2.svg'
import fish3 from './assets/fish3.svg'
import fish4 from './assets/fish4.svg'

function App() {
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useState('id')
  const [activeProject, setActiveProject] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = 'Muhammad Lutfan | Portfolio'

    const favicon =
      document.querySelector("link[rel='icon']") || document.createElement('link')

    favicon.rel = 'icon'
    favicon.href = '/Waves.png'
    document.head.appendChild(favicon)
  }, [])

  useEffect(() => {
    if (loading) return

    const elements = document.querySelectorAll('.fade-up')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [loading])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2

      document.documentElement.style.setProperty('--mouse-x', x.toFixed(3))
      document.documentElement.style.setProperty('--mouse-y', y.toFixed(3))
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
  if (loading) return

  const fish = document.querySelector('.cursor-fish')
  const trail = document.querySelector('.cursor-trail')

  if (!fish || !trail) return

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let fishX = mouseX
  let fishY = mouseY
  let lastAngle = 0
  let rafId

  const moveCursor = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  const animate = () => {
    fishX += (mouseX - fishX) * 0.08
    fishY += (mouseY - fishY) * 0.08

    const dx = mouseX - fishX
    const dy = mouseY - fishY
    const angle = Math.atan2(dy, dx) * 180 / Math.PI

    if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
      lastAngle = angle
    }

    fish.style.left = `${fishX}px`
    fish.style.top = `${fishY}px`
    fish.style.transform = `translate(-50%, -50%) rotate(${lastAngle}deg)`

    trail.style.left = `${fishX - 18}px`
    trail.style.top = `${fishY + 4}px`
    trail.style.transform = `translate(-50%, -50%) rotate(${lastAngle}deg)`

    rafId = requestAnimationFrame(animate)
  }

  window.addEventListener('mousemove', moveCursor)
  animate()

  return () => {
    window.removeEventListener('mousemove', moveCursor)
    cancelAnimationFrame(rafId)
  }
}, [loading])
  const content = useMemo(() => getPortfolioContent(lang), [lang])

  if (loading) {
    return (
      <div className="loader-wrap">
        <div className="spinner"></div>
        <h2>{content.loading}</h2>
      </div>
    )
  }

  return (
    <>
      <div className="animated-bg"></div>
      <div className="top-glow"></div>
      <div className="light-rays"></div>
      <div className="sea-dust"></div>
      <img src={fish1}
      className="cursor-fish" />
      <div className="cursor-trail">
        <span className="trail-bubble tb1"></span>
        <span className="trail-bubble tb2"></span>
        <span className="trail-bubble tb3"></span>
      </div>

      <div className="bubble-layer">
        <span className="bubble b1"></span>
        <span className="bubble b2"></span>
        <span className="bubble b3"></span>
        <span className="bubble b4"></span>
        <span className="bubble b5"></span>
        <span className="bubble b6"></span>
        <span className="bubble b7"></span>
        <span className="bubble b8"></span>
      </div>

      <div className="current-layer">
        <div className="current current-1"></div>
        <div className="current current-2"></div>
        <div className="current current-3"></div>
      </div>

      <div className="plankton-layer">
        {Array.from({ length: 100 }).map((_, i) => (
          <span
            key={i}
            className={`plankton p${i % 20}`}
            style={{
              animationDuration: `${10 + (i % 9)}s`,
              animationDelay: `${(i % 12) * 0.8}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="fish-layer">
        <img src={fish1} alt="fish" className="fish fish-a" />
        <img src={fish2} alt="fish" className="fish fish-b" />
        <img src={fish3} alt="fish" className="fish fish-c" />
        <img src={fish4} alt="fish" className="fish fish-d" />
        <img src={fish2} alt="fish" className="fish fish-e" />
        <img src={fish3} alt="fish" className="fish fish-f" />
      </div>

      <div className="page">
        <Navbar lang={lang} setLang={setLang} content={content} />
        <Hero content={content} />
        <About content={content} />
        <Skills content={content} skills={content.skills} />
        <Projects
          content={content}
          projects={content.projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
        <FAQ
          content={content}
          faqs={content.faqs}
          openFaq={openFaq}
          setOpenFaq={setOpenFaq}
        />
        <Contact content={content} />
        <Footer content={content} />
      </div>
    </>
  )
}

export default App