import Image from 'next/image';

const GithubContributions = () => {
  return (
    <div className="flex justify-center w-full relative">
      <a href="http://www.github.com/Appigle">
        <Image
          className="rounded-lg w-[100%] hover:scale-[1.05] transition-all hover:cursor-pointer"
          src="https://green-wall.leoku.dev/api/og/share/Appigle"
          alt="My contributions"
          width={1000}
          height={500}
        />
      </a>
    </div>
  );
};
export default GithubContributions;
