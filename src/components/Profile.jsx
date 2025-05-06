import { useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, logoWhatsapp, logoInstagram, logoGithub, logoTwitter, fileTrayFullOutline, callOutline } from 'ionicons/icons';
import Typed from 'typed.js';

function Profile() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Front-End Web Developer', 'UI/UX Developer'],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 3000,
      showCursor: false,
      loop: true,
    };

    try {
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    } catch (error) {
      console.warn('Typed.js failed to initialize:', error);
    }
  }, []);

  return (
    <div className="box profile text-center text-base sm:text-lg rounded-2xl bg-[var(--accent-03)]">
      <img src="/images/images1.jpg" alt="cover-img" className="header max-h-[25vh] w-full rounded-t-2xl object-cover" style={{ clipPath: 'polygon(100% 0, 100% 75%, 85% 100%, 15% 100%, 0 75%, 0 0)' }} />
      <img src="/images/images2.png" alt="front-img" className="img w-20 sm:w-28 -mt-10 sm:-mt-14 mx-auto border-6 border-[var(--accent-04)] rounded-[30px]" data-aos="zoom-in-down" data-aos-duration="1500" />
      <h2 className="mt-2 sm:mt-3 text-lg sm:text-xl" data-aos="zoom-in-up" data-aos-duration="1500">Muhammad Faizan</h2>
      <p ref={typedRef} className="colored text-[var(--primary-color)] mt-1 h-5 text-xs sm:text-sm" data-aos="zoom-in-up" data-aos-duration="800" data-aos-delay="600">
        Front-End Web Developer
      </p>
      <ul className="list-none my-3 sm:my-6 flex justify-center gap-1 sm:gap-3">
        {[
          { href: 'https://www.linkedin.com/in/muhammad-faizan-2541132b8', icon: logoLinkedin },
          { href: 'https://wa.me/+923406044359', icon: logoWhatsapp },
          { href: 'https://www.instagram.com/fazii.963/', icon: logoInstagram },
          { href: 'https://github.com/Faizan418', icon: logoGithub },
          { href: 'https://x.com/mfaizan153945', icon: logoTwitter },
        ].map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <IonIcon icon={link.icon} className="text-xl sm:text-2xl p-1 sm:p-2 rounded-lg bg-[var(--accent-04)] text-[var(--accent-02)] hover:text-[var(--primary-color)] transition-colors duration-300" />
            </a>
          </li>
        ))}
      </ul>
      <div className="footer sticky bottom-0">
        <div className="divider rtl"></div>
        <table className="w-full pb-2 sm:pb-3">
          <tbody>
            <tr>
              <td className="p-1 sm:p-2 text-xs sm:text-sm">
                <a href="/resume.pdf" download="faizan'sResume" target="_blank" className="flex items-center justify-center gap-1 sm:gap-2 hover:text-[var(--primary-color)] transition-colors duration-300">
                  My Resume <IonIcon icon={fileTrayFullOutline} className="text-base sm:text-lg" />
                </a>
              </td>
              <td className="p-1 sm:p-2 text-xs sm:text-sm">
                <a href="#contact" className="flex items-center justify-center gap-1 sm:gap-2 hover:text-[var(--primary-color)] transition-colors duration-300">
                  Contact Me <IonIcon icon={callOutline} className="text-base sm:text-lg" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;