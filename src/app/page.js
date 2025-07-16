import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
