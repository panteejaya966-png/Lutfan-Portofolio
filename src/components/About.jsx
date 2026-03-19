function About({ content }) {
return (
    <section id="about" className="section fade-up">
    <div className="panel glass">
        <p className="eyebrow">About</p>
        <h2 className="section-title">{content.aboutTitle}</h2>
        <p className="section-text">{content.aboutDesc}</p>

        <div className="about-cards">
        <div className="about-card glass hover-lift">
            <div className="about-icon">🌊</div>   
            <p className="section-text">{content.aboutCard1}</p>
        </div>
        <div className="about-card glass hover-lift">
            <div className="about-icon">🐋</div>   
            <p className="section-text">{content.aboutCard2}</p>
        </div>
        </div>
    </div>
    </section>
)
}

export default About