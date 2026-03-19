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