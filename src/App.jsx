import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/header";
// import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <About />
      <Projects />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
