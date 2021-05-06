import React from 'react';
import emailjs from 'emailjs-com';

import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {

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
    <div className={styles.formContainer}>
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <label for="name">Имена:</label><br />
        <input type="text" name="name" placeholder="" required /><br />
      <label for="email">Email:</label><br />
        <input type="email" name="email" placeholder="" required/><br />
      <label for="subject">Относно:</label><br />
        <input type="text" name="subject" placeholder="" /><br />
      <label for="message">Съобщение:</label><br />
        <textarea name="message" placeholder="Съобщение..." required /><br />
        <input type="submit" value="Изпрати" />
    </form>
    </div>
  );
}