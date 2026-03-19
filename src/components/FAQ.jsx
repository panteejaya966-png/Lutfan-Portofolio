function FAQ({ content, faqs, openFaq, setOpenFaq }) {
return (
    <section className="section fade-up">
    <div className="panel glass">
        <div className="section-center">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">{content.faqTitle}</h2>
        </div>

        <div className="faq-wrap">
        {faqs.map((item, index) => (
            <div key={index} className="faq-item glass-soft">
            <button
                className="faq-button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
                <span>{item.q}</span>
                <span className="faq-symbol">{openFaq === index ? '−' : '+'}</span>
            </button>

            {openFaq === index && (
                <div className="faq-answer">
                <p style={{ margin: 0, color: '#dbeafe', lineHeight: 1.8 }}>{item.a}</p>
                </div>
            )}
            </div>
        ))}
        </div>
    </div>
    </section>
)
}

export default FAQ