function About() {
    return (
      <div>
        <h2 className="text-2xl sm:text-3xl">
          About <span className="colored text-[var(--primary-color)]">Me</span>
        </h2>
        <div className="divider ltr"></div>
        <p className="text-xs sm:text-sm text-[var(--accent-02)] my-4 sm:my-6" data-aos="fade-up" data-aos-duration="800">
          Hi, I'm Muhammad Faizan, a passionate Front-End Web Developer and UI/UX enthusiast. I specialize in building responsive, user-friendly web applications using React, Tailwind CSS, and modern JavaScript frameworks. With a keen eye for design and a love for coding, I strive to create seamless digital experiences.
        </p>
        <p className="text-xs sm:text-sm text-[var(--accent-02)] my-4 sm:my-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          I have experience in HTML, CSS, JavaScript, TypeScript, and more, and I'm always learning new technologies to stay ahead in the ever-evolving tech world. Check out my projects and feel free to get in touch!
        </p>
      </div>
    );
  }
  
  export default About;