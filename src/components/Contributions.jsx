function Contributions() {
    return (
      <div>
        <h1 className="text-4xl">
          My <span className="colored text-[var(--primary-color)]">Contributions</span>
        </h1>
        <div className="divider ltr"></div>
        <section className="contribution grid grid-cols-1 border-2 border-[var(--accent-04)] rounded-xl p-5">
          <div className="wrapper text-center">
            <img src="/assets/snake.svg" alt="Snake animation" className="w-full" />
          </div>
        </section>
      </div>
    );
  }
  
  export default Contributions;