import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import HeadSection from "../components/HeadSection";
export default function Home() {
  return (
    <>
      <HeadSection title="Ashish" />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
