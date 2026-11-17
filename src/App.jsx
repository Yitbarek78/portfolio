import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

import { skills, services, projects } from "./data/content";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-28">
        <Hero
          firstName="Yitbarek"
          lastName="Welde"
          role="Frontend Developer 💻"
          intro="I’m a frontend developer who builds fast, responsive and accessible websites with HTML, CSS, JavaScript and React."
        />

        <About skills={skills} />
        <Services items={services} />
        <Portfolio items={projects} />
      </main>
    </>
  );
}

export default App;
