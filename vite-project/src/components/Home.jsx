import { motion } from 'framer-motion';
import { Server, PackageCheck, MonitorSmartphone, Cloud } from 'lucide-react';
import classes from '../modules/Home.module.scss';

const Home = ({ t }) => {
  const cards = [
    {
      title: t.cards.services.title,
      icon: Server,
      text: t.cards.services.text,
    },
    {
      title: t.cards.products.title,
      icon: PackageCheck,
      text: t.cards.products.text,
    },
    {
      title: t.cards.media.title,
      icon: MonitorSmartphone,
      text: t.cards.media.text,
    },
    {
      title: t.cards.cloud.title,
      icon: Cloud,
      text: t.cards.cloud.text,
    },
  ];

  return (
    <>
      <section className={classes['hero']}>
        <div className={classes['hero-glow']}></div>

        <motion.div
          className={classes['hero-content']}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className={classes['eyebrow']}>{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.text}</p>

          <a href="#via-pipeline" className={classes['hero-link']}>
            {t.hero.button}
          </a>
        </motion.div>
      </section>

      <section className={classes['testimonial-strip']}>
        <div className={classes['testimonial-inner']}>
          <p>{t.testimonial.text}</p>
          <span>{t.testimonial.author}</span>
        </div>
      </section>

      <section id="via-pipeline" className={classes['home']}>
        <div className={classes['glow-2']}></div>

        <div className={classes['container']}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={classes['title']}>VIA PIPELINE</h2>
            <p className={classes['intro']}>{t.about.text}</p>
          </motion.div>

          <div className={classes['grid']}>
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  className={classes['card']}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.025,
                    boxShadow: '0 16px 30px rgba(11, 77, 162, 0.15)',
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className={classes['card-icon']}>
                    <Icon size={24} />
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={classes['info-section']}>
        <div className={classes['glow-2']}></div>

        <div className={classes['info-container']}>
          <motion.div
            className={classes['info-panel']}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className={classes['panel-orbit']}>
              <span className={classes['node']}></span>
              <span className={classes['node']}></span>
              <span className={classes['node']}></span>
            </div>

            <div className={classes['system-card']}>
              <div className={classes['system-header']}>
                <span>{t.panel.overview}</span>
                <strong>{t.panel.status}</strong>
              </div>

              <div className={classes['system-row']}>
                <span>{t.panel.network}</span>
                <div><i></i></div>
              </div>

              <div className={classes['system-row']}>
                <span>{t.panel.cloud}</span>
                <div><i></i></div>
              </div>

              <div className={classes['system-row']}>
                <span>{t.panel.support}</span>
                <div><i></i></div>
              </div>
            </div>

            <div className={classes['mini-grid']}>
              <div className={classes['mini-card']}>
                <span>01</span>
                <h3>{t.panel.consultingTitle}</h3>
                <p>{t.panel.consultingText}</p>
              </div>

              <div className={classes['mini-card']}>
                <span>02</span>
                <h3>{t.panel.securityTitle}</h3>
                <p>{t.panel.securityText}</p>
              </div>

              <div className={classes['mini-card']}>
                <span>03</span>
                <h3>{t.panel.supportTitle}</h3>
                <p>{t.panel.supportText}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={classes['info-content']}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span className={classes['section-label']}>{t.info.label}</span>
            <h2>{t.info.title}</h2>
            <p>{t.info.text}</p>

            <div className={classes['info-points']}>
              <div>
                <strong>{t.info.points.complete.title}</strong>
                <span>{t.info.points.complete.text}</span>
              </div>

              <div>
                <strong>{t.info.points.independent.title}</strong>
                <span>{t.info.points.independent.text}</span>
              </div>

              <div>
                <strong>{t.info.points.reliable.title}</strong>
                <span>{t.info.points.reliable.text}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;