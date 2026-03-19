import myPhoto from '../assets/foto-saya.jpeg'

function Hero({ content }) {
return (
    <section id="home" className="hero hero-grid fade-up">
    <div className="hero-copy">
        <div className="badge">{content.badge}</div>

        <h1 className="hero-title">
        {content.title1} <br />
        {content.title2} <br />
        <span className="hero-accent">{content.title3}</span>
        </h1>

        <p className="hero-desc">{content.desc}</p>

        <div className="hero-buttons">
        <a href="#projects" className="primary-btn hover-lift">
            {content.btn1}
        </a>
        <a href="#contact" className="secondary-btn hover-lift">
            {content.btn2}
        </a>
        </div>

        <div className="hero-stats">
        <div className="hero-stat glass">
            <span className="hero-stat-number">4+</span>
            <span className="hero-stat-label">Project</span>
        </div>
        <div className="hero-stat glass">
            <span className="hero-stat-number">4</span>
            <span className="hero-stat-label">Tech Stack</span>
        </div>
        <div className="hero-stat glass">
            <span className="hero-stat-number">∞</span>
            <span className="hero-stat-label">Explore</span>
        </div>
        </div>
    </div>

    <div className="hero-visual">
        <div className="avatar-shell glass float-card">
        <div className="avatar-ring"></div>
        <div className="avatar-ring avatar-ring-2"></div>
        <img src={myPhoto} alt="profile" className="avatar" />
        </div>
    </div>
    </section>
)
}

export default Hero