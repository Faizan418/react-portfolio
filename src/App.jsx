import Navbar from './components/Navbar';
     import Profile from './components/Profile';
     import About from './components/About';
     import Achievements from './components/Achievements';
     import Skills from './components/Skills';
     import Contributions from './components/Contributions';
     import Projects from './components/Projects';
     import Contact from './components/Contact';

     function App() {
       return (
         <div className="container grid gap-3 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 lg:grid-cols-[80px_1fr_2fr] md:grid-cols-[80px_1fr] grid-cols-1">
          
           <Navbar />
           <Profile />
           <div className="box content p-3 sm:p-4 lg:p-5 rounded-2xl bg-[var(--accent-03)] md:col-span-2 col-span-1">
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