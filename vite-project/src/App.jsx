import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { translations } from './data/translations';

import classes from './modules/App.module.scss';
import logo from './assets/logo.svg';
import gbFlag from './assets/flags/gb.svg';
import deFlag from './assets/flags/de.svg';

import Home from './components/Home';
import Solutions from './components/Solutions';
import ITCheck from './components/ITCheck';
import Partners from './components/Partners';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;

    // optional: detect browser language on first visit
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('de') ? 'de' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const location = useLocation();
  const t = translations[language];

  const hideCallButton =
    location.pathname === '/contact' ||
    location.pathname === '/partners' ||
    location.pathname === '/customers';

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes['main-wrapper']}>
      <ScrollToTop />

      <nav className={`${classes['navbar']} ${menuOpen ? classes['open'] : ''}`}>
        <div className={classes['navbar-container']}>
          <Link to="/" className={classes['navbar-brand']} onClick={closeMenu}>
            <img src={logo} alt="Pipeline Logo" className={classes['logo']} />
          </Link>

          <button
            className={classes['navbar-toggler']}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={classes['navbar-toggler-icon']}></span>
          </button>

          <div className={classes['navbar-collapse']}>
            <ul className={classes['navbar-nav']}>
              <li className={classes['nav-item']}>
                <Link to="/" className={classes['nav-link']} onClick={closeMenu}>
                  {t.nav.home}
                </Link>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/solutions" className={classes['nav-link']} onClick={closeMenu}>
                  {t.nav.solutions}
                </Link>

                <ul className={classes['dropdown-menu']}>
                  <li><Link to="/solutions#network-design" onClick={closeMenu}>{t.solutions.network}</Link></li>
                  <li><Link to="/solutions#advice-service" onClick={closeMenu}>{t.solutions.advice}</Link></li>
                  <li><Link to="/solutions#hardware-software" onClick={closeMenu}>{t.solutions.hardware}</Link></li>
                  <li><Link to="/solutions#security" onClick={closeMenu}>{t.solutions.security}</Link></li>
                  <li><Link to="/solutions#cloud" onClick={closeMenu}>{t.solutions.cloud}</Link></li>
                  <li><Link to="/solutions#leasing" onClick={closeMenu}>{t.solutions.leasing}</Link></li>
                  <li><Link to="/solutions#pipeline-support" onClick={closeMenu}>{t.solutions.support}</Link></li>
                </ul>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/it-check" className={classes['nav-link']} onClick={closeMenu}>
                  {t.nav.itCheck}
                </Link>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/partners" className={classes['nav-link']} onClick={closeMenu}>
                  {t.nav.partners}
                </Link>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/customers" className={classes['nav-link']} onClick={closeMenu}>
                  {t.nav.customers}
                </Link>
              </li>
            </ul>

            <div className={classes['nav-actions']}>
              <Link to="/contact" className={classes['nav-cta']} onClick={closeMenu}>
                {t.nav.contact}
              </Link>

              <button
                className={classes['language-switch']}
                onClick={() => setLanguage((prev) => (prev === 'en' ? 'de' : 'en'))}
                aria-label="Switch language"
              >
                <img
                  src={language === 'en' ? gbFlag : deFlag}
                  alt={language === 'en' ? 'English' : 'Deutsch'}
                />
                <span>{language === 'en' ? 'EN' : 'DE'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/solutions" element={<Solutions t={t} />} />
        <Route path="/it-check" element={<ITCheck t={t} />} />
        <Route path="/partners" element={<Partners t={t} />} />
        <Route path="/customers" element={<Customers t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="/imprint" element={<div className={classes['placeholder-page']}>Imprint page</div>} />
        <Route path="/data-protection" element={<div className={classes['placeholder-page']}>Data protection page</div>} />
      </Routes>

      {!hideCallButton && (
        <a
          href="tel:+49896244740"
          className={`${classes['floating-call']} ${showTop ? classes['call-shifted'] : ''}`}
          aria-label="Call Pipeline"
        >
          <PhoneCall size={19} />
        </a>
      )}

      <button
        className={`${classes['back-to-top']} ${showTop ? classes['show'] : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>

      <Footer t={t} />
    </div>
  );
}

export default App;