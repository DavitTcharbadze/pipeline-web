import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from '../modules/Contact.module.scss';

const Contact = ({ t }) => {
  if (!t || !t.contact) return null;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });

    setStatus('');
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = true;
    if (!form.email.trim()) newErrors.email = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (!form.message.trim()) newErrors.message = true;
    if (!form.consent) newErrors.consent = true;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSending(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className={classes['contact-page']}>
      <div className={classes['container']}>
        <h1 className={classes['title']}>{t.contact.title}</h1>

        <div className={classes['content']}>
          <div className={classes['info']}>
            <p>{t.contact.intro1}</p>
            <p>{t.contact.intro2}</p>

            <p className={classes['address-title']}>{t.contact.addressTitle}</p>

            <strong>Pipeline DV-Beratung GmbH</strong>
            <p>Aschauer Straße 30</p>
            <p>D-81549 München</p>

            <p>
              tel <a href="tel:+49896244740">+49 89 6244740</a>
            </p>
            <p>fax +49 89 62447423</p>
            <p>
              mail <a href="mailto:info@pipeline.gmbh">info@pipeline.gmbh</a>
            </p>
          </div>

          <form className={classes['form']} onSubmit={handleSubmit}>
            <label>{t.contact.name}</label>
            <input name="name" value={form.name} onChange={handleChange} />
            {errors.name && <span className={classes['error']}>{t.contact.required}</span>}

            <label>{t.contact.email}</label>
            <input name="email" value={form.email} onChange={handleChange} />
            {errors.email && <span className={classes['error']}>{t.contact.required}</span>}

            <label>{t.contact.phone}</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <span className={classes['error']}>{t.contact.required}</span>}

            <label>{t.contact.message}</label>
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className={classes['error']}>{t.contact.required}</span>}

            <div className={classes['checkbox']}>
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
              />
              <span>{t.contact.consent}</span>
            </div>

            {errors.consent && <span className={classes['error']}>{t.contact.required}</span>}

            <p className={classes['privacy']}>
              {t.contact.privacy}{' '}
              <Link to="/data-protection">privacy policy</Link>.
            </p>

            {status === 'success' && (
              <p className={classes['success-message']}>
                Your message was sent successfully.
              </p>
            )}

            {status === 'error' && (
              <p className={classes['error']}>
                Something went wrong. Please try again later.
              </p>
            )}

            <button type="submit" className={classes['button']} disabled={isSending}>
              {isSending ? 'Sending...' : t.contact.send}
            </button>
          </form>
        </div>
      </div>

      <div className={classes['map']}>
        <iframe
          src="https://www.google.com/maps?q=Aschauer+Str.+30,+Munich&output=embed"
          loading="lazy"
          title="Pipeline DV-Beratung GmbH location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;