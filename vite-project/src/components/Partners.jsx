import { motion } from 'framer-motion';
import classes from '../modules/Partners.module.scss';

import cisco from '../assets/partners/cisco.png';
import dell from '../assets/partners/dell.png';
import hornet from '../assets/partners/hornet.png';
import hpe from '../assets/partners/hpe.png';
import iust from '../assets/partners/iust.png';
import lenovo from '../assets/partners/lenovo.png';
import mcafee from '../assets/partners/mcafee.png';
import meraki from '../assets/partners/meraki.png';
import microsoft from '../assets/partners/microsoft.png';
import netgear from '../assets/partners/netgear.png';
import sonicwall from '../assets/partners/sonicwall.png';
import sophos from '../assets/partners/sophos.png';
import speedpoint from '../assets/partners/speedpoint.png';
import tpartner from '../assets/partners/Tpartner.png';
import veeam from '../assets/partners/veeam.png';
import vmware from '../assets/partners/vmware.png';
import vogl from '../assets/partners/vogl.png';
import watchguard from '../assets/partners/watchguard.png';

const partners = [
  { name: 'Cisco Systems', img: cisco },
  { name: 'Dell EMC', img: dell },
  { name: 'Hornetsecurity', img: hornet },
  { name: 'Hewlett Packard Enterprise', img: hpe },
  { name: 'IUST Network Services', img: iust },
  { name: 'Lenovo', img: lenovo },
  { name: 'McAfee', img: mcafee },
  { name: 'Cisco Meraki', img: meraki },
  { name: 'Microsoft', img: microsoft },
  { name: 'Netgear', img: netgear },
  { name: 'SonicWall', img: sonicwall },
  { name: 'Sophos', img: sophos },
  { name: 'Speedpoint', img: speedpoint },
  { name: 'Telekom Partner', img: tpartner },
  { name: 'Veeam', img: veeam },
  { name: 'VMware Partner', img: vmware },
  { name: 'VOGL Elektrotechnik', img: vogl },
  { name: 'WatchGuard', img: watchguard },
];

const Partners = ({ t }) => {
  const data = t.partnersPage;

  return (
    <section className={classes['partners-page']}>
      <div className={classes['container']}>
        <motion.div
          className={classes['header']}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <h1>{data.hero.title}</h1>
          <p>{data.hero.text}</p>
        </motion.div>

        <div className={classes['grid']}>
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className={classes['card']}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.02 }}
            >
              <div className={classes['logo-wrapper']}>
                <img src={partner.img} alt={partner.name} />
              </div>

              <span className={classes['label']}>{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;