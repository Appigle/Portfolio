import { Link } from '@/types';

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/nav-link-previews/landing.png',
  },
  {
    title: 'About',
    href: '/#about',
    thumbnail: '/assets/nav-link-previews/about.png',
  },
  {
    title: 'Skills',
    href: '/#skills',
    thumbnail: '/assets/nav-link-previews/skills.png',
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/nav-link-previews/projects.png',
  },
  // {
  //   title: 'Testimonials',
  //   href: '/testimonials',
  //   thumbnail: '/assets/nav-link-previews/testimonials.png'
  // },
  {
    title: 'Github Contributions',
    href: '/#GithubContributions',
    thumbnail: 'https://green-wall.leoku.dev/api/og/share/Appigle',
  },
  {
    title: 'Blogs',
    href: 'https://appigle.xiaopotato.top/',
    thumbnail: '/assets/nav-link-previews/blog.png',
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: '/assets/nav-link-previews/contact.png',
  },
];

export { links };
