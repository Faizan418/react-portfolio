function Achievements() {
    const achievements = [
      { title: 'React Certification', issuer: 'Coursera', year: '2024' },
      { title: 'UI/UX Design Course', issuer: 'Udemy', year: '2023' },
      { title: 'Hackathon Winner', issuer: 'Local Tech Community', year: '2023' },
    ];
  
    return (
      <div>
        <h2 className="text-2xl sm:text-3xl">
          My <span className="colored text-[var(--primary-color)]">Achievements</span>
        </h2>
        <div className="divider ltr"></div>
        <ul className="list-none my-4 sm:my-6 space-y-2 sm:space-y-3">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-xs sm:text-sm text-[var(--accent-02)] p-2 sm:p-3 bg-[var(--accent-04)] rounded-lg"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 200}
            >
              <strong>{achievement.title}</strong> - {achievement.issuer} ({achievement.year})
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Achievements;