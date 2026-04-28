import classes from '../modules/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes['footer']}>
      <div className={classes['footer-container']}>
        <div>
          <h3>Via pipeline</h3>
          <p>
            Pipeline, a consulting firm specializing in networks and server installations, was founded in 1993 by Roman Fäckl.
            We handle all tasks related to data systems and networks, from installation to end-user support.
          </p>
        </div>

        <div>
          <h3>Solutions</h3>
          <ul>
            <li>Network design and optimization</li>
            <li>Advice and service</li>
            <li>Hardware and software sales</li>
            <li>Security concepts</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        <div>
          <h3>Your contact</h3>
          <p>
            Pipeline DV-Beratung GmbH<br />
            Aschauer Straße 30<br />
            D-81549 Munich
          </p>
          <p>tel +49 89 6244740</p>
          <p>mail info@pipeline.gmbh</p>
        </div>

        <div>
          <h3>Legal</h3>
          <ul>
            <li>imprint</li>
            <li>Data protection</li>
          </ul>
          <p>Copyright 2022 Pipeline DV-Beratung GmbH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;