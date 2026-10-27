import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Strengths from "./sections/Strengths";
import Projects from "./sections/Projects";
import Approach from "./sections/Approach";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Strengths />
        <Projects />
        <Approach />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
