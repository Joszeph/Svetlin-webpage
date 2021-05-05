import Link from 'next/link'
import styles from '../styles/Footer.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return ( 
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footerLeft}>
          <address>
            <h3>Адрес кантора:</h3>
            <p>
              адвокат Светлин Тодоров<br />
              ул. „Александър Дякович” No 45, <br />
              ет. 4 в гр. Варна.
            </p>
          </address>
          <div className={styles.contacts}>
            <h3>Телефони за връзка:</h3>
            <p><a href="0888230529">тел.: 0888/23 05 29</a></p>
            <p><a href="052612551">тел.: 052/ 61 25 51</a></p>
            <h3>e–mails:</h3>
            <p><a href="svetlin1045@abv.bg">svetlin1045@abv.bg</a></p>
            <p><a href="svetliq@gmail.com">svetliq@gmail.com</a></p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.socialIcons}>
          <Link href="/"><a><i><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></i></a></Link>
          <Link href="/"><a><i><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></i></a></Link>
          <Link href="/"><a><i><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></i></a></Link>
          </div>
          <h4>Copyright 2021 Адвокат Светлин Тодоров – Варна</h4>
          <h5>Web Development by Mighty Mint</h5>
        </div>
      </div>
      <div className={styles.footerLine}></div>
    </footer>
     );
}
 
export default Footer;