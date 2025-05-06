import { IonIcon } from '@ionic/react';
import { layersOutline, briefcaseOutline, rocketOutline } from 'ionicons/icons';

function Achievements() {
  return (
    <section className="achievements grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-[var(--accent-04)] p-6 gap-3 rounded-xl my-8 text-center">
      {[
        { icon: layersOutline, value: '20+', label: 'Website Templates', delay: 300 },
        { icon: briefcaseOutline, value: '1+', label: 'Years of Experience', delay: 600 },
        { icon: rocketOutline, value: '4+', label: 'Completed Projects', delay: 900 },
      ].map((achievement, index) => (
        <div key={index} data-aos="zoom-in-down" data-aos-delay={achievement.delay}>
          <h3 className="text-3xl">
            <IonIcon icon={achievement.icon} className="text-[var(--primary-color)] text-xl align-middle mr-2" />
            {achievement.value}
          </h3>
          <p className="text-[var(--accent-02)] text-sm">{achievement.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Achievements;