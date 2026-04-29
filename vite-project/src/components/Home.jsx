import { motion } from 'framer-motion';
import { Server, PackageCheck, MonitorSmartphone, Cloud } from 'lucide-react';

import classes from '../modules/Home.module.scss';

const cards = [
  {
    title: 'SERVICES',
    icon: Server,
    text: 'Computers, versatile software, and networked data systems facilitate modern communication. At Pipeline, we ensure that applications and sensitive networks function smoothly and support you in your daily work.'
  },
  {
    title: 'PRODUCTS',
    icon: PackageCheck,
    text: 'Reliable hardware and software are the building blocks of a high-performance IT infrastructure. As a Pipeline sales partner, personal, comprehensive, and expert support is our top priority.'
  },
  {
    title: 'MEDIA SOLUTIONS',
    icon: MonitorSmartphone,
    text: 'Have you moved? Do you need the latest media technology? We provide individualized support and advice, offering customized solutions and continued support after installation.'
  },
  {
    title: 'CLOUD SOLUTIONS',
    icon: Cloud,
    text: 'Intelligent cloud solutions allow you to save costs and resources, simplify workflows, and maximize flexibility. We assist with data migration and cloud transitions.'
  }
];

const Home = () => {
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
          <span className={classes['eyebrow']}>
            IT Infrastructure • Security • Support
          </span>

          <h1>Comprehensive and customized IT solutions</h1>

          <p>
            We provide expert advice and create complete IT solutions from a reliable source.
          </p>

          <a href="#via-pipeline" className={classes['hero-link']}>
            Explore services
          </a>
        </motion.div>
      </section>

      <section className={classes['testimonial-strip']}>
        <div className={classes['testimonial-inner']}>
          <p>
            “The support of our IT systems has always been perfect and first-class throughout the many years of cooperation, during which very different tasks often had to be solved.”
          </p>
          <span>Lewang Architects</span>
        </div>
      </section>

      <section id="via-pipeline" className={classes['home']}>
        <div className={classes['container']}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={classes['title']}>VIA PIPELINE</h2>

            <p className={classes['intro']}>
              Pipeline, the consulting firm for IT infrastructure, security, service and support, was founded in 1993 by Roman Fäckl.
              We handle all tasks related to IT and its interfaces for you, from conception and installation to end-user support and the setup and operation of user services.
            </p>
          </motion.div>

          <div className={classes['grid']}>
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  className={classes['card']}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.025,
                    boxShadow: "0 16px 30px rgba(11, 77, 162, 0.15)"
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
                <span>Infrastructure overview</span>
                <strong>Online</strong>
              </div>

              <div className={classes['system-row']}>
                <span>Network security</span>
                <div><i></i></div>
              </div>

              <div className={classes['system-row']}>
                <span>Cloud services</span>
                <div><i></i></div>
              </div>

              <div className={classes['system-row']}>
                <span>End-user support</span>
                <div><i></i></div>
              </div>
            </div>

            <div className={classes['mini-grid']}>
              <div className={classes['mini-card']}>
                <span>01</span>
                <h3>Consulting</h3>
                <p>Vendor-neutral IT advice.</p>
              </div>

              <div className={classes['mini-card']}>
                <span>02</span>
                <h3>Security</h3>
                <p>Stable and protected systems.</p>
              </div>

              <div className={classes['mini-card']}>
                <span>03</span>
                <h3>Support</h3>
                <p>Long-term daily assistance.</p>
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
            <span className={classes['section-label']}>How Pipeline works</span>

            <h2>Holistic IT solutions, built independently of manufacturers.</h2>

            <p>
              Pipeline supports companies with reliable infrastructure, secure networks,
              cloud services, hardware, software, and long-term IT support.
            </p>

            <div className={classes['info-points']}>
              <div>
                <strong>Complete solutions</strong>
                <span>From consulting and planning to installation and support.</span>
              </div>

              <div>
                <strong>Independent advice</strong>
                <span>Vendor-neutral decisions based on what your business needs.</span>
              </div>

              <div>
                <strong>Reliable operation</strong>
                <span>Stable systems that keep daily work running smoothly.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;