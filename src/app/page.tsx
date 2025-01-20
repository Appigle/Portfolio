'use client';

import AnimatedBackground from '@/components/animated-background';
import ContactSection from '@/components/sections/contact';
import GithubContributions from '@/components/sections/github_contributions';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import SmoothScroll from '@/components/smooth-scroll';
import { cn } from '@/lib/utils';

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn('bg-slate-100 dark:bg-transparent')}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <GithubContributions />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
