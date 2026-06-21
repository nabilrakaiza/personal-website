import Hero from './components/Hero';
import AboutShort from './components/AboutShort';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutShort />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
