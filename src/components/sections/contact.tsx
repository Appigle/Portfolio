'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { config } from '@/data/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import ContactForm from '../ContactForm';
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <Link href={'#contact'}>
        <h2
          className={cn(
            'bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16',
            'bg-gradient-to-b from-black/80 to-black/50',
            'dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50'
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999]">
        <Card className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20">
          <CardHeader>
            <CardTitle className="text-4xl">Contact Form</CardTitle>
            <CardDescription>
              Please contact me directly at{' '}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg hover:underline"
              >
                {config.email.replace(/@/g, '@').toLocaleUpperCase()}
              </a>{' '}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
