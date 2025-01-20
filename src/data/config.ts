const config = {
  title: 'LEI Chen | Full-Stack Developer',
  description: {
    long: '#',
    short:
      'A full-stack developer creating interactive web experiences and innovative projects.',
  },
  keywords: [
    'full-stack developer',
    'creative technologist',
    'web development',
    'interactive websites',
    'Coding Ducks',
    'The Booking Desk',
    'web design',
    'GSAP',
    'React',
    'Next.js',
    'Spline',
  ],
  author: 'LEI Chen',
  email: 'ray.chenley.up@gmail.com',
  site: 'https://ray.xiaopotato.top',

  get ogImg() {
    return this.site + '/assets/seo/og-image.png';
  },
  social: {
    twitter: '#',
    facebook: '#',
    instagram: 'https://www.instagram.com/appigle/',
    linkedin: 'https://www.linkedin.com/in/lei-chen-364721320/',
    github: 'https://github.com/Appigle',
  },
};
export { config };
