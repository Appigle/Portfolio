import { cn } from '@/lib/utils';
import Link from 'next/link';

const GithubContributions = () => {
  return (
    <section
      id="GithubContributions"
      className="max-w-7xl mx-auto md:h-[55vh] relative"
    >
      <Link href={'#GithubContributions'}>
        <h2
          className={cn(
            'bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16',
            'bg-gradient-to-b from-black/80 to-black/50',
            'dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32'
          )}
        >
          Contributions
        </h2>
      </Link>
      <a href="http://www.github.com/Appigle" className="flex justify-center">
        {/* <Image
          className="rounded-lg w-[100%] hover:scale-[1.05] transition-all hover:cursor-pointer"
          src="https://green-wall.leoku.dev/api/og/share/Appigle"
          alt="My contributions"
          width={1000}
          height={500}
        /> */}

        <picture>
          <source
            media="(prefers-color-scheme: light)"
            srcSet="https://github.com/Appigle/Appigle/raw/output/github-contribution-grid-snake-dark.svg"
          />
          <source
            media="(prefers-color-scheme: dark)"
            srcSet="https://github.com/Appigle/Appigle/raw/output/github-contribution-grid-snake.svg"
          />
          <img
            className="rounded-lg w-[100%] hover:scale-[1.05] transition-all hover:cursor-pointer hidden dark:block"
            alt="github-snake"
            src="https://github.com/Appigle/Appigle/raw/output/github-contribution-grid-snake.svg"
          />
          <img
            className="rounded-lg w-[100%] hover:scale-[1.05] transition-all hover:cursor-pointer dark:hidden"
            alt="github-snake"
            src="https://github.com/Appigle/Appigle/raw/output/github-contribution-grid-snake-dark.svg"
          />
        </picture>
      </a>
    </section>
  );
};
export default GithubContributions;
