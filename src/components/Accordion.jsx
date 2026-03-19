import { useState } from 'react'

function Accordion({ language }) {
const [openIndex, setOpenIndex] = useState(null)

const items = [
    {
    question: language === 'id' ? 'Apakah website ini responsif?' : 'Is this website responsive?',
    answer: language === 'id' ? 'Ya, website ini dibuat agar bisa dibuka di berbagai ukuran layar.' : 'Yes, this website is built to work on multiple screen sizes.'
    },
    {
    question: language === 'id' ? 'Apakah bisa ganti data?' : 'Can I change the content?',
    answer: language === 'id' ? 'Bisa, semua data bisa diganti sesuai profil kamu.' : 'Yes, all content can be changed to match your profile.'
    }
]

return (
    <section className="section">
    <h2 className="title">FAQ</h2>

    {items.map((item, index) => (
        <div key={index} className="card" style={{ marginBottom: '15px' }}>
        <div
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
        >
            <h3>{item.question}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
        </div>

        {openIndex === index && (
            <p style={{ marginTop: '15px', color: '#cbd5e1' }}>{item.answer}</p>
        )}
        </div>
    ))}
    </section>
)
}

export default Accordion