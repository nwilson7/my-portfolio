import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Navbar />
      <section id="about-me" className="h-screen">
        <h1>About me Section</h1>
      </section>
      <section id="skills" className="h-screen">
        <h1>Skills section</h1>
      </section>
      <section id="projects" className="h-screen">
        <Projects />
      </section>
      <section id="contact" className="h-screen">
        <h1>Contact me section</h1>
      </section>
    </div>
  );
}

export default App;
