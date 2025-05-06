import { IonIcon } from '@ionic/react';
import { linkOutline } from 'ionicons/icons';

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      image: '/images/project1.jpg',
      description: 'A full-stack e-commerce site built with React and Node.js.',
      link: 'https://github.com/Faizan418/ecommerce',
    },
    {
      title: 'Portfolio Website',
      image: '/images/project2.jpg',
      description: 'This very portfolio showcasing my skills and projects.',
      link: 'https://github.com/Faizan418/portfolio',
    },
    {
      title: 'Task Manager',
      image: '/images/project3.jpg',
      description: 'A task management app with localStorage persistence.',
      link: 'https://github.com/Faizan418/task-manager',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl">
        My <span className="colored text-[var(--primary-color)]">Projects</span>
      </h2>
      <div className="divider ltr"></div>
      <section className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-6 sm:my-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-[var(--accent-04)] p-3 sm:p-4 rounded-lg border-2 border-[var(--accent-04)] hover:border-[var(--primary-color)] transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2 sm:mb-3"
            />
            <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
            <p className="text-xs sm:text-sm text-[var(--accent-02)] mb-2 sm:mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[var(--primary-color)] hover:underline"
            >
              View Project <IonIcon icon={linkOutline} className="text-base sm:text-lg" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Projects;