function About({ content }) {
return (
    <section id="about" className="section about-animate">
    <div className="panel glass about-panel">
        <p className="eyebrow about-eyebrow">About</p>
        <h2 className="section-title about-title">{content.aboutTitle}</h2>
        <p className="section-text about-desc">{content.aboutDesc}</p>

        <div className="about-cards">
        <div className="about-card glass hover-lift about-card-1">
            <div className="about-icon">🌊</div>
            <p className="section-text">{content.aboutCard1}</p>
        </div>

        <div className="about-card glass hover-lift about-card-2">
            <div className="about-icon">🐋</div>
            <p className="section-text">{content.aboutCard2}</p>
        </div>
        </div>
    </div>
    </section>
)
}

export default About