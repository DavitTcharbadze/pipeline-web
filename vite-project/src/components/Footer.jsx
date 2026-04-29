import { Link } from 'react-router-dom';
import classes from '../modules/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer-container']}>

        <div className={classes.column}>
          <h3>Via pipeline</h3>
          <p>
            Pipeline, a consulting firm specializing in networks and server installations,
            was founded in 1993 by Roman Fäckl. We handle all tasks related to data
            systems and networks, from installation to end-user support.
          </p>
        </div>

        <div className={classes.column}>
          <h3>Solutions</h3>

          <Link to="/solutions/network-design">Network design and optimization</Link>
          <Link to="/solutions/advice-service">Advice and service</Link>
          <Link to="/solutions/hardware-software">Hardware and software sales</Link>
          <Link to="/solutions/security">Security concepts</Link>
          <Link to="/solutions/cloud">Cloud Solutions</Link>
        </div>

        <div className={classes.column}>
          <h3>Your contact</h3>
          <p>
            Pipeline DV-Beratung GmbH<br />
            Aschauer Straße 30<br />
            D-81549 Munich<br />
            tel +49 89 6244740<br />
            mail info@pipeline.gmbh
          </p>
        </div>

        <div className={classes.column}>
          <h3>Legal</h3>

          <Link to="/imprint">Imprint</Link>
          <Link to="/data-protection">Data protection</Link>

          <span className={classes.copy}>
            © Pipeline DV-Beratung GmbH
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;