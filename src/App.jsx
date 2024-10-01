import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About'
import Technologies from './Components/Technologies/Technologies';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="relative bg-cover bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen selection:bg-cyan-200">
      <NavBar />
      <div className="pt-5"> {/* Add padding to avoid overlap with fixed navbar */}
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
