'use client';
import { useEffect, useState } from 'react';
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from 'react-icons/di';
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from 'react-icons/fa6';
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from 'react-icons/si';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { TbTerminal2 } from 'react-icons/tb';

const CONTACT_LINKS = [
  {
    name: 'Email',
    content: 'ray.chenley.up@gmail.com',
    href: 'mailto:ray.chenley.up@gmail.com.com',
    icon: <FaEnvelope height={'50px'} />,
  },
  {
    name: 'Phone',
    content: '1234567890',
    href: 'tel:1234567890',
    icon: <FaPhone height={'50px'} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lei-chen-364721320/',
    content: '/lei-chen',
    icon: <FaLinkedin height={'50px'} />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Appigle',
    content: '/lei-chen',
    icon: <FaGithub height={'50px'} />,
  },
];

const TOOLS = [
  {
    name: 'JavaScript',
    content:
      'JavaScript is a versatile, high-level, interpreted programming language used for web development.',
    icon: <SiJavascript size={'50px'} color={'#f0db4f'} />,
    color: '#f0db4f',
  },
  {
    name: 'TypeScript',
    content:
      'TypeScript is a strongly-typed superset of JavaScript that compiles to plain JavaScript.',
    icon: <SiTypescript size={'50px'} color={'#007acc'} />,
    color: '#007acc',
  },
  {
    name: 'HTML',
    content: 'HTML is the standard markup language for creating web pages.',
    icon: <FaHtml5 size={'50px'} color="#e34c26" />,
    color: '#e34c26',
  },
  {
    name: 'CSS',
    content:
      'CSS is used to style and layout web pages, including colors, fonts, and layouts.',
    icon: <FaCss3 size={'50px'} color="#563d7c" />,
    color: '#563d7c',
  },
  {
    name: 'Node.js',
    content:
      'Node.js is a JavaScript runtime built on Chrome’s V8 engine for server-side development.',
    icon: <FaNodeJs size={'50px'} color="#6cc24a" />,
    color: '#6cc24a',
  },
  {
    name: 'React.js',
    content: 'React.js is a JavaScript library for building user interfaces.',
    icon: <FaReact size={'50px'} color="#61dafb" />,
    color: '#61dafb',
  },
  {
    name: 'Docker',
    content:
      'Docker is a platform for developing, shipping, and running applications in containers.',
    icon: <FaDocker size={'50px'} color="#2496ed" />,
    color: '#2496ed',
  },
  {
    name: 'Nginx',
    content:
      'Nginx is a high-performance web server, reverse proxy, and load balancer.',
    icon: <DiNginx size={'50px'} color="#008000" />,
    color: '#008000',
  },
  {
    name: 'Vue.js',
    content:
      'Vue.js is a progressive JavaScript framework for building user interfaces.',
    icon: <FaVuejs size={'50px'} color="#41b883" />,
    color: '#41b883',
  },
  {
    name: 'Express.js',
    content: 'Express.js is a fast, minimalist web framework for Node.js.',
    icon: <SiExpress size={'50px'} color="#fff" />,
    color: '#000000',
  },
  {
    name: 'PostgreSQL',
    content:
      'PostgreSQL is a powerful, open-source relational database system.',
    icon: <DiPostgresql size={'50px'} color="#336791" />,
    color: '#336791',
  },
  {
    name: 'MongoDB',
    content:
      'MongoDB is a NoSQL database program that uses JSON-like documents with schema.',
    icon: <DiMongodb size={'50px'} color="#4db33d" />,
    color: '#4db33d',
  },
  {
    name: 'Tailwind CSS',
    content:
      'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    icon: <RiTailwindCssFill size={'50px'} color="#06b6d4" />,
    color: '#06b6d4',
  },
  {
    name: 'Firebase',
    content:
      'Firebase is a platform developed by Google for creating mobile and web applications.',
    icon: <RiFirebaseFill size={'50px'} color="#FFCA28" />,
    color: '#FFCA28',
  },
  {
    name: 'Git',
    content:
      'Git is a distributed version control system for tracking changes in source code.',
    icon: <FaGit size={'50px'} color="#f05032" />,
    color: '#f05032',
  },
  {
    name: 'GitHub',
    content:
      'GitHub is a code hosting platform for version control and collaboration.',
    icon: <FaGithub size={'50px'} color="#fff" />,
    color: '#000000',
  },
  {
    name: 'VS Code',
    content: 'Visual Studio Code is a source-code editor made by Microsoft.',
    icon: <SiVisualstudiocode size={'50px'} color="#007acc" />,
    color: '#007acc',
  },
  {
    name: 'VIM',
    content:
      'Vim is a highly configurable text editor for efficient text editing.',
    icon: <DiVim size={'50px'} color="#019733" />,
    color: '#019733',
  },
  {
    name: 'Prettier',
    content:
      'Prettier is an opinionated code formatter supporting many languages.',
    icon: <SiPrettier size={'50px'} color="#f7b93c" />,
    color: '#f7b93c',
  },
  {
    name: 'NPM',
    content:
      'NPM is the package manager for JavaScript and the default for Node.js.',
    icon: <DiNpm size={'50px'} color="#CB3837" />,
    color: '#CB3837',
  },
  {
    name: 'Yarn',
    content: 'Yarn is a package manager for managing project dependencies.',
    icon: <FaYarn size={'50px'} color="#2C8EBB" />,
    color: '#2C8EBB',
  },
  {
    name: 'Vercel',
    content:
      'Vercel is a platform for frontend frameworks and static site hosting.',
    icon: <SiVercel size={'50px'} color="#fff" />,
    color: '#000000',
  },
  {
    name: 'Linux',
    content:
      'Linux is an open-source operating system used for servers, desktops, and more.',
    icon: <FaLinux size={'50px'} color="#fff" />,
    color: '#000000',
  },
  {
    name: 'Kubuntu',
    content:
      'Kubuntu is an official Ubuntu flavor that uses the KDE Plasma desktop.',
    icon: <SiKubuntu size={'50px'} color="#0077C4" />,
    color: '#0077C4',
  },
  {
    name: 'Terminal',
    content:
      'The terminal is a text-based interface for interacting with your computer.',
    icon: <TbTerminal2 size={'50px'} color="#fff" />,
    color: '#000000',
  },
  {
    name: 'AWS',
    content:
      'Amazon Web Services (AWS) is a cloud platform offering a wide range of services.',
    icon: <FaAws size={'50px'} color="#FF9900" />,
    color: '#FF9900',
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: 'blur(2px)',
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">LEI Chen</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Web Developer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: 'blur(2px)' }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m LeiChen, a Fullstack developer passionate
              about creating meaningful digital experiences. With great in Web
              development, I thrive on turning ideas into reality through coding
              and design. My journey began with a fascination for technology and
              a drive to make a positive impact.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me [Your
              Interests/Hobbies], exploring new technologies, or sipping coffee
              while brainstorming my next project.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: 'loop',
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
