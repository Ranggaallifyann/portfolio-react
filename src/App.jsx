import React, { useState, useEffect } from 'react';

// --- ICONS (SVG Components for better performance and styling) ---
// Using SVGs directly is better than importing libraries in this single-file setup.

const MailIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

const PhoneIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const MapPinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);

const CertificateIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.5 15.5 12 17l1.5-1.5"/><circle cx="12" cy="12" r="3"/></svg>
);


// --- DATA OBJECTS (All your information goes here) ---

const personalInfo = {
    name: "RANGGA ALLIFYAN SYAHPUTRA",
    profilePictureUrl: "/assets/foto-profil.jpg",
    contacts: [
        { icon: <PhoneIcon className="w-4 h-4" />, text: "085880002910", href: "tel:085880002910" },
        { icon: <MailIcon className="w-4 h-4" />, text: "ranggaallifss@gmail.com", href: "mailto:ranggaallifss@gmail.com" },
        { icon: <LinkedinIcon className="w-4 h-4" />, text: "linkedin.com/in/ranggaallifyann", href: "https://www.linkedin.com/in/ranggaallifyann" },
        { icon: <GithubIcon className="w-4 h-4" />, text: "github.com/ranggaallifyann", href: "https://github.com/ranggaallifyann" }
    ],
    location: "Curug - Kabupaten Tangerang, Indonesia",
    bio: "Graduate of Information Systems, Universitas Mercu Buana (GPA 3.48) with strong expertise in IT Support, System Design, Desktop Application Development, Data Analysis, Business Intelligence, and AI. Experienced in developing an ERP application (REMAS) that improved business efficiency by 40%. Skilled in C#, Figma, SQL, Python, and data visualization tools. Recognized for strong leadership, adaptability, and problem-solving skills, with a high commitment to delivering innovative solutions."
};

const education = {
    university: "Universitas Mercu Buana - Jakarta Barat, Indonesia",
    period: "Aug 2021 - Aug 2025",
    degree: "Bachelor of Information System, 3.48/4.00",
    thesis: `"Earthquake Magnitude Prediction Modeling in Indonesia Based on Spatial and Temporal Data Using Random Forest and Neural Networks Algorithms"`
};

const workExperiences = [
    {
        logoUrl: "/assets/logo-umb.png",
        company: "Universitas Mercu Buana",
        role: "Undergraduate Thesis Project",
        period: "Mar 2025 - Aug 2025",
        tasks: [
            "Conducted research on earthquake magnitude prediction using spatial and temporal datasets in Indonesia.",
            "Applied Random Forest and Neural Networks algorithms for predictive modeling.",
            "Preprocessed and analyzed large-scale geospatial data to ensure model accuracy.",
            "Compared algorithm performance using metrics such as RMSE and R² score.",
            "Produced a final thesis and presentation, contributing insights into disaster mitigation using AI."
        ],
        certificateUrl: "#"
    },
    {
        logoUrl: "/assets/logo-british-airways.png",
        company: "British Airways (Forage)",
        role: "Data Science Virtual Intern",
        period: "Jan 2025 - Mar 2025",
        tasks: [
            "Conducted web scraping to extract customer review data for text analysis.",
            "Built a predictive model to analyze purchasing behavior.",
            "Applied data preprocessing and feature engineering to improve model performance.",
            "Visualized insights through data dashboards to support business strategies.",
            "Delivered a comprehensive presentation with data-driven recommendations."
        ],
        certificateUrl: "#"
    },
    {
        logoUrl: "/assets/logo-high-tech.png",
        company: "PT High Tech Ancillaries Indonesia",
        role: "IT Support (MSIB 6)",
        period: "Feb 2024 - Jul 2024",
        tasks: [
            "Configured file & printer sharing, improving network efficiency by 40%.",
            "Performed system installations, boosting stability and speed by 30%.",
            "Strengthened IT security policies and trained staff, reducing risks by 35%.",
            "Provided technical troubleshooting support, minimizing downtime."
        ],
        certificateUrl: "#"
    },
    {
        logoUrl: "/assets/logo-arai-rubber.png",
        company: "PT Arai Rubber Seal Indonesia",
        role: "Information Technology Staff (MSIB 6)",
        period: "Feb 2024 - Jul 2024",
        tasks: [
            "Designed a desktop ERP interface with Figma, improving usability by 30%.",
            "Developed and automated the Sales Module backend, boosting system efficiency by 40%.",
            "Implemented ERP application in Visual Studio (C#), completing 80% of development.",
            "Integrated 90% of REMAS ERP modules, ensuring smooth data flow."
        ],
        certificateUrl: "#"
    }
];

const orgExperiences = [
    {
        logoUrl: "/assets/logo-himsisfo.png",
        company: "HIMSISFO FAKULTAS ILMU KOMPUTER UMB",
        role: "Daily Management Board (BPH) – Treasurer",
        period: "Jan 2023 - Jul 2023",
        tasks: [
            "Planned and allocated the annual budget, ensuring 95% budget efficiency.",
            "Recorded and tracked income & expenses, reducing financial discrepancies by 30%.",
            "Generated monthly financial reports, improving transparency and accountability by 40%."
        ],
        certificateUrl: "#"
    },
    {
        logoUrl: "/assets/logo-himsisfo.png",
        company: "HIMSISFO FAKULTAS ILMU KOMPUTER UMB",
        role: "Staff of Infrastructure and Facilities Division",
        period: "Present",
        tasks: [
            "Coordinated facilities and infrastructure support, ensuring 90% operational efficiency.",
            "Planned and managed infrastructure for events, contributing to a 95% successful execution rate.",
            "Collaborated with the team to maintain facilities, reducing maintenance disruptions by 40%."
        ],
        certificateUrl: "#"
    }
];

const projects = [
    {
        imageUrl: "/assets/proyek-erp-remas.jpg",
        title: "Desktop ERP Application (REMAS)",
        description: "Developed a comprehensive ERP system for PT Arai Rubber Seal Indonesia, integrating multiple departments including Sales, Production, and Finance. Built with C# and Visual Studio.",
        githubUrl: "#",
        resultUrl: "#"
    },
    {
        imageUrl: "/assets/proyek-prediksi-gempa.jpg",
        title: "Earthquake Prediction Model",
        description: "A machine learning model to predict earthquake magnitudes in Indonesia using Random Forest and Neural Networks. The project involved heavy data preprocessing and spatial analysis.",
        githubUrl: "#",
        resultUrl: "#"
    },
    {
        imageUrl: "/assets/proyek-analisis-ba.jpg",
        title: "British Airways Customer Review Analysis",
        description: "A data science project involving web scraping and predictive modeling to derive insights from customer reviews and improve overall customer experience and business strategies.",
        githubUrl: "#",
        resultUrl: "#"
    }
];

const hardSkills = [
  { 
    name: "Microsoft Word", 
    logo: "https://img.icons8.com/color/48/000000/word.png", 
    link: "https://www.microsoft.com/en-us/microsoft-365/word" 
  },
  { 
    name: "Microsoft Excel", 
    logo: "https://img.icons8.com/color/48/000000/ms-excel.png", 
    link: "https://www.microsoft.com/en-us/microsoft-365/excel" 
  },
  { 
    name: "Microsoft PowerPoint", 
    logo: "https://img.icons8.com/color/48/000000/powerpoint.png", 
    link: "https://www.microsoft.com/en-us/microsoft-365/powerpoint" 
  },
  { 
    name: "SQL (MySQL, PostgreSQL)", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", 
    link: "https://www.mysql.com/" 
  },
  { 
    name: "Python (Pandas, NumPy, Scikit-learn & ML/AI)", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", 
    link: "https://www.python.org/" 
  },
  { 
    name: "Power BI", 
    logo: "https://img.icons8.com/color/48/000000/power-bi.png", 
    link: "https://powerbi.microsoft.com/" 
  },
  { 
    name: "Looker Studio", 
    logo: "https://img.icons8.com/color/48/000000/google-data-studio.png", 
    link: "https://lookerstudio.google.com/" 
  },
  { 
    name: "Google Colaboratory", 
    logo: "https://img.icons8.com/color/48/000000/google-colab.png", 
    link: "https://colab.research.google.com/" 
  },
  { 
    name: "Visual Studio", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-plain.svg", 
    link: "https://visualstudio.microsoft.com/" 
  },
  { 
    name: "VS Code", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", 
    link: "https://code.visualstudio.com/" 
  },
  { 
    name: "Matplotlib & Seaborn (Data Visualization)", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", 
    link: "https://matplotlib.org/ https://seaborn.pydata.org/" 
  },
  { 
    name: "ERP & System Development (C#)", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", 
    link: "https://dotnet.microsoft.com/en-us/apps/desktop" 
  },
  { 
    name: "Figma", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", 
    link: "https://www.figma.com/" 
  },
  { 
    name: "Microsoft Visio", 
    logo: "https://img.icons8.com/color/48/000000/visio.png", 
    link: "https://www.microsoft.com/en-us/microsoft-365/visio" 
  }
];


const softSkills = [
    "Creative & Critical Thinking", "Problem Solving", "Teamwork & Collaboration", 
    "Communication", "Leadership", "Adaptability", "Time Management", "Work Under Pressure"
];

const certifications = [
    { logoUrl: "/assets/sertifikat-business-analyst.jpg", name: "Business Analyst Certification", issuer: "Udemy", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-data-science.jpg", name: "Data Science Mastery", issuer: "Udemy", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-dsa.jpg", name: "Data Structures & Algorithms", issuer: "Udemy", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-forage-ba.jpg", name: "Data Science Job Simulation", issuer: "Forage", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-aws.jpg", name: "AWS Cloud Practitioner", issuer: "Dicoding", year: "2024", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-business-analyst.jpg", name: "Business Analyst Certification", issuer: "Udemy", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-data-science.jpg", name: "Data Science Mastery", issuer: "Udemy", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-dsa.jpg", name: "Data Structures & Algorithms", issuer: "Udemy", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-forage-ba.jpg", name: "Data Science Job Simulation", issuer: "Forage", year: "2025", url: "#" },
    { logoUrl: "/assets/sertifikat-aws.jpg", name: "AWS Cloud Practitioner", issuer: "Dicoding", year: "2024", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
    { logoUrl: "/assets/sertifikat-oracle-sql.jpg", name: "Database Design & SQL", issuer: "Oracle", year: "2023", url: "#" },
];

const quote = {
    text: "The beautiful thing about learning is that nobody can take it away from you.",
    author: "B.B. King"
};


// --- REUSABLE COMPONENTS ---

const Section = ({ title, children, id }) => (
    <section id={id} className="mb-16 md:mb-24 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block">
            {title}
            <span className="absolute bottom-[-8px] left-0 w-1/2 h-1 bg-black"></span>
        </h2>
        {children}
    </section>
);

const ExperienceCard = ({ logoUrl, company, role, period, tasks, certificateUrl }) => (
    <div className="flex gap-6 mb-8 p-4 border border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-black">
        <div className="hidden sm:block">
            {/* --- UBAH BARIS INI --- */}
            <img src={logoUrl} alt={`${company} logo`} className="w-16 h-16 rounded-lg object-contain" />
        </div>
        <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <div>
                    <h3 className="text-xl font-bold">{role}</h3>
                    <p className="">{company}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1 sm:mt-0">{period}</p>
            </div>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-4">
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
            {certificateUrl && certificateUrl !== "#" && (
                <a 
                    href={certificateUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-black bg-white border border-gray-300 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                >
                    <CertificateIcon className="w-4 h-4" />
                    View Certificate
                </a>
            )}
        </div>
    </div>
);

const ProjectCard = ({ imageUrl, title, description, githubUrl, resultUrl }) => (
    <div className="border border-gray-200 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-black flex flex-col">
        <div className="aspect-video w-full bg-gray-100 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <div className="flex gap-4 mt-auto">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold text-black bg-white border border-gray-300 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-black hover:text-white">
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                </a>
                <a href={resultUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-black border border-black px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black">
                    <ExternalLinkIcon className="w-4 h-4" />
                    Result
                </a>
            </div>
        </div>
    </div>
);

const CertificateCard = ({ logoUrl, name, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-black hover:-translate-y-1">
        <div className="aspect-video bg-gray-100">
             <img src={logoUrl} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4 bg-white">
            <h4 className="font-bold text-base leading-tight truncate text-center">{name}</h4>
        </div>
    </a>
);


// --- MAIN APP COMPONENT ---

export default function App() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl w-full mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-10 md:p-16">

                {/* --- HEADER / HERO SECTION --- */}
                <header className="flex flex-col md:flex-row items-center justify-center md:gap-10 mb-16">
                     <img 
                        src={personalInfo.profilePictureUrl} 
                        alt="Rangga Allifyan Syahputra" 
                        className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mb-6 md:mb-0"
                    />
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{personalInfo.name}</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mb-4">
                            <MapPinIcon className="w-5 h-5" />
                            <span>{personalInfo.location}</span>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                            {personalInfo.contacts.map((contact, index) => (
                                <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors">
                                    {contact.icon}
                                    <span>{contact.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </header>

                {/* --- ABOUT ME & EDUCATION --- */}
                 <section className="mb-16 grid md:grid-cols-5 gap-8">
                      <div className="md:col-span-3">
                          <h2 className="text-2xl font-bold mb-4">About Me</h2>
                          <p className="text-gray-600">{personalInfo.bio}</p>
                      </div>
                      <div className="md:col-span-2 bg-gray-50 p-6 rounded-xl border border-gray-200">
                          <h2 className="text-2xl font-bold mb-4">Education</h2>
                          <h3 className="font-bold">{education.university}</h3>
                          <p className="text-sm text-gray-500">{education.period}</p>
                          <p className="text-gray-700 mt-1">{education.degree}</p>
                          <p className="text-sm text-gray-600 mt-2 italic"><strong>Thesis:</strong> {education.thesis}</p>
                      </div>
                 </section>

                {/* --- WORK EXPERIENCE --- */}
                <Section title="Work Experience" id="work">
                    {workExperiences.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
                </Section>

                {/* --- PROJECTS --- */}
                <Section title="Projects" id="projects">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((proj, index) => <ProjectCard key={index} {...proj} />)}
                    </div>
                </Section>
                
                 {/* --- SKILLS --- */}
                <Section title="Core Skills" id="skills">
                    <div className="mb-8">
                        <h3 className="text-lg font-bold mb-4">Hard Skills & Tools</h3>
                        <div className="relative w-full overflow-hidden bg-white py-4">
                            <div className="animate-marquee whitespace-nowrap flex gap-12">
                                {hardSkills.concat(hardSkills).map((skill, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center gap-2">
                                        <img src={skill.logo} alt={skill.name} className="h-12 w-12 object-contain"/>
                                        <span className="text-xs text-gray-600">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {softSkills.map((skill, index) => (
                                <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full border border-gray-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- ORGANIZATIONAL EXPERIENCE --- */}
                <Section title="Organizational Experience" id="organization">
                     {orgExperiences.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
                </Section>

                {/* --- CERTIFICATIONS --- */}
                <Section title="Licenses & Certifications" id="certs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => <CertificateCard key={index} {...cert} />)}
                    </div>
                </Section>

                {/* --- QUOTE --- */}
                <section className="text-center my-24">
                    <blockquote className="text-2xl italic text-gray-700">“{quote.text}”</blockquote>
                    <cite className="block text-gray-500 mt-4 not-italic">— {quote.author}</cite>
                </section>

                {/* --- CONTACT --- */}
                <Section title="Get In Touch" id="contact">
                    <p className="text-gray-600 mb-6">
                        I'm currently seeking new opportunities and am open to collaboration. Feel free to reach out via email or connect with me on LinkedIn.
                    </p>
                    <a href={personalInfo.contacts[1].href} className="inline-block text-lg font-semibold text-white bg-black px-8 py-4 rounded-lg transition-transform duration-300 hover:scale-105">
                        Say Hello
                    </a>
                </Section>

                <footer className="text-center text-sm text-gray-400 mt-20 py-6 border-t border-gray-200">
                    <p>&copy; {new Date().getFullYear()} Rangga Allifyan Syahputra. Bismillah Offering.</p>
                </footer>

                 {/* --- This is needed for the marquee animation --- */}
                <style>{`
                      @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                      }
                      .animate-marquee {
                        animation: marquee 30s linear infinite;
                      }
                `}</style>
            </div>
        </div>
    );
}