'use client';
import { Inter } from '@next/font/google';
import { Header } from '@/components/Header';
import { About } from '@/components/Content/About';
import { Experience } from '@/components/Content/Experience';
import { Work } from '@/components/Content/Work';
import { Contact } from '@/components/Content/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <body className={`${inter.className} bg-backgroundDefault h-full`}>
      <Header/>
      <div id={'content'}>
        <About/>
        <Experience/>
        <Work/>
        <Contact/>
      </div>
    </body>
  );
}
