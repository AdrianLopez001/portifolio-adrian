export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.projects": "Projetos",

    // Hero
    "hero.available": "Disponível para oportunidades",
    "hero.role": "Software Engineer",
    "hero.bio": "Estudante de ADS buscando minha primeira oportunidade como",
    "hero.backendJr": "Desenvolvedor Backend Júnior",
    "hero.or": "ou",
    "hero.fullstackJr": "Full-Stack Júnior",
    "hero.bioMiddle": ". Desenvolvo sistemas escaláveis com",
    "hero.bioPython": "e integro inteligência artificial utilizando",
    "hero.bioEnd":
      ". Tenho facilidade com trabalho remoto, aprendo rápido e sou motivado a resolver problemas reais.",
    "hero.downloadCv": "Baixar Currículo",
    "hero.viewProjects": "Ver Projetos",
    "hero.interests": "Interesses:",

    // Skills
    "skill.java.label": "Java & Spring Boot",
    "skill.java.desc": "Microsserviços, Spring AI, JPA, JWT, RabbitMQ",
    "skill.python.label": "Python & AI",
    "skill.python.desc": "RAG, OpenAI API, Machine Learning, SHAP values",
    "skill.data.label": "Dados & Infra",
    "skill.data.desc": "PostgreSQL, pgvector, GitHub Actions",
    "skill.frontend.label": "Frontend & Full-Stack",
    "skill.frontend.desc": "Next.js 15, React, Node.js, JavaScript, HTML/CSS",

    // Interest tags
    "interest.1": "Backend Jr",
    "interest.2": "RAG & LLMs",
    "interest.3": "Microservices",
    "interest.4": "Testes (JUnit/Mockito)",
    "interest.5": "Trabalho Remoto",

    // Projects section
    "projects.label": "Projetos selecionados",
    "projects.title": "{count} sistemas em produção",
    "projects.subtitle":
      "Clique em qualquer card para expandir e ver detalhes técnicos completos.",

    // Project card
    "card.problem": "Problema que resolve",
    "card.contribution": "Minha contribuição",
    "card.stack": "Stack utilizada",
    "card.demo": "Ver Demo",
    "card.code": "Ver Código",

    // Contact
    "contact.label": "Contato",
    "contact.title": "Vamos conversar?",
    "contact.subtitle":
      "Aberto a oportunidades remotas, freelas e projetos técnicos desafiadores.",
    "contact.whatsapp": "💬 Iniciar conversa no WhatsApp",

    // Footer
    "footer.copy": "Adrian Lopes.",

    // CV Dropdown
    "cv.pt": "Português",
    "cv.ptDesc": "Currículo Adrian",
    "cv.en": "English",
    "cv.enDesc": "Currículo Adrian",
    "cv.menuLabel": "Opções de download do currículo",

    // Language toggle
    "lang.toggle": "EN",
    "lang.label": "Switch to English",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",

    // Hero
    "hero.available": "Available for opportunities",
    "hero.role": "Software Engineer",
    "hero.bio": "ADS student seeking my first opportunity as a",
    "hero.backendJr": "Junior Backend Developer",
    "hero.or": "or",
    "hero.fullstackJr": "Junior Full-Stack Developer",
    "hero.bioMiddle": ". I build scalable systems with",
    "hero.bioPython": "and integrate artificial intelligence using",
    "hero.bioEnd":
      ". I adapt well to remote work, learn fast, and am driven to solve real-world problems.",
    "hero.downloadCv": "Download Resume",
    "hero.viewProjects": "View Projects",
    "hero.interests": "Interests:",

    // Skills
    "skill.java.label": "Java & Spring Boot",
    "skill.java.desc": "Microservices, Spring AI, JPA, JWT, RabbitMQ",
    "skill.python.label": "Python & AI",
    "skill.python.desc": "RAG, OpenAI API, Machine Learning, SHAP values",
    "skill.data.label": "Data & Infra",
    "skill.data.desc": "PostgreSQL, pgvector, GitHub Actions",
    "skill.frontend.label": "Frontend & Full-Stack",
    "skill.frontend.desc": "Next.js 15, React, Node.js, JavaScript, HTML/CSS",

    // Interest tags
    "interest.1": "Backend Jr",
    "interest.2": "RAG & LLMs",
    "interest.3": "Microservices",
    "interest.4": "Testing (JUnit/Mockito)",
    "interest.5": "Remote Work",

    // Projects section
    "projects.label": "Selected projects",
    "projects.title": "{count} systems in production",
    "projects.subtitle":
      "Click any card to expand and see full technical details.",

    // Project card
    "card.problem": "Problem it solves",
    "card.contribution": "My contribution",
    "card.stack": "Tech stack",
    "card.demo": "Live Demo",
    "card.code": "Source Code",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's talk?",
    "contact.subtitle":
      "Open to remote opportunities, freelance work, and challenging technical projects.",
    "contact.whatsapp": "💬 Start a WhatsApp conversation",

    // Footer
    "footer.copy": "Adrian Lopes.",

    // CV Dropdown
    "cv.pt": "Português",
    "cv.ptDesc": "Currículo Adrian",
    "cv.en": "English",
    "cv.enDesc": "Currículo Adrian",
    "cv.menuLabel": "Resume download options",

    // Language toggle
    "lang.toggle": "PT",
    "lang.label": "Mudar para Português",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["pt"];
