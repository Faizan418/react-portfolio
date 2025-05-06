function Contributions() {
    return (
      <div>
        <h2 className="text-2xl sm:text-3xl">
          My <span className="colored text-[var(--primary-color)]">Contributions</span>
        </h2>
        <div className="divider ltr"></div>
        <div className="my-4 sm:my-6" data-aos="fade-up" data-aos-duration="800">
          <p className="text-xs sm:text-sm text-[var(--accent-02)] mb-2 sm:mb-3">
            I actively contribute to open-source projects and personal repositories on GitHub. Check out my profile for recent contributions!
          </p>
          <a
            href="https://github.com/Faizan418"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-[var(--primary-color)] hover:underline"
          >
            Visit my GitHub Profile
          </a>
        </div>
      </div>
    );
  }
  
  export default Contributions;