export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.available": "Disponível para oportunidades (Remoto / Híbrido)",
    "hero.role": "Desenvolvedor Fullstack",
    "hero.subrole": "Java 21 · Spring Boot · React · TypeScript · Next.js · IA & Automação · Python",
    "hero.description": "Desenvolvedor Fullstack com 2 anos de prática em desenvolvimento de software. Atua na construção de aplicações de ponta a ponta. Experiência prática na criação de ERPs, APIs RESTful, modelagem de bancos relacionais (PostgreSQL) e integração de serviços de IA/automação.",
    "hero.viewCv": "Visualizar Currículo",
    "hero.downloadCv": "Baixar Currículo",
    "hero.viewProjects": "Ver Projetos",
    "hero.interests": "Interesses:",

    // Stats
    "stat.experience": "2 Anos",
    "stat.experienceSub": "de Prática em Software",
    "stat.projects": "7 Projetos",
    "stat.projectsSub": "de Destaque no GitHub",
    "stat.cert": "Oracle Certified",
    "stat.certSub": "Java Foundations",

    // Skill labels
    "skill.java.label": "Java 21 & Spring Boot",
    "skill.python.label": "React, TypeScript & Next.js",
    "skill.data.label": "PostgreSQL, H2 & pgvector",
    "skill.frontend.label": "IA, RAG, MCP & Agentes",
    "skill.backend.label": "Docker, AWS & DevOps",
    "skill.java.desc": "APIs REST, Spring Security, JPA",
    "skill.python.desc": "Interfaces reativas & dashboards",
    "skill.data.desc": "Bancos relacionais & busca vetorial",
    "skill.frontend.desc": "n8n, Evolution API, Claude Vision",
    "skill.backend.desc": "AWS EC2, Linux VPS, Git",

    // Skills Section
    "skills.sectionLabel": "Competências Técnicas",
    "skills.title": "Tecnologias & Arquitetura",
    "skills.subtitle": "Domínio técnico consolidado no desenvolvimento de software de ponta a ponta.",
    
    "skills.backendTitle": "Linguagens & Frameworks",
    "skills.backendDesc": "Java 21, Spring Boot, React, TypeScript, Next.js, HTML5/CSS, Chart.js, Python",
    
    "skills.frontendTitle": "Interface & Dashboards",
    "skills.frontendDesc": "React, TypeScript, Next.js, Chart.js, HTML5, CSS3, Tailwind CSS",
    
    "skills.dbTitle": "Banco de Dados",
    "skills.dbDesc": "PostgreSQL, H2, pgvector",
    
    "skills.aiTitle": "IA & Automação",
    "skills.aiDesc": "LLMs, RAG, MCP, Agentes/Bots, n8n, Evolution API, Claude Vision API",
    
    "skills.infraTitle": "Infraestrutura & DevOps",
    "skills.infraDesc": "Docker, AWS (EC2), Linux VPS, Git",

    // Experience & Education Section
    "exp.sectionLabel": "Trajetória Profissional",
    "exp.title": "Experiência & Formação",
    "exp.subtitle": "Atuação prática no desenvolvimento de aplicações de ponta a ponta, ERPs com IA e sistemas corporativos.",

    "exp.coreSystem.role": "Cofundador & Desenvolvedor Fullstack",
    "exp.coreSystem.company": "Core System",
    "exp.coreSystem.period": "2023 – Atual · Natal, RN",
    "exp.coreSystem.desc1": "Desenvolvimento do Controll-All ERP v2.0 (cliente JC Eventos), cobrindo 11 módulos operacionais.",
    "exp.coreSystem.desc2": "Construção de APIs REST com Java 21 + Spring Boot e interface web em React/TypeScript.",
    "exp.coreSystem.desc3": "Definição de requisitos (PRD), arquitetura das rotas e banco de dados, além de elaboração de propostas comerciais.",

    "exp.cartec.role": "Desenvolvedor Fullstack / Sistemas Internos",
    "exp.cartec.company": "Cartec",
    "exp.cartec.period": "Atual · Natal, RN",
    "exp.cartec.desc1": "Otimização de rotinas operacionais através de dashboards dinâmicos (Chart.js) e automação de relatórios PDF, reduzindo gargalos na geração manual de dados.",
    "exp.cartec.desc2": "Estruturação de código backend em Spring Boot e integração com banco de dados relacional.",
    "exp.cartec.desc3": "Implementação de soluções e integrações para automação e melhoria contínua de processos operacionais.",

    "edu.title": "Formação & Certificações",
    "edu.ads.title": "Análise e Desenvolvimento de Sistemas",
    "edu.ads.inst": "UNINASSAU (Cursando 2º Período)",
    "edu.oracle.title": "Oracle Java Foundations",
    "edu.oracle.inst": "Oracle Certified (Concluído)",
    "edu.hackathon.title": "Hackathon do Sol 2026",
    "edu.hackathon.inst": "Projeto DunasTech (Mapa 3D em Natal/RN)",
    "edu.lang.title": "Idiomas",
    "edu.lang.inst": "Português (Nativo) | Inglês (Intermediário)",

    // Interest tags
    "interest.1": "Fullstack Java & React",
    "interest.2": "Spring Boot & APIs REST",
    "interest.3": "IA & Automação (RAG/MCP)",
    "interest.4": "PostgreSQL & pgvector",
    "interest.5": "Docker & Cloud AWS",

    // Projects section & Filters
    "projects.label": "Portfólio de Projetos",
    "projects.title": "{count} projetos de destaque",
    "projects.subtitle": "Repositórios públicos verificados no GitHub com código-fonte, arquitetura ponta a ponta e integrações.",
    
    "filter.all": "Todos",
    "filter.fullstack": "Fullstack",
    "filter.java": "Java / Spring Boot",
    "filter.ai": "IA & Automação",
    "filter.python": "Python",
    "filter.frontend": "Frontend / Web",
    
    "search.placeholder": "Buscar por projeto, tecnologia ou palavra-chave...",
    "search.empty": "Nenhum projeto encontrado para esta busca.",

    // Project card
    "card.problem": "Problema que resolve",
    "card.contribution": "Minha contribuição",
    "card.stack": "Stack utilizada",
    "card.demo": "Ver Demo / Projeto",
    "card.code": "Ver Código no GitHub",

    // Contact
    "contact.label": "Contato",
    "contact.title": "Vamos conversar?",
    "contact.subtitle": "Aberto a oportunidades de desenvolvimento de software (remotas/híbridas), projetos fullstack e engenharia de backend.",
    "contact.whatsapp": "💬 Iniciar conversa no WhatsApp",

    // Footer
    "footer.copy": "Adrian Lopes — Desenvolvedor Fullstack.",

    // CV Modal & Dropdown
    "cv.title": "Currículo — Adrian Lopes",
    "cv.pt": "Português",
    "cv.ptDesc": "Currículo Completo (PDF)",
    "cv.en": "English",
    "cv.enDesc": "Full Resume (PDF)",
    "cv.menuLabel": "Opções de currículo",
    "cv.viewModal": "Visualizar na Tela",
    "cv.viewModalDesc": "Abre o currículo interativo com abas PT/EN",
    "cv.print": "Imprimir / PDF",
    "cv.close": "Fechar",

    // Language toggle
    "lang.toggle": "EN",
    "lang.label": "Switch to English",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.available": "Available for opportunities (Remote / Hybrid)",
    "hero.role": "Fullstack Developer",
    "hero.subrole": "Java 21 · Spring Boot · React · TypeScript · Next.js · AI & Automation · Python",
    "hero.description": "Fullstack Developer with 2 years of software engineering practice. Specializes in building end-to-end applications, ERPs, RESTful APIs, relational database modeling (PostgreSQL), and AI/automation service integrations.",
    "hero.viewCv": "View Resume",
    "hero.downloadCv": "Download Resume",
    "hero.viewProjects": "View Projects",
    "hero.interests": "Interests:",

    // Stats
    "stat.experience": "2 Years",
    "stat.experienceSub": "Software Practice",
    "stat.projects": "7 Projects",
    "stat.projectsSub": "Featured on GitHub",
    "stat.cert": "Oracle Certified",
    "stat.certSub": "Java Foundations",

    // Skill labels
    "skill.java.label": "Java 21 & Spring Boot",
    "skill.python.label": "React, TypeScript & Next.js",
    "skill.data.label": "PostgreSQL, H2 & pgvector",
    "skill.frontend.label": "AI, RAG, MCP & Agents",
    "skill.backend.label": "Docker, AWS & DevOps",
    "skill.java.desc": "REST APIs, Spring Security, JPA",
    "skill.python.desc": "Reactive interfaces & dashboards",
    "skill.data.desc": "Relational DBs & vector search",
    "skill.frontend.desc": "n8n, Evolution API, Claude Vision",
    "skill.backend.desc": "AWS EC2, Linux VPS, Git",

    // Skills Section
    "skills.sectionLabel": "Technical Competencies",
    "skills.title": "Technologies & Architecture",
    "skills.subtitle": "Consolidated technical expertise in end-to-end software development.",

    "skills.backendTitle": "Languages & Frameworks",
    "skills.backendDesc": "Java 21, Spring Boot, React, TypeScript, Next.js, HTML5/CSS, Chart.js, Python",

    "skills.frontendTitle": "Interface & Dashboards",
    "skills.frontendDesc": "React, TypeScript, Next.js, Chart.js, HTML5, CSS3, Tailwind CSS",

    "skills.dbTitle": "Databases",
    "skills.dbDesc": "PostgreSQL, H2, pgvector",

    "skills.aiTitle": "AI & Automation",
    "skills.aiDesc": "LLMs, RAG, MCP, Agents/Bots, n8n, Evolution API, Claude Vision API",

    "skills.infraTitle": "Infrastructure & DevOps",
    "skills.infraDesc": "Docker, AWS (EC2), Linux VPS, Git",

    // Experience & Education Section
    "exp.sectionLabel": "Career Roadmap",
    "exp.title": "Experience & Education",
    "exp.subtitle": "Hands-on experience building end-to-end applications, AI ERPs, and enterprise systems.",

    "exp.coreSystem.role": "Co-founder & Fullstack Developer",
    "exp.coreSystem.company": "Core System",
    "exp.coreSystem.period": "2023 – Present · Natal, RN, Brazil",
    "exp.coreSystem.desc1": "Development of Controll-All ERP v2.0 (client JC Eventos), covering 11 operational modules.",
    "exp.coreSystem.desc2": "Engineered REST APIs with Java 21 + Spring Boot and web interface in React/TypeScript.",
    "exp.coreSystem.desc3": "Definition of product requirements (PRD), API route architecture, database modeling, and commercial proposals.",

    "exp.cartec.role": "Fullstack Developer / Internal Systems",
    "exp.cartec.company": "Cartec",
    "exp.cartec.period": "Present · Natal, RN, Brazil",
    "exp.cartec.desc1": "Optimization of operational routines through dynamic dashboards (Chart.js) and PDF report automation, reducing manual data bottlenecks.",
    "exp.cartec.desc2": "Structuring backend codebase in Spring Boot and integration with relational databases.",
    "exp.cartec.desc3": "Implementation of solutions and integrations for automation and continuous process improvement.",

    "edu.title": "Education & Certifications",
    "edu.ads.title": "Systems Analysis and Development",
    "edu.ads.inst": "UNINASSAU (In Progress — 2nd Semester)",
    "edu.oracle.title": "Oracle Java Foundations",
    "edu.oracle.inst": "Oracle Certified (Completed)",
    "edu.hackathon.title": "Hackathon do Sol 2026",
    "edu.hackathon.inst": "DunasTech Project (3D Map in Natal/RN)",
    "edu.lang.title": "Languages",
    "edu.lang.inst": "Portuguese (Native) | English (Intermediate)",

    // Interest tags
    "interest.1": "Fullstack Java & React",
    "interest.2": "Spring Boot & REST APIs",
    "interest.3": "AI & Automation (RAG/MCP)",
    "interest.4": "PostgreSQL & pgvector",
    "interest.5": "Docker & AWS Cloud",

    // Projects section & Filters
    "projects.label": "Projects Portfolio",
    "projects.title": "{count} featured projects",
    "projects.subtitle": "Verified public repositories on GitHub with source code, end-to-end architecture, and integrations.",

    "filter.all": "All",
    "filter.fullstack": "Fullstack",
    "filter.java": "Java / Spring Boot",
    "filter.ai": "AI & Automation",
    "filter.python": "Python",
    "filter.frontend": "Frontend / Web",

    "search.placeholder": "Search by project name, tech stack, or keyword...",
    "search.empty": "No projects match your current search filter.",

    // Project card
    "card.problem": "Problem it solves",
    "card.contribution": "My contribution",
    "card.stack": "Tech stack",
    "card.demo": "View Live Demo",
    "card.code": "View GitHub Code",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's talk?",
    "contact.subtitle": "Open to software engineering opportunities (remote/hybrid), fullstack projects, and backend engineering.",
    "contact.whatsapp": "💬 Start a WhatsApp conversation",

    // Footer
    "footer.copy": "Adrian Lopes — Fullstack Developer.",

    // CV Modal & Dropdown
    "cv.title": "Resume — Adrian Lopes",
    "cv.pt": "Portuguese",
    "cv.ptDesc": "Full Resume (PDF)",
    "cv.en": "English",
    "cv.enDesc": "Full Resume (PDF)",
    "cv.menuLabel": "Resume options",
    "cv.viewModal": "View on Screen",
    "cv.viewModalDesc": "Open interactive resume with PT/EN tabs",
    "cv.print": "Print / PDF",
    "cv.close": "Close",

    // Language toggle
    "lang.toggle": "PT",
    "lang.label": "Mudar para Português",
  },
} as const;

export type TranslationKey = keyof typeof translations.pt;
