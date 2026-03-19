function Navbar({ lang, setLang, content }) {
return (
    <header className="header">
    <div className="navbar">
        <div className="brand">
        <div className="brand-icon">
            <img src="/Waves.png" alt="wave" className="brand-logo" />
        </div>
        <div>
            <h2 style={{ margin: 0 }}>{content.brandName}</h2>
            <p className="brand-sub">{content.brandSub}</p>
        </div>
        </div>

        <nav className="nav-menu">
        <a href="#home" className="nav-link">{content.home}</a>
        <a href="#about" className="nav-link">{content.about}</a>
        <a href="#skills" className="nav-link">{content.skillsLabel}</a>
        <a href="#projects" className="nav-link">{content.projectsLabel}</a>
        <a href="#contact" className="nav-link">{content.contactLabel}</a>
        <button
            className="translate-btn hover-lift"
            onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
        >
            {content.translate}
        </button>
        </nav>
    </div>
    </header>
)
}

export default Navbar