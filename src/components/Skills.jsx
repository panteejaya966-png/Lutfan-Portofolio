import htmlLogo from '../assets/html.svg'
import cssLogo from '../assets/css.svg'
import jsLogo from '../assets/javascript.svg'
import reactLogo from '../assets/react.svg'

const logos = {
'HTML': htmlLogo,
'CSS': cssLogo,
'JavaScript': jsLogo,
'React.js': reactLogo,
}

function Skills({ content, skills = [] }) {
return (
    <section id="skills" className="section skills-animate">
    <div className="section-center skills-head">
        <p className="eyebrow skills-eyebrow">Skills</p>
        <h2 className="section-title skills-title">{content.skillsTitle}</h2>
    </div>

    <div className="skill-grid">
        {skills
        .filter((item) => logos[item.title])
        .map((item, index) => (
            <div
            key={item.title}
            className="skill-card glass hover-lift skill-reveal"
              style={{ animationDelay: `${0.2 + index * 0.18}s` }}
            >
            <div className="skill-badge">
                <img src={logos[item.title]} alt={item.title} className="skill-icon" />
            </div>

            <h3 style={{ margin: '0 0 10px 0' }}>{item.title}</h3>
            <p className="small-text">{item.desc}</p>
            </div>
        ))}
    </div>
    </section>
)
}

export default Skills