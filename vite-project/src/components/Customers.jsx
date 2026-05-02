import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import classes from '../modules/Customers.module.scss';

const customerImages = import.meta.glob('../assets/customers/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

const formatName = (path) => {
  const fileName = path.split('/').pop().split('.')[0];

  return fileName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const customers = Object.entries(customerImages).map(([path, img]) => ({
  name: formatName(path),
  img,
}));

const Customers = ({ t }) => {
  const data = t.customersPage;

  return (
    <section className={classes['customers-page']}>
      <div className={classes['container']}>
        <motion.div
          className={classes['header']}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1>{data.hero.title}</h1>

          <div className={classes['text']}>
            <p>{data.hero.text[0]}</p>
            <p>{data.hero.text[1]}</p>
            <p>
              {data.hero.text[2]}
              <Link to="/contact">{data.hero.linkText}</Link>
              {data.hero.afterLink}
            </p>
          </div>
        </motion.div>

        <div className={classes['grid']}>
          {customers.map((customer, i) => (
            <motion.div
              key={customer.name}
              className={classes['card']}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.02 }}
            >
              <div className={classes['logo-wrapper']}>
                <img src={customer.img} alt={customer.name} />
              </div>

              <span className={classes['label']}>{customer.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;