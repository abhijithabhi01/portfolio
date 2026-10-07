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
    tag: 'Agentic AI',
    title: 'Account Research Agent',
    desc: 'An autonomous AI agent that gathers and synthesizes company/account information from multiple sources to generate structured research briefs, reducing manual research time for account prep. Designed prompt chains and workflow logic to extract, summarize, and organize key account insights for sales and outreach.',
    techs: ['Agentic AI', 'Prompt Chaining', 'LLM Integration', 'Python'],
  },
  {
    number: '02',
    tag: 'Agentic AI',
    title: 'HIA – Health Insight Agent',
    desc: 'An agentic AI assistant that answers health-related questions in plain, easy-to-understand language, using an LLM to interpret user queries and generate relevant responses — reducing the need for manual health-info lookup.',
    techs: ['AI', 'LLM', 'React.js', 'Node.js'],
  },
  {
    number: '03',
    tag: 'AI-Based System',
    title: 'HR Autonomous Onboarding Agent',
    desc: 'An agentic AI system that automates candidate onboarding steps — document collection, task assignment, and status tracking — cutting manual HR effort.',
    techs: ['Agentic AI', 'Workflow Automation', 'LLM Integration'],
  },
  {
    number: '04',
    tag: 'Blockchain',
    title: 'CredChain',
    desc: 'Blockchain-based credential verification system for securely storing and verifying academic and professional credentials with tamper-proof records.',
    techs: ['Blockchain', 'Smart Contracts', 'Web3'],
  },
  {
    number: '05',
    tag: 'AI Platform',
    title: 'CareerVista',
    desc: 'AI/ML-based career guidance platform recommending personalized career paths for students after 10th, 12th, and Degree level, based on user inputs.',
    techs: ['AI/ML', 'Recommendation Engine', 'React', 'Node.js'],
  },
  {
    number: '06',
    tag: 'Full-Stack',
    title: 'Home Service Provider',
    desc: 'A MERN full-stack application connecting customers with home service workers, supporting service booking and worker-side service management.',
    techs: ['MongoDB', 'Express', 'React', 'Node.js'],
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
