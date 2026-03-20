export function getPortfolioContent(lang) {
const copy = {
    id: {
    home: 'Beranda',
    about: 'Tentang',
    skillsLabel: 'Keahlian',
    projectsLabel: 'Proyek',
    contactLabel: 'Kontak',
    translate: 'EN',
    loading: 'Menyelam ...',
    brandName: 'Muhammad Lutfan',
    brandSub: ' My Portfolio',
    badge: 'Creative Frontend',
    title1: 'Belajar dan Berkembang',
    title2: 'di Dunia',
    title3: 'Web',
    desc:
        'Saya sedang mengembangkan kemampuan dalam membuat website modern dengan React, dengan fokus pada desain yang sederhana dan nyaman digunakan',
    btn1: 'Lihat Proyek',
    btn2: 'Hubungi Saya',
    aboutTitle: 'Tentang Saya',
    aboutDesc:
        'Saya tertarik pada frontend development dan suka membuat tampilan yang tidak hanya rapi, tetapi juga punya identitas visual kuat.',
    aboutCard1:
    'Saya tertarik pada frontend development dan senang membuat tampilan web yang rapi dan proyek yang sudah saya kerjakan.',
    aboutCard2:
    'Website ini saya buat sebagai portofolio untuk menampilkan hasil belajar dan proyek yang sudah saya kerjakan',
    skillsTitle: 'Keahlian',
skills: [
{
    title: 'HTML',
    desc: 'Digunakan sebagai struktur dasar dalam membangun halaman web.',
},
{
    title: 'CSS',
    desc: 'Digunakan untuk mengatur tampilan dan layout agar lebih menarik dan responsif.',
},
{
    title: 'JavaScript',
    desc: 'Digunakan untuk menambahkan interaksi dan logika pada website.',
},
{
    title: 'React.js',
    desc: 'Digunakan untuk membangun tampilan web modern berbasis komponen.',
},
],
    projectsTitle: 'Proyek & Karya',
    projectTag: 'Proyek Pilihan',
    faqTitle: 'Pertanyaan Umum',
    contactTitle: 'Hubungi Saya',
    contactDesc: 'Terbuka untuk kolaborasi, freelance, atau diskusi project website.',
    direct: 'Kontak Langsung',
    send: 'Kirim Email',
    footer: 'Dibuat dengan React.js.',
    },
    en: {
    home: 'Home',
    about: 'About',
    skillsLabel: 'Skills',
    projectsLabel: 'Projects',
    contactLabel: 'Contact',
    translate: 'ID',
    loading: ' Diving... ',
    brandName: 'Muhammad Lutfan',
    brandSub: 'My Portofolio',
    badge: 'Creative Frontend',
    title1: 'Learning and Growing',
    title2: 'in the World of',
    title3: 'Frontend Web',
    desc:
        'I am currently improving my skills in building modern websites using React, focusing on clean, simple, and user-friendly design.',
    btn1: 'View Projects',
    btn2: 'Contact Me',
    aboutTitle: 'About Me',
    aboutDesc:
        'I am interested in frontend development and enjoy creating interfaces that are not only clean, but also visually memorable.',
    aboutCard1:
    'I am interested in frontend development and enjoy creating clean, simple, and user-friendly web interfaces.',
    aboutCard2:
    'This website is built as a portofolio to showcase my learning progress and projects i have worked on.',

    skillsTitle: 'Skills',
skills: [
{
    title: 'HTML',
    desc: 'Used as the basic structure for building web pages.',
},
{
    title: 'CSS',
    desc: 'Used to style and layout web pages to make them more attractive and responsive.',
},
{
    title: 'JavaScript',
    desc: 'Used to add interactivity and logic to websites.',
},
{
    title: 'React.js',
    desc: 'Used to build modern web interfaces with a component-based approach.',
},
],
    projectsTitle: 'Projects & Works',
    projectTag: 'Featured Project',
    faqTitle: 'FAQ',
    contactTitle: 'Contact Me',
    contactDesc: 'Open for collaboration, freelance work, or website project discussions.',
    direct: 'Direct Contact',
    send: 'Send Email',
    footer: 'Built with React.js and inspired by the ocean.',
    },
}

const t = copy[lang]

return {
    ...t,
    projects: [
    {
        title: 'Ocean Portfolio',
        desc:
        lang === 'id'
            ? 'Portofolio personal dengan hero visual dramatis dan nuansa laut dalam.'
            : 'A personal portfolio with dramatic hero visuals and deep ocean vibes.',
        image:
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Blue Wave Landing Page',
        desc:
        lang === 'id'
            ? 'Landing page dengan efek cahaya air dan CTA elegan.'
            : 'A landing page with water-light effects and elegant CTA.',
        image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    },
    {
        title: 'Marine Dashboard',
        desc:
        lang === 'id'
            ? 'Dashboard visual dengan nuansa futuristik dan panel kaca.'
            : 'A visual dashboard with futuristic mood and glass panels.',
        image:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=80',
    },
    ],
    faqs: [
    {
        q: lang === 'id' ? 'Apakah desain ini responsif?' : 'Is this design responsive?',
        a:
        lang === 'id'
            ? 'Ya, tampilannya menyesuaikan desktop, tablet, dan mobile.'
            : 'Yes, the layout adapts to desktop, tablet, and mobile.',
    },
    {
        q: lang === 'id' ? 'Apakah datanya bisa diganti?' : 'Can the content be changed?',
        a:
        lang === 'id'
            ? 'Bisa. Ganti nama, foto, kontak, skill, dan proyek sesuai datamu.'
            : 'Yes. Replace the name, image, contact info, skills, and projects with your own data.',
    },
    {
        q: lang === 'id' ? 'Apakah cocok untuk tugas?' : 'Is it suitable for assignments?',
        a:
        lang === 'id'
            ? 'Cocok, karena tampilannya kuat secara visual dan tetap mudah dipahami.'
            : 'Yes, because it looks visually strong while staying easy to understand.',
    },
    ],
}
}