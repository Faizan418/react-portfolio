function Contact() {
    return (
      <div>
        <h2 className="text-2xl sm:text-3xl">
          Contact <span className="colored text-[var(--primary-color)]">Me</span>
        </h2>
        <div className="divider ltr"></div>
        <form
          action="https://formspree.io/f/xrbenwdj"
          method="POST"
          className="my-4 sm:my-6 flex flex-col gap-3 sm:gap-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 p-2 sm:p-3 rounded-lg border border-[var(--accent-02)] bg-[var(--accent-04)] text-xs sm:text-sm text-[var(--accent-01)] focus:outline-none focus:border-[var(--primary-color)]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 p-2 sm:p-3 rounded-lg border border-[var(--accent-02)] bg-[var(--accent-04)] text-xs sm:text-sm text-[var(--accent-01)] focus:outline-none focus:border-[var(--primary-color)]"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-2 sm:p-3 rounded-lg border border-[var(--accent-02)] bg-[var(--accent-04)] text-xs sm:text-sm text-[var(--accent-01)] focus:outline-none focus:border-[var(--primary-color)]"
            required
          ></textarea>
          <button
            type="submit"
            className="p-2 sm:p-3 bg-[var(--primary-color)] text-[var(--accent-03)] rounded-lg text-xs sm:text-sm hover:bg-[var(--accent-02)] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;