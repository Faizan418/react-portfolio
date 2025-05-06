import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { sunnyOutline, moonOutline, personCircleOutline, fileTrayFullOutline, layersOutline, paperPlaneOutline } from 'ionicons/icons';

function Navbar() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    document.body.classList.toggle('light');
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="navbar grid gap-2 text-center sticky top-8 z-10 font-medium uppercase text-[var(--accent-02)] sm:grid-cols-1">
      <div className="box theme p-4 sm:p-6 rounded-3xl bg-[var(--accent Directed structure with multiple branches and sub-branches, resembling a tree or flowchart, with nodes connected by lines to represent relationships or processes. -03)]" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
        <div className="item cursor-pointer" onClick={toggleTheme}>
          <IonIcon icon={sunnyOutline} className={`text-2xl sm:text-3xl ${isLightTheme ? 'hidden' : 'block'}`} />
          <IonIcon icon={moonOutline} className={`text-2xl sm:text-3xl ${isLightTheme ? 'block' : 'hidden'}`} />
        </div>
      </div>
      <div className="box nav grid grid-cols-4 sm:grid-cols-4 gap-2 p-2 rounded-3xl bg-[var(--accent-03)]">
        {[
          { href: '#about', icon: personCircleOutline, label: 'about', delay: 200 },
          { href: '/resume.pdf', icon: fileTrayFullOutline, label: 'resume', target: '_blank', delay: 400 },
          { href: '#projects', icon: layersOutline, label: 'projects', delay: 600 },
          { href: '#contact', icon: paperPlaneOutline, label: 'contact', delay: 800 },
        ].map((item, index) => (
          <div
            key={item.label}
            className={`item flex flex-col items-center p-2 sm:p-4 cursor-pointer hover:text-[var(--primary-color)] ${activeItem === item.label ? 'text-[var(--primary-color)]' : ''}`}
            onClick={() => handleItemClick(item.label)}
            data-aos="zoom-out-up"
            data-aos-delay={item.delay}
          >
            <a href={item.href} target={item.target} className="flex flex-col items-center">
              <IonIcon icon={item.icon} className="text-2xl sm:text-3xl" />
              <p className="text-xs sm:text-sm mt-1">{item.label}</p>
            </a>
            <div className="divider rtl"></div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;