import { Link } from 'react-router-dom';
import classes from '../modules/Footer.module.scss';

const Footer = ({ t }) => {
  if (!t || !t.footer || !t.solutions) return null;

  return (
    <footer className={classes['footer']}>
      <div className={classes['footer-glow']}></div>

      <div className={classes['footer-top']}>
        <div>
          <span className={classes['eyebrow']}>Pipeline DV-Beratung GmbH</span>
          <h2>{t.footer.aboutTitle}</h2>
        </div>

        <Link to="/contact" className={classes['footer-cta']}>
          {t.nav.contact}
        </Link>
      </div>

      <div className={classes['footer-container']}>
        <div className={classes['column-large']}>
          <p>{t.footer.aboutText}</p>
        </div>

        <div className={classes['column']}>
          <h3>{t.footer.solutionsTitle}</h3>

          <Link to="/solutions#network-design">{t.solutions.network}</Link>
          <Link to="/solutions#advice-service">{t.solutions.advice}</Link>
          <Link to="/solutions#hardware-software">{t.solutions.hardware}</Link>
          <Link to="/solutions#security">{t.solutions.security}</Link>
          <Link to="/solutions#cloud">{t.solutions.cloud}</Link>
          <Link to="/solutions#leasing">{t.solutions.leasing}</Link>
        </div>

        <div className={classes['column']}>
          <h3>{t.footer.contactTitle}</h3>

          <p>
            Pipeline DV-Beratung GmbH<br />

            <a
              href="https://www.google.com/maps/place/Aschauer+Str.+30,+81549+M%C3%BCnchen,+Germany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aschauer Straße 30<br />
              D-81549 München
            </a>
            <br />

            tel <a href="tel:+49896244740">+49 89 6244740</a><br />
            fax +49 89 62447423<br />
            mail <a href="mailto:info@pipeline.gmbh">info@pipeline.gmbh</a>
          </p>
        </div>

        <div className={classes['column']}>
          <h3>{t.footer.legalTitle}</h3>

          <Link to="/imprint">{t.footer.imprint}</Link>
          <Link to="/data-protection">{t.footer.dataProtection}</Link>
        </div>
      </div>

      <div className={classes['footer-bottom']}>
        <span>{t.footer.copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;