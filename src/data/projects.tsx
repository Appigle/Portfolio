import AceTernityLogo from '@/components/logos/aceternity';
import SlideShow from '@/components/slide-show';
import { Button } from '@/components/ui/button';
import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';
import {
  RiJavaFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
} from 'react-icons/ri';
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJsonwebtokens,
  SiMaterialdesign,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
const BASE_PATH = '/assets/projects-screenshots';

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={'default'} size={'sm'}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={'default'} size={'sm'}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  springboot: {
    title: 'Springboot',
    bg: 'black',
    fg: 'white',
    icon: <SiSpringboot />,
  },
  java: {
    title: 'Java',
    bg: 'black',
    fg: 'white',
    icon: <RiJavaFill />,
  },
  jwt: {
    title: 'JWT',
    bg: 'black',
    fg: 'white',
    icon: <SiJsonwebtokens />,
  },
  mysql: {
    title: 'Mysql',
    bg: 'black',
    fg: 'white',
    icon: <SiMysql />,
  },
  material_ui: {
    title: 'Material Tailwind',
    bg: 'black',
    fg: 'white',
    icon: <SiMaterialdesign />,
  },
  next: {
    title: 'Next.js',
    bg: 'black',
    fg: 'white',
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: 'Chakra UI',
    bg: 'black',
    fg: 'white',
    icon: <SiChakraui />,
  },
  node: {
    title: 'Node.js',
    bg: 'black',
    fg: 'white',
    icon: <RiNodejsFill />,
  },
  python: {
    title: 'Python',
    bg: 'black',
    fg: 'white',
    icon: <SiPython />,
  },
  prisma: {
    title: 'prisma',
    bg: 'black',
    fg: 'white',
    icon: <SiPrisma />,
  },
  postgres: {
    title: 'PostgreSQL',
    bg: 'black',
    fg: 'white',
    icon: <SiPostgresql />,
  },
  mongo: {
    title: 'MongoDB',
    bg: 'black',
    fg: 'white',
    icon: <SiMongodb />,
  },
  express: {
    title: 'Express',
    bg: 'black',
    fg: 'white',
    icon: <SiExpress />,
  },
  reactQuery: {
    title: 'React Query',
    bg: 'black',
    fg: 'white',
    icon: <SiReactquery />,
  },
  shadcn: {
    title: 'ShanCN UI',
    bg: 'black',
    fg: 'white',
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: 'Aceternity',
    bg: 'black',
    fg: 'white',
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: 'Tailwind',
    bg: 'black',
    fg: 'white',
    icon: <SiTailwindcss />,
  },
  docker: {
    title: 'Docker',
    bg: 'black',
    fg: 'white',
    icon: <SiDocker />,
  },
  yjs: {
    title: 'Y.js',
    bg: 'black',
    fg: 'white',
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: 'Firebase',
    bg: 'black',
    fg: 'white',
    icon: <SiFirebase />,
  },
  sockerio: {
    title: 'Socket.io',
    bg: 'black',
    fg: 'white',
    icon: <SiSocketdotio />,
  },
  js: {
    title: 'JavaScript',
    bg: 'black',
    fg: 'white',
    icon: <SiJavascript />,
  },
  ts: {
    title: 'TypeScript',
    bg: 'black',
    fg: 'white',
    icon: <SiTypescript />,
  },
  vue: {
    title: 'Vue.js',
    bg: 'black',
    fg: 'white',
    icon: <SiVuedotjs />,
  },
  react: {
    title: 'React.js',
    bg: 'black',
    fg: 'white',
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: 'Sanity',
    bg: 'black',
    fg: 'white',
    icon: <SiSanity />,
  },
  spline: {
    title: 'Spline',
    bg: 'black',
    fg: 'white',
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: 'GSAP',
    bg: 'black',
    fg: 'white',
    icon: '',
  },
  framerMotion: {
    title: 'Framer Motion',
    bg: 'black',
    fg: 'white',
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: 'Supabase',
    bg: 'black',
    fg: 'white',
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  disabled?: boolean;
};
const projects: Project[] = [
  {
    id: 'xiaopotato',
    category: 'Social website',
    title: 'Xiao Potato',
    src: '/assets/projects-screenshots/xiaopotato/feature02.png',
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.springboot,
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.jwt,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.docker,
      ],
    },
    live: 'https://zfc.xiaopotato.top/',
    github: 'https://github.com/Appigle',
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            XiaoPotato - Art Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Xiao Potato is a vibrant art-sharing platform that connects artists
            and art enthusiasts from around the world.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features </TypographyH3>
          <p className="font-mono mb-2">
            Our platform provides a space where creators can showcase their
            artistic journey, from traditional paintings to digital art,
            photography, and beyond. We believe in the power of art to inspire,
            connect, and transform lives through visual storytelling and
            creative expression.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/xiaopotato/feature.png`,
              `${BASE_PATH}/xiaopotato/feature01.png`,
            ]}
          />
          {/* <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
          <p className="font-mono mb-2">
            Collaborate in real-time with others in a multiplayer coding
            environment, just like CodePen but with a social twist.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,
              `${BASE_PATH}/codingducks/ducklet2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>
          <p className="font-mono mb-2">
            Challenge yourself to create UI components with HTML/CSS/JS, and get
            instant feedback with an automated similarity scoring.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/css-battles.png`,
              `${BASE_PATH}/codingducks/css-battle.png`,
              `${BASE_PATH}/codingducks/css-battle2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
          <p className="font-mono mb-2">
            Organize or participate in coding competitions. Successfully used to
            host three contests during college.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />

          <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

          <p className="font-mono mb-2">
            Track your progress, earn badges, and climb the rankings with
            detailed user profiles and activity tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/users.png`,
              `${BASE_PATH}/codingducks/user.png`,
            ]}
          /> */}
        </div>
      );
    },
  },
  {
    id: 'react-npm-lib-heartblossom',
    category: 'npm Library',
    title: 'React heart blossom',
    src: '/assets/projects-screenshots/react-npm-lib/heartblossom.gif',
    screenshots: [],
    live: 'https://www.npmjs.com/package/react-love-heart-effect',
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            React Heart Blossom is a lightweight, customizable React component
            that adds a touch of love to your website. With a simple
            configuration, you can create a beautiful heart blossom effect that
            brings a little magic to your UI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Whether you&apos;re building a dating app, wedding website, or just
            want to spread some love, React Heart Blossom is the perfect
            addition to your project.
          </p>
          <SlideShow images={[`${BASE_PATH}/react-npm-lib/heartblossom.gif`]} />
          {/* <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of stores, each packed with exclusive
            deals and discounts. It&apos;s like having a VIP pass to every sale
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
            neatly organized here. No more endless scrolling; just pick a
            category and get the best offers instantly.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <p className="font-mono mb-2">
            Powered by Vue.js, this bad boy allows us to keep the content
            dynamic and up-to-date. From flash sales to limited-time offers, my
            CMS ensures everything&apos;s live and relevant.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, I&apos;ve sprinkled in some extra magic like personalized deal
            recommendations, user-friendly search features, and a sleek,
            responsive design that works like a charm on any device.
          </p>
          <p className="font-mono mb-2">
            CouponLuxury isn&apos;t just a website; it&apos;s your personal
            deal-hunting assistant, ensuring you never miss out on a bargain!
          </p> */}
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: 'react-npm-lib-key-press-showcase',
    category: 'npm Library',
    title: 'React key press showcase',
    src: '/assets/projects-screenshots/react-npm-lib/keypress.gif',
    screenshots: [],
    live: 'https://www.npmjs.com/package/react-love-heart-effect',
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            React key press showcase is a lightweight, customizable React
            component
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Key press showcase is a simple component that allows you to showcase
            the key press on your website.
          </p>
          <SlideShow images={[`${BASE_PATH}/react-npm-lib/keypress.gif`]} />
          {/* <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of stores, each packed with exclusive
            deals and discounts. It&apos;s like having a VIP pass to every sale
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
            neatly organized here. No more endless scrolling; just pick a
            category and get the best offers instantly.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <p className="font-mono mb-2">
            Powered by Vue.js, this bad boy allows us to keep the content
            dynamic and up-to-date. From flash sales to limited-time offers, my
            CMS ensures everything&apos;s live and relevant.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, I&apos;ve sprinkled in some extra magic like personalized deal
            recommendations, user-friendly search features, and a sleek,
            responsive design that works like a charm on any device.
          </p>
          <p className="font-mono mb-2">
            CouponLuxury isn&apos;t just a website; it&apos;s your personal
            deal-hunting assistant, ensuring you never miss out on a bargain!
          </p> */}
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: 'js-npm-lib-3d-tag-cloud',
    category: 'npm Library',
    title: 'JS 3D Tag Cloud',
    src: '/assets/projects-screenshots/js-npm-lib/3d-cloud-01.gif',
    screenshots: [],
    live: 'https://www.npmjs.com/package/svg-3d-tag-cloud',
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Svg3dTagCloud is a lightweight and user-friendly JavaScript library
            that empowers you to generate visually appealing 3D tag clouds using
            SVG (Scalable Vector Graphics). It offers effortless integration
            into your web projects, delivering an engaging way to present
            keyword lists or other textual data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Whether you&apos;re building a personal blog, portfolio, or
            e-commerce site, Svg3dTagCloud adds a touch of creativity and
            interactivity to your content.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/js-npm-lib/3d-cloud-01.gif`,
              `${BASE_PATH}/js-npm-lib/3d-cloud-02.gif`,
            ]}
          />
          {/* <TypographyH3 className="my-4 ">Stores</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of stores, each packed with exclusive
            deals and discounts. It&apos;s like having a VIP pass to every sale
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

          <p className="font-mono mb-2">
            Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
            neatly organized here. No more endless scrolling; just pick a
            category and get the best offers instantly.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
          <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
          <p className="font-mono mb-2">
            Powered by Vue.js, this bad boy allows us to keep the content
            dynamic and up-to-date. From flash sales to limited-time offers, my
            CMS ensures everything&apos;s live and relevant.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, I&apos;ve sprinkled in some extra magic like personalized deal
            recommendations, user-friendly search features, and a sleek,
            responsive design that works like a charm on any device.
          </p>
          <p className="font-mono mb-2">
            CouponLuxury isn&apos;t just a website; it&apos;s your personal
            deal-hunting assistant, ensuring you never miss out on a bargain!
          </p> */}
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    disabled: true,
    id: 'the-booking-desk',
    category: 'Travel',
    title: 'The Booking Desk',
    src: '/assets/projects-screenshots/the-booking-desk/landing.png',
    screenshots: ['1.png'],
    live: 'https://thebookingdesk.com/',
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk is your ultimate travel consultation hub, designed
            to turn your wanderlust dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog
            section has you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity
            CMS to manage all the content with ease, ensuring you always get the
            latest and greatest information.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on Lighthouse, The Booking Desk
            isn&apos;t just beautiful—it&apos;s built to perform. Whether
            you&apos;re planning your next adventure or just daydreaming, our
            site delivers a top-notch experience that&apos;s both informative
            and enjoyable.
          </p>
        </div>
      );
    },
  },
  {
    disabled: true,
    id: 'portfolio',
    category: 'Portfolio',
    title: 'My Portfolio',
    src: '/assets/projects-screenshots/portfolio/landing.png',
    screenshots: ['1.png'],
    live: '#',
    github: '#',
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{' '}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    disabled: true,
    id: 'ghostchat',
    category: 'Anonymous chat',
    title: 'GhostChat',
    src: '/assets/projects-screenshots/ghostchat/1.png',
    screenshots: ['1.png', '2.png', '3.png', '4.png'],
    live: '#',
    github: '#',
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ghostchat is your go-to spot for sending anonymous messages without
            leaving a trace. Powered by Supabase, it&apos;s all about keeping
            things low-key and secure. Whether you&apos;re sharing secrets,
            giving feedback, or just having some fun, Ghostchat ensures your
            identity stays hidden, while your voice is heard. Say what you want,
            without the worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    disabled: true,
    id: 'jra',
    category: 'Result analyzer',
    title: 'JNTUA Results Analyzer',
    src: '/assets/projects-screenshots/jra/1.png',
    screenshots: ['1.png'],
    live: '#',
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Search all your results using a single roll number, eliminating
              the tedious task of sifting through thousands of rows on the
              official site.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
