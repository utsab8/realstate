import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Properties from '../components/Properties';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Properties />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
