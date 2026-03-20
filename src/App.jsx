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

  // loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // title + favicon
  useEffect(() => {
    document.title = 'Muhammad Lutfan | Portfolio'

    const favicon =
      document.querySelector("link[rel='icon']") || document.createElement('link')

    favicon.rel = 'icon'
    favicon.href = '/Waves.png'
    document.head.appendChild(favicon)
  }, [])

  // animasi scroll
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

  // mouse parallax
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
  const dot = document.querySelector('.cursor-dot')
  const ring = document.querySelector('.cursor-ring')

  if (!dot || !ring) return

  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0
  let animationFrameId

  const moveCursor = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  }

  const animate = () => {
    ringX += (mouseX - ringX) * 0.1
    ringY += (mouseY - ringY) * 0.1

    dot.style.left = `${mouseX}px`
    dot.style.top = `${mouseY}px`

    ring.style.left = `${ringX}px`
    ring.style.top = `${ringY}px`

    animationFrameId = requestAnimationFrame(animate)
  }

  window.addEventListener('mousemove', moveCursor)
  animationFrameId = requestAnimationFrame(animate)

  return () => {
    window.removeEventListener('mousemove', moveCursor)
    cancelAnimationFrame(animationFrameId)
  }
}, [])

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
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

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