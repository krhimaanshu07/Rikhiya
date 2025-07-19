import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Blog from "../components/sections/blog";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
