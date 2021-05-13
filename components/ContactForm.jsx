import React from 'react';
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import styles from '../styles/ContactForm.module.css'

import bg from '../locales/bg'
import en from '../locales/en'

export default function ContactForm() {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'bg' ? bg : en

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8mpz1ym', 'template_672anqq', e.target, 'user_dm91VxzT5h6m9pZ86lKkS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className={styles.formContainer} data-aos="fade-left">
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <label for="name">{t.formName}:</label><br />
        <input type="text" name="name" placeholder="" required /><br />
      <label for="email">Email:</label><br />
        <input type="email" name="email" placeholder="" required /><br />
      <label for="subject">{t.formSubject}:</label><br />
        <input type="text" name="subject" placeholder="" /><br />
      <label for="message">{t.formMsg}:</label><br />
        <textarea name="message"  required /><br />
        <input type="submit" value={t.formBtn} />
    </form>
    </div>
  );
}