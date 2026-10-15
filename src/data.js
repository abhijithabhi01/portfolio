export const SKILLS = [
  {
    group: 'Frontend & Languages',
    items: [
      { name: 'JavaScript', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    group: 'Backend & Databases',
    items: [
      { name: 'Node.js / Express', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQL / REST APIs', level: 78 },
      { name: 'Firebase / Supabase', level: 75 },
    ],
  },
  {
    group: 'AI / Agentic Systems',
    items: [
      { name: 'Prompt Engineering', level: 88 },
      { name: 'LLM Integration', level: 85 },
      { name: 'Agentic Workflow Design', level: 85 },
    ],
  },
  {
    group: 'DevOps & Tools',
    items: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Google Cloud Platform', level: 75 },
      { name: 'Postman', level: 80 },
      { name: 'Agile / SDLC', level: 75 },
    ],
  },
]

export const COMPETENCIES = [
  'Analytical Problem Solving',
  'OOP',
  'Version Control',
  'Communication',
  'Time Management',
  'Team Collaboration',
  'Adaptability',
  'Logical Thinking',
]

export const EXPERIENCE = [
  {
    role: 'Full-Stack Developer',
    company: 'Susima Smaart Solutions',
    date: 'Jul 2026 – Present',
    bullets: [
      'Building scalable MERN-stack web applications that manage and interact with embedded and IoT systems.',
      'Developing REST APIs powering hardware-integrated web applications and real-time dashboards.',
      'Creating monitoring and control dashboards for hardware-based solutions.',
    ],
  },
  {
    role: 'AI Intern',
    company: '10xDS',
    date: 'Jan 2026 – Jun 2026',
    bullets: [
      'Developed AI agents for intelligent automation and decision-making within enterprise workflows.',
      'Built and integrated AI-driven applications with backend services and APIs, using LLMs and Google Cloud Vertex AI.',
      'Worked on agentic workflow design, from prompt architecture to deployment.',
    ],
  },
  {
    role: 'R&D Intern',
    company: 'Luminar Technohub',
    date: 'Jan 2024 – Apr 2024',
    bullets: [
      'Developed and tested MERN-stack applications end-to-end.',
      'Collaborated with cross-functional teams on UI/UX and deployment.',
      'Followed SDLC practices for structured, iterative delivery.',
    ],
  },
]

export const PROJECTS = [
  {
    number: '01',
    slug: 'account-research-agent',
    tag: 'Agentic AI',
    title: 'Account Research Agent',
    desc: 'An autonomous AI agent that gathers and synthesizes company/account information from multiple sources to generate structured research briefs, reducing manual research time for account prep.',
    longDescription: `Account Research Agent is an autonomous AI system designed for sales and account teams. It gathers company and account information from multiple public and internal-style sources, then synthesizes that data into structured research briefs.

The system uses prompt chaining and workflow logic so each stage — discovery, extraction, summarization, and packaging — is explicit and controllable. The goal is to cut the time spent on manual account prep while keeping outputs consistent and usable for outreach.

Built as a practical agentic workflow rather than a single prompt, it focuses on reliability, clear intermediate steps, and research briefs that humans can act on immediately.`,
    techs: ['Agentic AI', 'Prompt Chaining', 'LLM Integration', 'Python'],
    features: [
      'Multi-source account and company research',
      'Prompt chains for extract → summarize → structure',
      'Structured research briefs for sales prep',
      'Reduced manual research time for account teams',
    ],
    github: 'https://github.com/abhijithabhi01/Account-Research-Agent',
    githubExtra: [],
  },
  {
    number: '02',
    slug: 'hia-health-insight-agent',
    tag: 'Agentic AI',
    title: 'HIA – Health Insight Agent',
    desc: 'An agentic AI assistant that answers health-related questions in plain language using an LLM, reducing the need for manual health-info lookup.',
    longDescription: `HIA (Health Insight Agent) is an agentic AI assistant that interprets user health-related questions and responds in clear, accessible language.

The stack splits into a React frontend and a Node.js backend that orchestrates LLM calls. The agent focuses on understanding the user’s intent, retrieving or generating relevant information, and presenting answers without medical jargon overload.

It is designed as a demo of agent-style Q&A: interpret query → reason with an LLM → return a useful, readable answer — not a replacement for professional medical advice.`,
    techs: ['AI', 'LLM', 'React.js', 'Node.js'],
    features: [
      'Natural-language health Q&A',
      'LLM-backed interpretation of user queries',
      'React frontend + Node.js agent backend',
      'Plain-language responses for non-experts',
    ],
    github: 'https://github.com/abhijithabhi01/HIA-Health-Insight-Agent--Frontend',
    githubExtra: [
      { label: 'Backend', url: 'https://github.com/abhijithabhi01/HIA-Health-Insight-Agent--backend' },
    ],
  },
  {
    number: '03',
    slug: 'hr-autonomous-onboarding-agent',
    tag: 'AI-Based System',
    title: 'HR Autonomous Onboarding Agent',
    desc: 'An agentic AI system that automates candidate onboarding — document collection, task assignment, and status tracking — cutting manual HR effort.',
    longDescription: `The HR Autonomous Onboarding Agent automates repetitive onboarding steps so HR teams spend less time chasing documents and updating status by hand.

It covers document collection, task assignment, and status tracking in an agentic workflow. A frontend experience pairs with a dedicated backend that runs the automation logic and keeps onboarding state consistent.

The project demonstrates how agentic patterns apply to internal operations: define steps, let the agent drive progress, and surface status clearly for humans when intervention is needed.`,
    techs: ['Agentic AI', 'Workflow Automation', 'LLM Integration'],
    features: [
      'Automated document collection flows',
      'Task assignment for onboarding steps',
      'Status tracking for candidates and HR',
      'Frontend + backend agent architecture',
    ],
    github: 'https://github.com/abhijithabhi01/Autonomous-HR-',
    githubExtra: [
      { label: 'Backend', url: 'https://github.com/abhijithabhi01/HR-Autonomous-Backend' },
    ],
  },
  {
    number: '04',
    slug: 'credchain',
    tag: 'Blockchain',
    title: 'CredChain',
    desc: 'Blockchain-based credential verification system for securely storing and verifying academic and professional credentials with tamper-proof records.',
    longDescription: `CredChain is a credential verification platform that stores academic and professional credentials on-chain concepts so records are harder to forge and easier to verify.

The system includes a React frontend and a Node.js backend for issuing, storing references, and verifying credentials. The focus is tamper-evident records and a clear verification path for institutions or employers.

It explores Web3 patterns in a practical domain: trust in certificates without relying only on paper or centralized PDFs.`,
    techs: ['Blockchain', 'Smart Contracts', 'Web3', 'React', 'Node.js'],
    features: [
      'Tamper-oriented credential records',
      'Issue and verify academic/professional credentials',
      'Separate frontend and backend codebases',
      'Designed for institutional and employer verification flows',
    ],
    github: 'https://github.com/abhijithabhi01/credchain-frontend',
    githubExtra: [
      { label: 'Backend', url: 'https://github.com/abhijithabhi01/credchain-backend' },
    ],
  },
  {
    number: '05',
    slug: 'careervista',
    tag: 'AI Platform',
    title: 'CareerVista',
    desc: 'AI/ML-based career guidance platform recommending personalized career paths for students after 10th, 12th, and Degree level based on user inputs.',
    longDescription: `CareerVista is an AI/ML career guidance platform that recommends personalized paths for students after 10th, 12th, and degree levels.

Users provide interests, background, and constraints; the system uses recommendation logic to surface relevant career options and next steps. The product aims to make career exploration more structured than ad-hoc advice.

It combines a React-style client experience with backend services that host the recommendation flow — a full-stack take on education-oriented AI.`,
    techs: ['AI/ML', 'Recommendation Engine', 'React', 'Node.js'],
    features: [
      'Personalized career path recommendations',
      'Support for 10th, 12th, and degree stages',
      'Input-driven suggestion engine',
      'Full-stack AI/ML product shape',
    ],
    github: null,
    githubExtra: [],
  },
  {
    number: '06',
    slug: 'home-service-provider',
    tag: 'Full-Stack',
    title: 'Home Service Provider',
    desc: 'A MERN full-stack app connecting customers with home service workers, with booking and worker-side service management.',
    longDescription: `Home Service Provider is a MERN application that connects customers who need home services with workers who provide them.

Customers can book services; workers get tools to manage offerings and requests. The architecture uses MongoDB, Express, React, and Node.js across dedicated frontend and backend repositories, following typical production-style separation of concerns.

It is a classic marketplace-style full-stack build: auth, listings, bookings, and role-specific views for customers and providers.`,
    techs: ['MongoDB', 'Express', 'React', 'Node.js'],
    features: [
      'Customer booking flows',
      'Worker-side service management',
      'MERN stack end-to-end',
      'Separate homeserve frontend and backend repos',
    ],
    github: 'https://github.com/abhijithabhi01/Home-Service-Provider',
    githubExtra: [
      { label: 'Frontend', url: 'https://github.com/abhijithabhi01/homeserve-frontend' },
      { label: 'Backend', url: 'https://github.com/abhijithabhi01/homeserve-backend' },
    ],
  },
]

export const CERTIFICATIONS = [
  { icon: '🏅', name: 'NACTET Certification – MERN Stack', org: 'National Certification Body' },
  { icon: '📜', name: 'Six-Month MERN Full-Stack Program', org: 'Luminar Technolab' },
]

export const EDUCATION = [
  { icon: '🎓', degree: 'Master of Computer Applications (MCA)', uni: 'APJ Abdul Kalam Technological University', status: 'Completed' },
  { icon: '📚', degree: 'Bachelor of Computer Applications (BCA)', uni: 'University of Kerala', status: 'Completed' },
]

export const FAQ_ITEMS = [
  {
    q: 'Who is Abhijith Sreekumar?',
    a: 'Abhijith Sreekumar is a Full-Stack Developer at Susima Smaart Solutions and an agentic AI engineer based in Bengaluru, Karnataka. He is an MCA graduate who previously worked as an AI Intern at 10xDS, building enterprise-grade agentic AI workflows with LLMs and Google Cloud Vertex AI.',
  },
  {
    q: 'What technologies does Abhijith Sreekumar use?',
    a: 'He specializes in the MERN stack (MongoDB, Express.js, React.js, Node.js), Python, agentic AI development, prompt engineering, LLM integration, and Google Cloud Platform. He builds full-stack web applications and AI-powered agentic systems.',
  },
  {
    q: 'What projects has Abhijith Sreekumar built?',
    a: 'Notable projects include an Account Research Agent (autonomous AI for sales research), HIA Health Insight Agent (LLM-powered health Q&A), HR Autonomous Onboarding Agent, CredChain (blockchain credential verification), CareerVista (AI career guidance), and a Home Service Provider MERN application.',
  },
  {
    q: 'Where does Abhijith Sreekumar work?',
    a: 'He currently works as a Full-Stack Developer at Susima Smaart Solutions in Bengaluru, Karnataka, India, building MERN-stack applications that interact with embedded and IoT systems.',
  },
  {
    q: 'How can I contact Abhijith Sreekumar?',
    a: 'You can reach him by email at iamabhijithabhi01@gmail.com, on LinkedIn at linkedin.com/in/abhijithsreekumar-dev, on GitHub at github.com/abhijithabhi01, or via the contact section on abhijithsreekumar.vercel.app.',
  },
  {
    q: 'Is Abhijith Sreekumar a MERN developer in Bengaluru?',
    a: 'Yes. Abhijith Sreekumar is a MERN full-stack developer based in Bengaluru, working at Susima Smaart Solutions on web applications and hardware-integrated dashboards, with additional experience in agentic AI systems.',
  },
]

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug)
}
