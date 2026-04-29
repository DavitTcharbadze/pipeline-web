import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import classes from './modules/App.module.scss';
import logo from './assets/logo.png';

import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Customers from './components/Customers';
import Contact from './components/Contact';
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const trigger = document.getElementById('via-pipeline');

      if (trigger) {
        const top = trigger.getBoundingClientRect().top;
        setShowTop(top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes['main-wrapper']}>
      <nav className={`${classes.navbar} ${menuOpen ? classes.open : ''}`}>
        <div className={classes['navbar-container']}>
          <Link to="/" className={classes['navbar-brand']}>
            <img src={logo} alt="Company Logo" className={classes['logo']} />
          </Link>
          <button
            className={classes['navbar-toggler']}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={classes['navbar-toggler-icon']}></span>
          </button>

          <div className={classes['navbar-collapse']}>
            <ul className={classes['navbar-nav']}>
              <li className={classes['nav-item']}>
                <Link to="/" className={classes['nav-link']}>Home</Link>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/solutions" className={classes['nav-link']}>Solutions</Link>

                <ul className={classes['dropdown-menu']}>
                  <li><Link to="/solutions/network-design">Network design and optimization</Link></li>
                  <li><Link to="/solutions/advice-service">Advice and service</Link></li>
                  <li><Link to="/solutions/hardware-software">Hardware and software sales</Link></li>
                  <li><Link to="/solutions/security">Security concepts</Link></li>
                  <li><Link to="/solutions/cloud">Cloud Solutions</Link></li>
                  <li><Link to="/solutions/leasing">Leasing of hardware and software</Link></li>
                  <li><Link to="/solutions/pipeline-support">Pipeline Quick Support</Link></li>
                </ul>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/partners" className={classes['nav-link']}>Partners</Link>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/customers" className={classes['nav-link']}>Customers</Link>
              </li>

              <li className={classes['nav-item']}>
                <Link to="/contact" className={classes['nav-link']}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions/network-design" element={<Solutions />} />
        <Route path="/solutions/advice-service" element={<Solutions />} />
        <Route path="/solutions/hardware-software" element={<Solutions />} />
        <Route path="/solutions/security" element={<Solutions />} />
        <Route path="/solutions/cloud" element={<Solutions />} />

        <Route path="/imprint" element={<div>Imprint page</div>} />
        <Route path="/data-protection" element={<div>Data protection page</div>} />
      </Routes>

      <button
        className={`${classes['back-to-top']} ${showTop ? classes['show'] : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <Footer />
    </div>
  );
}

export default App;