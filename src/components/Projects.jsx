function Projects({ content, projects, activeProject, setActiveProject }) {
return (
    <section id="projects" className="section fade-up">
    <div className="section-center">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">{content.projectsTitle}</h2>
    </div>

    <div className="project-hero projects-grid">
        <div className="project-image-card glass hover-lift">
        <img
            src={projects[activeProject].image}
            alt={projects[activeProject].title}
            className="project-image"
        />
        </div>

        <div className="project-info-card glass">
        <p className="project-tag">{content.projectTag}</p>
        <h3 className="project-title">{projects[activeProject].title}</h3>
        <p className="section-text">{projects[activeProject].desc}</p>

        <div className="project-actions">
            <button
            className="arrow-btn hover-lift"
            onClick={() =>
                setActiveProject(activeProject === 0 ? projects.length - 1 : activeProject - 1)
            }
            >
            ←
            </button>
            <button
            className="arrow-btn hover-lift"
            onClick={() =>
                setActiveProject(activeProject === projects.length - 1 ? 0 : activeProject + 1)
            }
            >
            →
            </button>
        </div>
        </div>
    </div>

    <div className="project-list">
        {projects.map((item, index) => (
        <button
            key={item.title}
            onClick={() => setActiveProject(index)}
            className={`project-mini glass hover-lift ${activeProject === index ? 'active-project' : ''}`}
        >
            <h4 style={{ margin: '0 0 8px 0' }}>{item.title}</h4>
            <p className="small-text">{item.desc}</p>
        </button>
        ))}
    </div>
    </section>
)
}

export default Projects