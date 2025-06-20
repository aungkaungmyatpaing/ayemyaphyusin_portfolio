import Navbar from "./_component/Navbar";
import Hero from "./_component/Hero";
import About from "./_component/About";
import Experience from "./_component/Experience";
import Skill from "./_component/Skill";
import Contact from "./_component/Contact";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
