import React from 'react';
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import styles from '../styles/ContactForm.module.css'

import "aos/dist/aos.css";

import bg from '../locales/bg'
import en from '../locales/en'

export default function ContactForm() {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'bg' ? bg : en

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_kf6qods', 'template_hj4vb1k', e.target, 'user_oQNPPzP1WZLr7VTTiqNt5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className={styles.formContainer} >
    <form className={styles.contactForm} onSubmit={sendEmail}>
      <label htmlFor="name">{t.formName}:</label><br />
        <input type="text" name="name" placeholder="" required /><br />
      <label htmlFor="email">Email:</label><br />
        <input type="email" name="email" placeholder="" required /><br />
      <label htmlFor="subject">{t.formSubject}:</label><br />
        <input type="text" name="subject" placeholder="" /><br />
      <label htmlFor="message">{t.formMsg}:</label><br />
        <textarea name="message"  required /><br />
        <input type="submit" value={t.formBtn} />
    </form>
    {/* <style jsx>{`
      .formContainer{
        box-sizing: border-box;
        width: 350px;
        margin-top: 40px;
    }
    
    .contactForm label{
        color:#333333;
    }
    
    .contactForm input[type=text] {
        padding: 15px;
        margin: 10px 0px 20px 10px;
        width:350px;
        border-top: none;
        border-right: none;
        background-color: transparent;
        border-bottom: 1px solid #333333;
        border-left: 1px solid #333333;
        color: #333333;
        box-shadow:4px 4px 10px rgba(0,0,0,0.06);
    }
    
    .contactForm input[type=email] {
        padding: 15px;
        margin: 10px 0px 20px 10px;
        width:350px;
        border-top: none;
        border-right: none;
        background-color: transparent;
        border-bottom: 1px solid #333333;
        border-left: 1px solid #333333;
        color: #333333;
        box-shadow:4px 4px 10px rgba(0,0,0,0.06);
    }
     
    .contactForm textarea {
        width:350px;
        resize: vertical;
        padding:15px;
        box-shadow:4px 4px 10px rgba(0,0,0,0.06);
        height: 60px;
        margin: 10px 0px 20px 10px;
        border-top: none;
        border-right: none;
        background-color: transparent;
        border-bottom: 1px solid #333333;
        border-left: 1px solid #333333;
        color: #333333;
    }
    
    .contactForm input[type=submit]{
        text-transform: uppercase;
        background-color: #f20f0f;
        color: white;
        border: none;
        padding: 10px 8px;
        font-size: 0.6em;
        font-family: "Comfortaa", cursive;
        margin:5px 0 0 10px;
        cursor:pointer;
    }
    `}</style> */}
    </div>
  );
}