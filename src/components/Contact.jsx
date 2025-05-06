function Contact() {
    return (
      <div>
        <h1 id="contact" className="text-4xl">
          Contact <span className="colored text-[var(--primary-color)]">Me</span>
        </h1>
        <div className="divider ltr"></div>
        <section className="my-8">
          <iframe
            className="map w-full h-72 rounded-xl p-1 shadow-[inset_0_0_0_3px_rgba(3,102,214,0.3)] invert-[90%] sepia-[100%] hue-rotate-[150deg] saturate-[100%] lg:invert-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.774329162915!2d67.18592927414169!3d24.878773844526794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339fe82b48417%3A0xd40b075ee3f123c4!2sMalir%2015%20Flyover%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1735897977442!5m2!1sen!2s"
            frameBorder="0"
          ></iframe>
          <form action="https://formspree.io/f/xrbenwdj" method="POST" className="contact grid lg:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
            <div className="content-first grid grid-rows-3 gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="First Name..."
                required
                className="input w-full bg-[var(--accent-04)] border border-[var(--accent-04)] text-[var(--accent-02)] rounded-md py-2 px-3 outline-none hover:border-[var(--primary-color)] focus:border-[var(--primary-color)] transition-colors duration-500 placeholder-[var(--accent-03)] placeholder-opacity-50"
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name..."
                required
                className="input w-full bg-[var(--accent-04)] border border-[var(--accent-04)] text-[var(--accent-02)] rounded-md py-2 px-3 outline-none hover:border-[var(--primary-color)] focus:border-[var(--primary-color)] transition-colors duration-500 placeholder-[var(--accent-03)] placeholder-opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="'example@gmail.com'"
                required
                className="input w-full bg-[var(--accent-04)] border border-[var(--accent-04)] text-[var(--accent-02)] rounded-md py-2 px-3 outline-none hover:border-[var(--primary-color)] focus:border-[var(--primary-color)] transition-colors duration-500 placeholder-[var(--accent-03)] placeholder-opacity-50"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Write Something..."
                required
                rows="4"
                className="input w-full bg-[var(--accent-04)] border border-[var(--accent-04)] text-[var(--accent-02)] rounded-md py-2 px-3 outline-none hover:border-[var(--primary-color)] focus:border-[var(--primary-color)] transition-colors duration-500 placeholder-[var(--accent-03)] placeholder-opacity-50"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="submit bg-[var(--primary-color)] text-white border-none py-2 px-12 rounded-md hover:brightness-80 transition duration-500">
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
  
  export default Contact;