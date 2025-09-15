import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Works from "./components/Works";
export default function Page() {
  return (
    <div className="flex flex-col min-h-[2000px] bg-bg2">
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Works/>
      <Contact />
      <Footer />
    </div>
  );
}
