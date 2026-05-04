import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Network,
  Headset,
  MonitorCog,
  ShieldCheck,
  Cloud,
  BadgeDollarSign,
} from 'lucide-react';
import classes from '../modules/Solutions.module.scss';
import ParticleField from './ParticleField';

const sectionIds = [
  'network-design',
  'advice-service',
  'hardware-software',
  'security',
  'cloud',
  'leasing',
];

const sectionIcons = [
  Network,
  Headset,
  MonitorCog,
  ShieldCheck,
  Cloud,
  BadgeDollarSign,
];

const Solutions = ({ t }) => {
  const data = t.solutionsPage;
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        setActiveSection(id);

        setTimeout(() => {
          setActiveSection('');
        }, 1200);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <section className={classes['page']}>
      <ParticleField variant="dark" opacity={0.55} />
      <div className={classes['glow-2']}></div>

      <div className={classes['diagram-bg']}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={classes['container']}>
        <motion.div
          className={classes['hero']}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className={classes['eyebrow']}>Solutions</span>
          <h1>{data.hero.title}</h1>
          <p>{data.hero.subtitle}</p>
        </motion.div>

        <div className={classes['sections']}>
          {data.sections.slice(0, 6).map((section, index) => {
            const Icon = sectionIcons[index];

            return (
              <motion.div
                id={sectionIds[index]}
                key={sectionIds[index]}
                className={`${classes['section']} ${activeSection === sectionIds[index] ? classes['active-section'] : ''
                  }`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45 }}
              >
                <div className={classes['section-top']}>
                  <div className={classes['icon-box']}>
                    <Icon size={23} />
                  </div>

                  <span className={classes['section-number']}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2>{section.title}</h2>

                {section.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.section
        id="pipeline-support"
        className={`${classes['support-section']} ${activeSection === 'pipeline-support' ? classes['active-support'] : ''
          }`}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className={classes['support-container']}>
          <div className={classes['support-content']}>
            <span>{data.support.kicker}</span>
            <h2>{data.support.title}</h2>

            {data.support.text.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className={classes['support-downloads']}>
            <p>{data.support.downloadText}</p>

            <a href="https://download.teamviewer.com/download/TeamViewerQS.exe"
              target="_blank"
              rel="noopener noreferrer" className={classes['download-button']}>
              → {data.support.windows}
            </a>

            <a href="https://download.teamviewer.com/download/TeamViewerQS.dmg"
              target="_blank"
              rel="noopener noreferrer"
              className={classes['download-button']}>
              → {data.support.mac}
            </a>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Solutions;