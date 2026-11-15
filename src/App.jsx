import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import { skills, services } from "./data/content";

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
      </main>
    </>
  );
}

export default App;
