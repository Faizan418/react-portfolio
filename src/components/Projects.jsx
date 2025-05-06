function Projects() {
    const projects = [
      { href: 'https://faizan418-hackathon-project.vercel.app/', img: '/images/project1.PNG', title: 'Resume Builder', area: 'p1' },
      { href: 'https://mile3-project.vercel.app/', img: '/images/project2.PNG', title: 'E-commerce Cycle Shop /UI', area: 'p2' },
      { href: 'https://password-genrator-neon.vercel.app/', img: '/images/project3.PNG', title: 'Password Generator', area: 'p3' },
      { href: 'https://pak-wheel-web-clone.vercel.app/', img: '/images/project4.PNG', title: 'Pak Wheel Web/UI', area: 'p6' },
      { href: 'https://mile3-assig.vercel.app/', img: '/images/project8.PNG', title: 'Blog Web', area: 'p5' },
      { href: 'https://quiz-app-silk-sigma.vercel.app/login.html', img: '/images/project6.PNG', title: 'Quiz App', area: 'p4' },
      { href: 'https://prepration-hackathon-q2.vercel.app/', img: '/images/project7.PNG', title: 'E-commerce/UI', area: 'p7' },
      { href: 'https://q2-final-hackathon.vercel.app/landing', img: '/images/project5.PNG', title: 'Full E-Commerce Website', area: 'p8' },
      { href: 'https://amazon-clone-two-topaz.vercel.app/home.html', img: '/images/project9.PNG', title: 'Amazon E-Commerce Website', area: 'p9' },
      { href: 'https://cycle-react-shop.vercel.app/', img: '/images/project10.PNG', title: 'E-Commerce', area: 'p10' },
    ];
  
    return (
      <div>
        <h1 id="projects" className="text-4xl">
          My <span className="colored text-[var(--primary-color)]">Projects</span>
        </h1>
        <div className="divider ltr"></div>
        <section className="projects grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-8" style={{
          gridTemplateAreas: `
            "p10 p10 p10"
            "p1 p2 p2"
            "p9 p9 p9"
            "p3 p4 p5"
            "p3 p6 p6"
            "p7 p8 p8"
          `,
        }}>
          {projects.map((project, index) => (
            <div key={index} className={`relative rounded-xl overflow-hidden cursor-pointer`} style={{ gridArea: project.area }}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={`project${index + 1}`} className="w-full h-full object-cover transition duration-500 hover:brightness-50" />
                <h3 className="absolute inset-0 m-auto w-fit h-fit opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-70 p-8 text-white lg:text-[var(--accent-04)]">
                  Project <span className="colored text-[var(--primary-color)]">{project.title}</span>
                </h3>
              </a>
            </div>
          ))}
        </section>
      </div>
    );
  }
  
  export default Projects;