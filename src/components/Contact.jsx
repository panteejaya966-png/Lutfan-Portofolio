import { MdEmail } from 'react-icons/md'
import {FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa'

function Contact({ content }) {
return (
    <section id="contact" className="section fade-up">
    <div className="contact-grid projects-grid">
        <div className="contact-card glass hover-lift">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">{content.contactTitle}</h2>
        <p className="section-text">{content.contactDesc}</p>
        <a
            href="mailto:panteejaya966@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="primary-btn hover-lift"
        >
            {content.send}
        </a>
        </div>

        <div className="contact-card glass hover-lift">
<h3 style={{ marginTop: 0, marginBottom: 16 }}>{content.direct}</h3>

<p className="contact-line">
    <MdEmail className="contact-icon" />
    panteejaya966@gmail.com
</p>

<p className="contact-line">
    <FaWhatsapp className="contact-icon" />
    +62 85296-2736
</p>

<p className="contact-line">
    <FaInstagram className="contact-icon" />
    @muhammadlutfan_
</p>

<p className="contact-line">
    <FaGithub className="contact-icon" />
    github.com/usernamekamu
</p>
</div>
    </div>
    </section>
)
}

export default Contact