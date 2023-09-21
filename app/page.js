import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import Header from '@/components/Header'
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Socials } from '@/components/Socials';

import React from "react";

export default function Home() {
  return (
    <>
      <main className="bg-slate-500 h-fit w-screen relative flex flex-col justify-center items-center overflow-hidden">
        <Header />
        {/**Header */}
        {/**HERO SECTION */}
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Socials />
        <Contact />
      </main>
    </>
  )
}


