
'use client';

import Hero from './components/Hero';
import Vision from './components/Vision';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Vision />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}
