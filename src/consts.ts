export const SITE = {
  title: 'Dominic Iortyer',
  brand: 'Cloud with Dominic',
  description:
    'Articles about Azure, Kubernetes, DevOps, Infrastructure as Code and AI by Dominic Iortyer.',
  author: 'Dominic Iortyer',
  role: 'Cloud & DevOps Engineer',
  avatar: 'https://github.com/dominicnike.png',
  postsPerPage: 6,
  yearsExperience: '5+',
};

export const SOCIALS = [
  { name: 'X', url: 'https://x.com/dominicnike', icon: 'x' },
  { name: 'GitHub', url: 'https://github.com/dominicnike', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dominic-iortyer-23510280/', icon: 'linkedin' },
  { name: 'RSS', url: '/rss.xml', icon: 'rss' },
] as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tags', href: '/tags' },
  { label: 'About', href: '/about' },
];
