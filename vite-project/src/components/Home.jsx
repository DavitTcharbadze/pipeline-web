import { motion } from 'framer-motion';
import {
  Server,
  PackageCheck,
  MonitorSmartphone,
  Cloud,
  ShieldCheck,
  Network,
  ArrowRight,
} from 'lucide-react';
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
        <div className={classes['hero-bg']}></div>

        <div className={classes['hero-container']}>
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
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className={classes['hero-visual']}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className={classes['visual-card']}>
              <div className={classes['visual-top']}>
                <span>Pipeline Systems</span>
                <strong>Online</strong>
              </div>

              <div className={classes['network-map']}>
                <div className={classes['core-node']}>
                  <Network size={28} />
                </div>

                <span className={classes['orbit-node']}></span>
                <span className={classes['orbit-node']}></span>
                <span className={classes['orbit-node']}></span>
              </div>

              <div className={classes['visual-stats']}>
                <div>
                  <ShieldCheck size={18} />
                  <span>Security</span>
                </div>

                <div>
                  <Cloud size={18} />
                  <span>Cloud</span>
                </div>

                <div>
                  <Server size={18} />
                  <span>Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={classes['proof-strip']}>
        <p>{t.testimonial.text}</p>
        <span>{t.testimonial.author}</span>
      </section>

      <section id="via-pipeline" className={classes['home']}>
        <div className={classes['glow-2']}></div>

        <div className={classes['container']}>
          <motion.div
            className={classes['section-head']}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <span>{t.info.label}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.text}</p>
          </motion.div>

          <div className={classes['service-layout']}>
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  className={classes['service-card']}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <div className={classes['card-top']}>
                    <div className={classes['card-icon']}>
                      <Icon size={23} />
                    </div>

                    <span>{String(index + 1).padStart(2, '0')}</span>
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
            className={classes['info-content']}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span className={classes['section-label']}>{t.info.label}</span>
            <h2>{t.info.title}</h2>
            <p>{t.info.text}</p>
          </motion.div>

          <motion.div
            className={classes['process-grid']}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className={classes['process-card']}>
              <span>01</span>
              <h3>{t.info.points.complete.title}</h3>
              <p>{t.info.points.complete.text}</p>
            </div>

            <div className={classes['process-card']}>
              <span>02</span>
              <h3>{t.info.points.independent.title}</h3>
              <p>{t.info.points.independent.text}</p>
            </div>

            <div className={classes['process-card']}>
              <span>03</span>
              <h3>{t.info.points.reliable.title}</h3>
              <p>{t.info.points.reliable.text}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;