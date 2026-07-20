export type Locale = "pt" | "en";

export const translations = {
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.projects": "Projetos",

    // Hero
    "hero.available": "Disponível para oportunidades",
    "hero.role": "Desenvolvedor Backend",
    "hero.description": "Desenvolvedor Backend Java/Spring Boot, atuando com APIs REST, integração de sistemas, automação de processos, bancos de dados relacionais e IA aplicada (Cartec Bosch). Busco posição remota como Desenvolvedor Backend.",
    "hero.viewCv": "Visualizar Currículo",
    "hero.downloadCv": "Baixar Currículo",
    "hero.viewProjects": "Ver Projetos",
    "hero.interests": "Interesses:",

    // Skills
    "skill.java.label": "Spring Boot & Java",
    "skill.java.desc": "APIs REST, JWT & JPA",
    "skill.python.label": "Python & IA",
    "skill.python.desc": "Agentes de IA & ML",
    "skill.data.label": "PostgreSQL & Dados",
    "skill.data.desc": "Modelagem & Integrações",
    "skill.frontend.label": "Automações & Web",
    "skill.frontend.desc": "WhatsApp & Webhooks",

    // Interest tags
    "interest.1": "Backend",
    "interest.2": "Spring Boot",
    "interest.3": "PostgreSQL",
    "interest.4": "Agentes IA",
    "interest.5": "Trabalho Remoto",

    // Projects section
    "projects.label": "Projetos selecionados",
    "projects.title": "{count} sistemas em destaque",
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

    // CV Modal & Dropdown
    "cv.title": "Currículo — Adrian Gonçalves Lopes",
    "cv.pt": "Português",
    "cv.ptDesc": "Currículo em Português",
    "cv.en": "English",
    "cv.enDesc": "Resume in English",
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
    "nav.projects": "Projects",

    // Hero
    "hero.available": "Available for opportunities",
    "hero.role": "Backend Developer",
    "hero.description": "Backend Developer with Java/Spring Boot, working with REST APIs, systems integration, process automation, relational databases, and applied Artificial Intelligence (Cartec Bosch). Seeking a remote Backend Developer position.",
    "hero.viewCv": "View Resume",
    "hero.downloadCv": "Download Resume",
    "hero.viewProjects": "View Projects",
    "hero.interests": "Interests:",

    // Skills
    "skill.java.label": "Spring Boot & Java",
    "skill.java.desc": "REST APIs, JWT & JPA",
    "skill.python.label": "Python & AI",
    "skill.python.desc": "AI Agents & ML",
    "skill.data.label": "PostgreSQL & Data",
    "skill.data.desc": "Modeling & Integrations",
    "skill.frontend.label": "Automations & Web",
    "skill.frontend.desc": "WhatsApp & Webhooks",

    // Interest tags
    "interest.1": "Backend",
    "interest.2": "Spring Boot",
    "interest.3": "PostgreSQL",
    "interest.4": "AI Agents",
    "interest.5": "Remote Work",

    // Projects section
    "projects.label": "Selected projects",
    "projects.title": "{count} featured systems",
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

    // CV Modal & Dropdown
    "cv.title": "Resume — Adrian Gonçalves Lopes",
    "cv.pt": "Portuguese",
    "cv.ptDesc": "Resume in Portuguese",
    "cv.en": "English",
    "cv.enDesc": "Resume in English",
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

export type TranslationKey = keyof (typeof translations)["pt"];
