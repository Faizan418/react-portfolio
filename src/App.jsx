import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contributions from './components/Contributions';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container grid gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:grid-cols-[100px_1fr_2fr] md:grid-cols-[100px_1fr] sm:grid-cols-1">
      <Navbar />
      <Profile />
      <div className="box content p-4 sm:p-6 rounded-3xl bg-[var(--accent-03)] md:col-span-2 sm:col-span-1">
        <About />
        <Achievements />
        <Skills />
        <Contributions />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;