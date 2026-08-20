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
    "hero.role": "Software Engineer",
    "hero.subrole": "Java 21 · Spring Boot 3 · AI & RAG (pgvector) · Python ML · Next.js 15",
    "hero.description": "Engenheiro de Software especializado em sistemas escaláveis de alta performance. Domínio completo do ecossistema Java 21 e Spring Boot no backend, integração avançada de Inteligência Artificial (RAG corporativo, pgvector, Claude Vision API, Python ML com explicabilidade SHAP), e interfaces reativas modernas em Next.js 15.",
    "hero.viewCv": "Visualizar Currículo",
    "hero.downloadCv": "Baixar Currículo",
    "hero.viewProjects": "Ver Projetos",
    "hero.interests": "Interesses:",

    // Stats
    "stat.experience": "4 Anos",
    "stat.experienceSub": "de Prática em Software",
    "stat.projects": "7 Repositórios",
    "stat.projectsSub": "Auditados no GitHub & CI/CD",
    "stat.cert": "Oracle Certified",
    "stat.certSub": "Java Foundations",

    // Legacy skill labels (for Hero / Skills compat)
    "skill.java.label": "Java 21 & Spring Boot",
    "skill.python.label": "Python & AI / RAG",
    "skill.data.label": "PostgreSQL & pgvector",
    "skill.frontend.label": "React & Next.js 15",
    "skill.backend.label": "Backend & Cloud",
    "skill.java.desc": "Arquitetura REST, Security, JPA",
    "skill.python.desc": "ML, SHAP, LLMs, Spring AI",
    "skill.data.desc": "VETORES, HNSW, SQL",
    "skill.frontend.desc": "TypeScript, Tailwind v4",
    "skill.backend.desc": "Docker, CI/CD, AWS",

    // Skills Section
    "skills.sectionLabel": "Competências Técnicas",
    "skills.title": "Tecnologias & Arquitetura",
    "skills.subtitle": "Domínio técnico consolidado no desenvolvimento de software de ponta a ponta com práticas de Big Tech.",
    
    "skills.backendTitle": "Backend & APIs",
    "skills.backendDesc": "Java 21, Spring Boot 3.3 (REST APIs, Security, Data JPA), Python, FastAPI, Maven, Gradle",
    
    "skills.frontendTitle": "Frontend & Web",
    "skills.frontendDesc": "React, TypeScript, Next.js 15 (App Router), Tailwind CSS v4, Framer Motion, Chart.js",
    
    "skills.dbTitle": "Banco de Dados & Busca Vetorial",
    "skills.dbDesc": "PostgreSQL, pgvector (HNSW Indexing), H2 Database, Supabase",
    
    "skills.aiTitle": "IA & Engenharia de Prompts",
    "skills.aiDesc": "RAG (Retrieval-Augmented Generation), Spring AI, SHAP (XAI), OpenAI API, Claude Vision API, Evolution API, n8n",
    
    "skills.infraTitle": "Infraestrutura & DevOps",
    "skills.infraDesc": "GitHub Actions (CI/CD Workflows), Docker, Docker Compose, Linux VPS, AWS (EC2), Git",

    // Experience & Education Section
    "exp.sectionLabel": "Trajetória Profissional",
    "exp.title": "Experiência & Formação",
    "exp.subtitle": "Atuação prática no desenvolvimento de produtos reais, ERPs com IA e sistemas corporativos.",

    "exp.coreSystem.role": "Cofundador & Desenvolvedor Fullstack",
    "exp.coreSystem.company": "Core System",
    "exp.coreSystem.period": "2023 – Atual · Natal, RN",
    "exp.coreSystem.desc1": "Desenvolvimento do Controll-All ERP v2.0 para a JC Eventos, cobrindo módulos operacionais integrados.",
    "exp.coreSystem.desc2": "Construção de APIs REST robustas em Java 21 + Spring Boot e interface web reativa em React/TypeScript conectadas ao PostgreSQL.",
    "exp.coreSystem.desc3": "Definição de requisitos de produto (PRD), arquitetura de rotas, modelagem de dados e esteira de automação CI/CD.",

    "exp.cartec.role": "Desenvolvedor Fullstack / Sistemas Internos",
    "exp.cartec.company": "Cartec (Rede Bosch Car Service)",
    "exp.cartec.period": "Atual · Natal, RN",
    "exp.cartec.desc1": "Desenvolvimento do CARTEC 2.0 com automação de atendimento via WhatsApp e análise de orçamentos com Claude Vision API.",
    "exp.cartec.desc2": "Implementação de dashboards de desempenho com Chart.js e relatórios operacionais.",
    "exp.cartec.desc3": "Estruturação de código backend em Spring Boot 3 com testes unitários JUnit 5 e conteinerização Docker.",

    "edu.title": "Formação & Certificações",
    "edu.ads.title": "Análise e Desenvolvimento de Sistemas (ADS)",
    "edu.ads.inst": "UNINASSAU (Cursando 2º Período)",
    "edu.oracle.title": "Oracle Certified Associate / Foundations",
    "edu.oracle.inst": "Oracle Java Foundations (Concluído)",
    "edu.hackathon.title": "Hackathon do Sol 2026",
    "edu.hackathon.inst": "Projeto DunasTech (Mapa 3D em Natal/RN)",
    "edu.lang.title": "Idiomas",
    "edu.lang.inst": "Português (Nativo) | Inglês (Intermediário / Leitura Técnica)",

    // Interest tags
    "interest.1": "Backend Java 21",
    "interest.2": "AI & RAG (pgvector)",
    "interest.3": "Python ML (SHAP)",
    "interest.4": "GitHub Actions CI/CD",
    "interest.5": "Trabalho Remoto",

    // Projects section & Filters
    "projects.label": "Portfólio de Repositórios Auditados",
    "projects.title": "{count} projetos públicos verificados",
    "projects.subtitle": "Repositórios ativos e auditados no GitHub com código-fonte, deploys na Vercel e esteiras de CI/CD.",
    
    "filter.all": "Todos",
    "filter.fullstack": "Fullstack",
    "filter.java": "Java / Spring Boot",
    "filter.ai": "IA & RAG",
    "filter.python": "Python / ML",
    "filter.frontend": "Frontend & Web",
    
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
    "contact.subtitle": "Aberto a oportunidades de desenvolvimento de software (remotas/híbridas), projetos de IA e engenharia de backend.",
    "contact.whatsapp": "💬 Iniciar conversa no WhatsApp",

    // Footer
    "footer.copy": "Adrian Lopes — Software Engineer.",

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
    "hero.role": "Software Engineer",
    "hero.subrole": "Java 21 · Spring Boot 3 · AI & RAG (pgvector) · Python ML · Next.js 15",
    "hero.description": "Software Engineer specialized in high-impact scalable systems. Comprehensive mastery of Java 21 & Spring Boot ecosystem on the backend, advanced AI integration (Enterprise RAG, pgvector, Claude Vision API, Python ML with SHAP explainability), and modern reactive Next.js 15 UIs.",
    "hero.viewCv": "View Resume",
    "hero.downloadCv": "Download Resume",
    "hero.viewProjects": "View Projects",
    "hero.interests": "Interests:",

    // Stats
    "stat.experience": "4 Years",
    "stat.experienceSub": "Software Practice",
    "stat.projects": "7 Public Repos",
    "stat.projectsSub": "Audited on GitHub & CI/CD",
    "stat.cert": "Oracle Certified",
    "stat.certSub": "Java Foundations",

    // Legacy skill labels (for Hero / Skills compat)
    "skill.java.label": "Java 21 & Spring Boot",
    "skill.python.label": "Python & AI / RAG",
    "skill.data.label": "PostgreSQL & pgvector",
    "skill.frontend.label": "React & Next.js 15",
    "skill.backend.label": "Backend & Cloud",
    "skill.java.desc": "REST Architecture, Security, JPA",
    "skill.python.desc": "ML, SHAP, LLMs, Spring AI",
    "skill.data.desc": "VECTORS, HNSW, SQL",
    "skill.frontend.desc": "TypeScript, Tailwind v4",
    "skill.backend.desc": "Docker, CI/CD, AWS",

    // Skills Section
    "skills.sectionLabel": "Technical Competencies",
    "skills.title": "Technologies & Architecture",
    "skills.subtitle": "Consolidated technical expertise in end-to-end software engineering following Big Tech standards.",

    "skills.backendTitle": "Backend & APIs",
    "skills.backendDesc": "Java 21, Spring Boot 3.3 (REST APIs, Security, Data JPA), Python, FastAPI, Maven, Gradle",

    "skills.frontendTitle": "Frontend & Web",
    "skills.frontendDesc": "React, TypeScript, Next.js 15 (App Router), Tailwind CSS v4, Framer Motion, Chart.js",

    "skills.dbTitle": "Databases & Vector Search",
    "skills.dbDesc": "PostgreSQL, pgvector (HNSW Indexing), H2 Database, Supabase",

    "skills.aiTitle": "AI & Prompt Engineering",
    "skills.aiDesc": "RAG (Retrieval-Augmented Generation), Spring AI, SHAP (XAI), OpenAI API, Claude Vision API, Evolution API, n8n",

    "skills.infraTitle": "Infrastructure & DevOps",
    "skills.infraDesc": "GitHub Actions (CI/CD Workflows), Docker, Docker Compose, Linux VPS, AWS (EC2), Git",

    // Experience & Education Section
    "exp.sectionLabel": "Career Roadmap",
    "exp.title": "Experience & Education",
    "exp.subtitle": "Hands-on engineering of real-world products, AI ERPs, and enterprise systems.",

    "exp.coreSystem.role": "Co-founder & Fullstack Developer",
    "exp.coreSystem.company": "Core System",
    "exp.coreSystem.period": "2023 – Present · Natal, RN, Brazil",
    "exp.coreSystem.desc1": "Built Controll-All ERP v2.0 for JC Eventos, covering integrated operational modules.",
    "exp.coreSystem.desc2": "Engineered robust REST APIs in Java 21 + Spring Boot and reactive web UI in React/TypeScript connected to PostgreSQL.",
    "exp.coreSystem.desc3": "Authored Product Requirements Documents (PRD), API route architecture, database modeling, and CI/CD automation pipeline.",

    "exp.cartec.role": "Fullstack Developer / Internal Systems",
    "exp.cartec.company": "Cartec (Bosch Car Service Network)",
    "exp.cartec.period": "Present · Natal, RN, Brazil",
    "exp.cartec.desc1": "Developed CARTEC 2.0 with WhatsApp customer support automation and quote processing via Claude Vision API.",
    "exp.cartec.desc2": "Implemented performance dashboards with Chart.js and operational report generation.",
    "exp.cartec.desc3": "Structured Spring Boot 3 backend code with JUnit 5 unit tests and Docker containerization.",

    "edu.title": "Education & Certifications",
    "edu.ads.title": "Software Analysis and Development (ADS)",
    "edu.ads.inst": "UNINASSAU (In Progress — 2nd Semester)",
    "edu.oracle.title": "Oracle Certified Associate / Foundations",
    "edu.oracle.inst": "Oracle Java Foundations (Completed)",
    "edu.hackathon.title": "Hackathon do Sol 2026",
    "edu.hackathon.inst": "DunasTech Project (3D Interactive Map in Natal/RN)",
    "edu.lang.title": "Languages",
    "edu.lang.inst": "Portuguese (Native) | English (Intermediate / Technical Reading)",

    // Interest tags
    "interest.1": "Backend Java 21",
    "interest.2": "AI & RAG (pgvector)",
    "interest.3": "Python ML (SHAP)",
    "interest.4": "GitHub Actions CI/CD",
    "interest.5": "Remote Work",

    // Projects section & Filters
    "projects.label": "Audited Repositories Portfolio",
    "projects.title": "{count} verified public projects",
    "projects.subtitle": "Active public repositories audited on GitHub with source code, Vercel deployments, and CI/CD pipelines.",

    "filter.all": "All",
    "filter.fullstack": "Fullstack",
    "filter.java": "Java / Spring Boot",
    "filter.ai": "AI & RAG",
    "filter.python": "Python / ML",
    "filter.frontend": "Frontend & Web",

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
    "contact.subtitle": "Open to Software Engineering opportunities (remote/hybrid), AI projects, and backend engineering.",
    "contact.whatsapp": "💬 Start a WhatsApp conversation",

    // Footer
    "footer.copy": "Adrian Lopes — Software Engineer.",

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

export type TranslationKey = string;
