export const site = {
  name: 'Michal Matusik',
  role: 'Software Engineer — Machine Learning & AI',
  description:
    'I build reliable ML/DL and AI systems, from data and training to evaluation, deployment, and product impact.',
  positioning:
    'Purdue University freshman studying computer science, focused on machine learning, deep learning, and general AI.',
  url: 'https://michal-matusik.github.io',
  email: 'mmatusi@purdue.edu',
  location: 'West Lafayette, IN',
  availability: null as string | null,
  links: {
    github: 'https://github.com/michal-matusik',
    linkedin: null as string | null,
    resume: '/resume.pdf',
    scholar: null as string | null,
  },
  writing: {
    mode: 'internal' as 'internal' | 'external',
    externalUrl: null as string | null,
  },
} as const;
