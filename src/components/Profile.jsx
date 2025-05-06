import { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { logoLinkedin, logoWhatsapp, logoInstagram, logoGithub, logoTwitter, fileTrayFullOutline, callOutline } from 'ionicons/icons';

function Profile() {
  useEffect(() => {
    const typed = new window.Typed('#typed', {
      strings: ['Front-End Web Developer', 'UI/UX Developer'],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 3000,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="box profile text-center text-lg sm:text-xl rounded-3xl bg-[var(--accent-03)]">
      <img src="/images/images1.jpg" alt="cover-img" className="header max-h-[30vh] w-full rounded-t-3xl object-cover" style={{ clipPath: 'polygon(100% 0, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 0)' }} />
      <img src="/images/images2.png" alt="front-img" className="img w-24 sm:w-36 -mt-12 sm:-mt-16 mx-auto border-8 border-[var(--accent-04)] rounded-[35px]" data-aos="zoom-in-down" data-aos-duration="2000" />
      <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl" data-aos="zoom-in-up" data-aos-duration="2000">Muhammad Faizan</h2>
      <p id="typed" className="colored text-[var(--primary-color)] mt-1 sm:mt-2 h-5 text-sm sm:text-base" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="800"></p>
      <ul className="list-none my-4 sm:my-8 flex justify-center gap-2 sm:gap-4">
        {[
          { href: 'https://www.linkedin.com/in/muhammad-faizan-2541132b8', icon: logoLinkedin },
          { href: 'https://wa.me/+923406044359', icon: logoWhatsapp },
          { href: 'https://www.instagram.com/fazii.963/', icon: logoInstagram },
          { href: 'https://Faizan418', icon: logoGithub },
          { href: 'https://x.com/mfaizan153945', icon: logoTwitter },
        ].map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <IonIcon icon={link.icon} className="text-2xl sm:text-3xl p-2 rounded-xl bg-[var(--accent-04)] text-[var(--accent-02)] hover:text-[var(--primary-color)] transition-colors duration-500" />
            </a>
          </li>
        ))}
      </ul>
      <div className="footer sticky bottom-0">
        <div className="divider rtl"></div>
        <table className="w-full pb-3 sm:pb-4">
          <tbody>
            <tr>
              <td className="p-2 text-sm sm:text-base">
                <a href="/resume.pdf" download="faizan'sResume" target="_blank" className="flex items-center justify-center gap-2 hover:text-[var(--primary-color)] transition-colors duration-500">
                  My Resume <IonIcon icon={fileTrayFullOutline} className="text-lg sm:text-xl" />
                </a>
              </td>
              <td className="p-2 text-sm sm:text-base">
                <a href="#contact" className="flex items-center justify-center gap-2 hover:text-[var(--primary-color)] transition-colors duration-500">
                  Contact Me <IonIcon icon={callOutline} className="text-lg sm:text-xl" />
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